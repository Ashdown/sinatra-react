(function (React, App) {

    App.Components.Header = React.createClass({displayName: "Header",

        render: function(){

            return (
                React.createElement("header", {id: "header"}, 
                    React.createElement("h1", null, "todos"), 
                    React.createElement(App.Components.TodoTextInput, {id: "my-todo", placeholder: "What needs to be done?", onSave: this._onSave})
                )
            )
        },

        _onSave: function(text){
            if(text.trim()) {
                App.Actions.Todo.create(text);
            }
        }

    });

})(React, App);