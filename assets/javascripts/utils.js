var modules = {};

(function(modules){

    'use strict';

    var module = {};

    module.crown = function(name) {
        return 'King ' + name;
    };

    modules.utils = module;

})(modules);