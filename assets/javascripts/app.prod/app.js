//= require_directory .
//= require_tree .

(function(React, App) {

    App.target = document.getElementById('content');

    React.render(
        React.createElement(App.Components.Container, null),
        document.getElementById('content')
    );

})(React, App);
