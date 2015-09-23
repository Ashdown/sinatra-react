(function (React, App) {
    App.Components.TodoItem = React.createClass({displayName: "TodoItem",

        propTypes: {
            todo: React.PropTypes.object.isRequired
        },

        render: function () {

            var todo = this.props.todo;

            return (
                React.createElement("li", {key: todo.id}, 
                    React.createElement("label", null, 
                    todo.text
                    ), 
                    React.createElement("button", {className: "destory", onClick: this._onDestroyClick})
                )
                );
        },

        _onDestroyClick: function () {
            App.Actions.TodoActions.destroy(this.props.todo.id);
        }
    });
})(React, App);
