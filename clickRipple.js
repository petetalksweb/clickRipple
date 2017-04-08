var clickX;
var clickY;
var pixelsToTop;
var pixelsToLeft;
var width;
var height;

function setupVariables(event, triggeredElement) {
    clickX = event.pageX;
    clickY = event.pageY;
    pixelsToTop = triggeredElement.offsetTop;
    pixelsToLeft = triggeredElement.offsetLeft;
    width = triggeredElement.offsetWidth;
    height = triggeredElement.offsetHeight;
}

function setupClickRipple() {
    var rippleElements = document.getElementsByClassName('clickRipple');
    for(rippleElement of rippleElements) {
        rippleElement.addEventListener('mouseup', function(event) {
            setupVariables(event, this);
            var rippleSpan = document.createElement('span');
            rippleSpan.className = 'clickRippleSpan';
            rippleSpan.style.top = clickY - Math.max(width, height) - pixelsToTop + 'px';
            rippleSpan.style.left = clickX - Math.max(width, height) - pixelsToLeft + 'px';
            rippleSpan.style.minWidth = Math.max(width, height) * 2 + 'px';
            rippleSpan.style.minHeight = Math.max(width, height) * 2 + 'px';
            rippleSpan.style.transition = 'all ' + (Math.max(width, height) * 2) / 250 + 's ease-in';
            this.appendChild(rippleSpan);
            requestAnimationFrame(function() {
                rippleSpan.className += ' ripple';
                setTimeout(function() {
                    this.removeChild(rippleSpan);
                }.bind(this),((Math.max(width, height) * 2) / 250) * 1000);
            }.bind(this));
        });
    }
}
    