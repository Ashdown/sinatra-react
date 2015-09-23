(function (React, App) {

    function getTodoState() {

        return {
            allTodos: App.Stores.TodoStore.getAll()
        };
    }

    App.Components.Container = React.createClass({displayName: "Container",
        getInitialState: function () {
            return getTodoState();
        },

        componentDidMount: function () {
            App.Stores.TodoStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function () {
            App.Stores.TodoStore.removeChangeListener(this._onChange);
        },

        /**
         * @return {object}
         */
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(App.Components.Header, null), 
                    React.createElement(App.Components.MainSection, {
                    allTodos: this.state.allTodos, 
                    areAllComplete: this.state.areAllComplete}
                    ), 
                    React.createElement(App.Components.Footer, {allTodos: this.state.allTodos})
                )
                );
        },

        _onChange: function () {
            this.setState(getTodoState());
        }

    });

})(React, App);