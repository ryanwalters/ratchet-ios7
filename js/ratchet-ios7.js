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
(function () {
    window.Swipes = {
        getSwipes: function (th, max) {
            var startX,
                startY,
                deltaX,
                deltaY,
                timeStart,
                timeMax = max || 400,
                threshold = th || 50,
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
                                this.left = true;
                                this.right = this.up = this.down = false;
                            } else {
                                this.right  = true;
                                this.left = this.up = this.down = false;
                            }
                        } else if (Math.abs(deltaY) >= threshold && Math.abs(deltaY) > Math.abs(deltaX)) {  // moving vertically
                            if (deltaY > 0) {
                                this.up     = true;
                                this.left = this.right = this.down = false;
                            } else {
                                this.down   = true;
                                this.left = this.right = this.down = false;
                            }
                        }
                    }
                };
            
            window.addEventListener("touchstart", touchstart, false);
            window.addEventListener("touchend", touchend, false);
        },
        left:   false,
        right:  false,
        up:     false,
        down:   false
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
    
    window.addEventListener("touchend", function (event) {
        var editable = findEditables(event.target);
        if (editable) { editable.classList.toggle("active"); alert(Swipes.left) };
        
    });
}());