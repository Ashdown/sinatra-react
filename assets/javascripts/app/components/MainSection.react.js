(function (React, App) {
    App.Components.MainSection = React.createClass({

        render: function () {

            var allTodos = this.props.allTodos;
            var todos = [];

            for (var key in allTodos) {
                todos.push(<App.Components.TodoItem key={key} todo={allTodos[key]} />);
            }

            return (
                <section id="main">
                    <ul id="todo-list">{todos}</ul>
                </section>
                );

        }
    });

})(React, App);