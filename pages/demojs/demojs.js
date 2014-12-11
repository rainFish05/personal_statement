define(function(require,exports,module) {
    var $ = require('../../lib/jquery');
    var dataJson = require('../demojs/json.js');
    var tpl = null;

    function tryRender() {
        if(dataJson && tpl) {
            var template = Handlebars.compile(tpl);
            $('.container').html(template(dataJson));
        }
    }
    $.get('demojs.tpl', function(source) {
        tpl = source;
        tryRender();
    });
});