(function (React, App, assign) {


//    var EventEmitter = require('events').EventEmitter;

    var CHANGE_EVENT_STRING = 'change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _todos = {};

    /**
     * Create a Todo item.
     * @param {string} text The content of the TODO
     */

    function create(text) {
        //use current timestamp in place of the id
        var id = Date.now();
        _todos[id] = {
            id: id,
            complete: false,
            text: text
        };
    }

    /**
     * delete a TODO item
     * @param {string} id
     */

    function destroy(id) {
        delete _todos[id];
    }

    App.Stores.TodoStore = function(){};

    App.Stores.TodoStore = assign({}, App.Stores.TodoStore.prototype, {

        getAll: function () {
            return _todos;
        },

        emitChange: function() {
            App.target.dispatchEvent(CHANGE_EVENT);
        },

        addChangeListener: function(callback) {
            App.target.addEventListener(CHANGE_EVENT_STRING, callback);
        },

        removeChangeListener: function(callback) {
            App.target.removeEventListener(CHANGE_EVENT_STRING, callback)
        },

        dispatcherIndex: App.Dispatcher.register(function (payload) {
            var action = payload.action;
            var text;

            switch (action.actionType) {
                case App.Constants.TodoConstants.TODO_CREATE:
                    text = action.text.trim();
                    if (text !== '') {
                        create(text);
                        App.Stores.TodoStore.emitChange()
                    }
                    break;
                case App.Constants.TodoConstants.TODO_DESTROY:
                    destroy(action.id);
                    App.Stores.TodoStore.emitChange();
                    break;
                //add more cases for other action types...ie TODO_UPDATE
            }

            return true; //=> no errors (needed by promise in dispatcher)
        })

    });

})(React, App, objectAssign);
