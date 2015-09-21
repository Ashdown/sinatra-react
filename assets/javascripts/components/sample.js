(function(React){

    'use strict';

    var PresidentsContainer = React.createClass({

        render: function(){
            return (
                <div class="presidentsContainer">
                    <h2>Presidents Container</h2>
                    <ul>
                        <li>T.R. Roosevelt</li>
                        <li>Groover Cleaveland</li>
                    </ul>
                </div>
                );
        }
    });


    React.render(
        <PresidentsContainer/>,
        document.getElementById('content')
    );


})(React);