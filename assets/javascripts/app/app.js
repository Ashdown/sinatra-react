//= require_directory .
//= require_tree .

(function(React, App) {

    App.target = document.getElementById('content');

    React.render(
        <App.Components.Container />,
        document.getElementById('content')
    );

})(React, App);



