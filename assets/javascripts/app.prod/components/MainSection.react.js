(function (React, App) {
    App.Components.MainSection = React.createClass({displayName: "MainSection",

        render: function () {

            var allTodos = this.props.allTodos;
            var todos = [];

            for (var key in allTodos) {
                todos.push(React.createElement(App.Components.TodoItem, {key: key, todo: allTodos[key]}));
            }

            return (
                React.createElement("section", {id: "main"}, 
                    React.createElement("ul", {id: "todo-list"}, todos)
                )
                );

        }
    });

})(React, App);