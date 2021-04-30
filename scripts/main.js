requirejs.config({
    "baseUrl": "scripts",
    "paths": {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min",
        "component": "util/components",
        "csi": "util/csi"
    }
});

define(["jquery", "component", "csi"], function($) {
    $(function() {
        
    });
});