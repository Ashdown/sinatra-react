(function (React, App) {

    App.Components.Header = React.createClass({

        render: function(){

            return (
                <header id="header">
                    <h1>todos</h1>
                    <App.Components.TodoTextInput id="my-todo" placeholder="What needs to be done?" onSave={this._onSave} />
                </header>
            )
        },

        _onSave: function(text){
            if(text.trim()) {
                App.Actions.Todo.create(text);
            }
        }

    });

})(React, App);