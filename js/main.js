define(function(require,exports,module) {
    var $ = require('../lib/jquery');

    exports.main = function() {
        (function() {   //初始化worker展示部分
            $.getJSON("json/worker.json", function(data) {
                render("worker", data, $(".container"));
            });
        })();

        window.onhashchange = function() {
            var hash = location.hash.replace("#!", "");
            var dataUrl = "json/" + hash + ".json";
            var templateName = hash;
            $.getJSON(dataUrl, function(data) {
                render(templateName, data, $(".container"));
            });
        };
    };

    var render = function(templateName ,data, rootNode) {
        var pageSource = null;
        var url = "templates/" + templateName + ".tpl";

        function tryRender() {
            if (pageSource) {
                var template = Handlebars.compile(pageSource);
                rootNode.html(template(data));
                //添加新模板所需要的js文件
                var tplJSurl = "../js/" + templateName + ".js";
                require.async(tplJSurl, function(tplJS) {
                   tplJS.init();
                });
            }
        }

        $.get(url, function(source) {
            pageSource = source;
            tryRender();
        })
    };
});

