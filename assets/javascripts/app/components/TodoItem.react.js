(function (React, App) {
    App.Components.TodoItem = React.createClass({

        propTypes: {
            todo: React.PropTypes.object.isRequired
        },

        render: function () {

            var todo = this.props.todo;

            return (
                <li key={todo.id}>
                    <label>
                    {todo.text}
                    </label>
                    <button className="destory" onClick={this._onDestroyClick} />
                </li>
                );
        },

        _onDestroyClick: function () {
            App.Actions.TodoActions.destroy(this.props.todo.id);
        }
    });
})(React, App);
