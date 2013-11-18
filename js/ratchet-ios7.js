/**
 * =======================
 * Ratchet iOS7 v0.1.0
 * Created by Ryan Walters
 * http://ryanwalters.co
 * =======================
 */

/* -----------------------
 * SWIPES
 * ----------------------- */
(function () {
    window.Swipes = {
        getSwipes: function () {
            var startX,
                startY,
                deltaX,
                deltaY,
                timeStart,
                timeMax = 400,
                threshold = 50,
                swipe = new CustomEvent("swipe", {
                    detail: {},
                    bubbles: true,
                    cancelable: true
                }),
                direction = {
                    left:   false,
                    right:  false,
                    up:     false,
                    down:   false
                },
                touchstart = function (event) {
                    startX = event.touches[0].pageX;
                    startY = event.touches[0].pageY;
                    timeStart = +new Date();
                },
                touchend = function (event) {
                    if (+new Date() - timeStart < timeMax) {
                        deltaX = startX - event.changedTouches[0].pageX;
                        deltaY = startY - event.changedTouches[0].pageY;
                        if (Math.abs(deltaX) >= threshold && Math.abs(deltaX) > Math.abs(deltaY)) {         // moving horizontally
                            if (deltaX > 0) {
                                direction.left = true;
                                direction.right = direction.up = direction.down = false;
                            } else {
                                direction.right  = true;
                                direction.left = direction.up = direction.down = false;
                            }
                        } else if (Math.abs(deltaY) >= threshold && Math.abs(deltaY) > Math.abs(deltaX)) {  // moving vertically
                            if (deltaY > 0) {
                                direction.up     = true;
                                direction.left = direction.right = direction.down = false;
                            } else {
                                direction.down   = true;
                                direction.left = direction.right = direction.down = false;
                            }
                        } else
                            direction.left = direction.right = direction.up = direction.down = false;
                    }
                    swipe.detail.direction = direction;
                    swipe.detail.target = event.target; // todo: see if i can attach directly to target
                    window.dispatchEvent(swipe);
                };
            window.addEventListener("touchstart", touchstart, false);
            window.addEventListener("touchend", touchend, false);
        }
    };
    Swipes.getSwipes();
}());

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
    
    window.addEventListener("swipe", function (event) {
        var editable = findEditables(event.detail.target);
        if (editable) {
            event.detail.direction.left ? editable.classList.add("active") : null;
            event.detail.direction.right ? editable.classList.remove("active") : null;
        };
    });
    window.addEventListener("touchend", function (event) {
        var editable = findEditables(event.target),
            currentEditable = editable.parentNode.firstChild;
        if (editable) {
            if (event.target.nodeName === "LI" && editable.classList.contains("active")) {
                editable.parentNode.removeChild(editable);
            }
            for (; currentEditable; currentEditable = currentEditable.nextSibling) {
                if (currentEditable.nodeType === 1 && currentEditable !== editable) {
                    currentEditable.classList.remove("active");
                }
            }
        }
    });
}());