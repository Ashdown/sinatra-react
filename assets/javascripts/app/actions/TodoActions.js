(function(React, App) {

    App.Actions.Todo = {
        create: function (text) {
            App.Dispatcher.handleViewAction({
                actionType: App.Constants.TodoConstants.TODO_CREATE,
                text: text
            });
        },
        destroy: function (id) {
            App.Dispatcher.handleViewAction({
                actionType: App.Constants.TodoConstants.TODO_DESTORY,
                id: id
            });
        }
    };

})(React, App);