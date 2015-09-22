(function (React, App) {

    function getTodoState() {

        return {
            allTodos: App.Stores.TodoStore.getAll()
        };
    }

    App.Components.Container = React.createClass({
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
                <div>
                    <App.Components.Header />
                    <App.Components.MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                    />
                    <App.Components.Footer allTodos={this.state.allTodos} />
                </div>
                );
        },

        _onChange: function () {
            this.setState(getTodoState());
        }

    });

})(React, App);