/**
 * =======================
 * Ratchet iOS7 v0.1.0
 * Created by Ryan Walters
 * http://ryanwalters.co
 * =======================
 */

/*jslint browser: true*/

/* -----------------------
 * SWIPES
 * ----------------------- */
var getSwipes = function (target, th, max) {
    var startX,
        startY,
        deltaX,
        deltaY,
        timeStart,
        timeMax = max || 400,
        threshold = th || 50,
        direction,
        touchstart = function (event) {
            startX = event.touches[0].pageX;
            startY = event.touches[0].pageY;
            timeStart = +new Date();
        },
        touchend = function (event) {
            if (+new Date() - timeStart < timeMax) {
                deltaX = startX - event.changedTouches[0].pageX;
                deltaY = startY - event.changedTouches[0].pageY;
                return direction = (Math.abs(deltaX) >= threshold && Math.abs(deltaX) > Math.abs(deltaY)) ?    // Are we moving horizontally?
                    deltaX > 0 ? "LEFT" : "RIGHT" :                                                     // ...yes: return right or left
                    (Math.abs(deltaY) >= threshold && Math.abs(deltaY) > Math.abs(deltaX)) ?            // ...no: are we moving vertically?
                        deltaY > 0 ? "UP" : "DOWN" :                                                    //      ...yes: return up or down
                        null;                                                                           //      ...no
            }
        };
    
    for (var key in target) {
        el = target[key];
        if (el.addEventListener) {
            el.addEventListener("touchstart", touchstart, false);
            el.addEventListener("touchend", touchend, false);
        }
    }
};

/* -----------------------
 * EDITABLES
 * ----------------------- */
(function () {
    var findEditables = function (target) {
            var i, editables = document.querySelectorAll(".editable li:not(.list-divider)");
            for (; target && target !== document; target = target.parentNode) {
                for (i = editables.length; i--;) { if (editables[i] === target) { return target; } }
            }
        };
    
    window.addEventListener("touchend", function (event) {
        var editable = findEditables(event.target);
        if (editable) { editable.classList.toggle("active") };
    });
}());