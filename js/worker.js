define(function(require,exports,module) {
    var $ = require('../lib/jquery');

    function getDirection(event, obj) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        var elementX = obj.offset().left;
        var elementY = obj.offset().top;
        var elWidth = obj.outerWidth();
        var elHeight = obj.outerHeight();
        var relativeX = mouseX - elementX;
        var relativeY = mouseY - elementY;
        var x = (relativeX - (elWidth / 2) * (elWidth > elHeight ? (elHeight / elWidth) : 1));  //原点坐标(x,y)
        var y = (relativeY - (elHeight / 2) * (elHeight > elWidth ? (elWidth / elHeight) : 1));
        var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4; //根据角度求象限
        return d;
    }

    var addClasses = function (direction, obj, state) {
        switch (direction) {
            case 0:
                obj.addClass(state + '_top');
                break;
            case 1:
                obj.addClass(state + '_right');
                break;
            case 2:
                obj.addClass(state + '_bottom');
                break;
            case 3:
                obj.addClass(state + '_left');
                break;
        }
    };
    var removeClasses = function (obj) {
        var removePattern = / (in|out|rotate)_[a-zA-Z_]+/g;
        obj.each(function () {
            var currentClasses = $(this).attr('class');
            var removeName = currentClasses.match(removePattern);
            if (removeName != null) {
                $(this).removeClass(removeName[0]);
            }
        });
    };

    exports.init = function () {
        $('.description').mouseenter(function (event) {
            event.preventDefault();
            var d = getDirection(event, $(this));   //判断鼠标从哪个方向移入
            switch (d) {
                case 0:
                    var shelter = $(this).children('.proShelter.top');
                    var descrpt = $(this).children('.descrpt.down');
                    removeClasses($(this).children());
                    addClasses(d, shelter, 'in');
                    addClasses(d, descrpt, 'rotate_in');
                    break;
                case 2:
                    var shelter = $(this).children('.proShelter.down');
                    var descrpt = $(this).children('.descrpt.top');
                    removeClasses($(this).children());
                    addClasses(d, shelter, 'in');
                    addClasses(d, descrpt, 'rotate_in');
                    break;
                case 1:
                case 3:
                    var shelter = $(this).children('.descrpt.top');
                    var descrpt = $(this).children('.descrpt.down');
                    removeClasses($(this).children());
                    addClasses(d, shelter, 'rotate_in');
                    addClasses(d, descrpt, 'rotate_in');
                    break;
            }
            return false;
        });
        $('.description').mouseleave(function (event) {
            event.preventDefault();
            var d = getDirection(event, $(this));
            switch (d) {
                case 0:
                    var shelter = $(this).children('.proShelter.top');
                    var descrpt = $(this).children('.descrpt.down');
                    removeClasses($(this).children());
                    addClasses(d, shelter, 'out');
                    addClasses(d, descrpt, 'rotate_out');
                    break;
                case 2:
                    var shelter = $(this).children('.proShelter.down');
                    var descrpt = $(this).children('.descrpt.top');
                    removeClasses($(this).children());
                    addClasses(d, shelter, 'out');
                    addClasses(d, descrpt, 'rotate_out');
                    break;
                case 1:
                case 3:
                    var shelter = $(this).children('.descrpt.top');
                    var descrpt = $(this).children('.descrpt.down');
                    removeClasses($(this).children());
                    addClasses(d, shelter, 'rotate_out');
                    addClasses(d, descrpt, 'rotate_out');
                    break;
            }
            return false;
        });
    };
});