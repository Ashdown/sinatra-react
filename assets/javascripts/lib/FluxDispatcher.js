//= require lib/object-assign

(function(Promise, assign) {

    var _callbacks = [];
    var _promises = [];

    FluxDispatcher = function () {
    };
    FluxDispatcher.prototype = assign({}, FluxDispatcher.prototype, {
        /**
         * Register a Store's callback so that it my be invoked by an action.
         * @param {function} callback The callback to the registered.
         * @return {number} The index of the callback within the _callbacks array.
         */

        register: function (callback) {
            _callbacks.push(callback);
            return _callbacks.length - 1; //index
        },

        /**
         * dispatch
         * @param {object} payload The data from the action
         */

        dispatch: function (payload) {
            //Create an array of promises for callbacks to reference
            var resolves = [];
            var rejects = [];
            _promises = _callbacks.map(function (_, i) {
                return new Promise(function (resolve, reject) {
                    resolves[i] = resolve;
                    rejects[i] = reject;
                });
            });
            //Dispatch to callbacks and resolve or reject promises.
            _callbacks.forEach(function (callback, i) {
                // Callback can return an obj, to resolve, or a promise, to chain
                Promise.resolve(callback(payload)).then(function () {
                    resolves[i](payload);
                }, function () {
                    rejects[i](new Error('Dispatcher callback unsuccessful'));
                });
            });
            _promises = [];
        }
    });

    window.FluxDispatcher = FluxDispatcher;

})(Promise, objectAssign);