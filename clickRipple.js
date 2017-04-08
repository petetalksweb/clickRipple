var clickX;
var clickY;
var pixelsToTop;
var pixelsToLeft;
var width;
var height;
var maxDimension;

function setupVariables(event, triggeredElement) {
    clickX = event.pageX;
    clickY = event.pageY;
    pixelsToTop = triggeredElement.offsetTop;
    pixelsToLeft = triggeredElement.offsetLeft;
    width = triggeredElement.offsetWidth;
    height = triggeredElement.offsetHeight;
    maxDimension = Math.max(width, height);
}

function setupClickRipple() {
    var rippleElements = document.getElementsByClassName('clickRipple');
    for(rippleElement of rippleElements) {
        rippleElement.addEventListener('mouseup', function(event) {
            setupVariables(event, this);
            var rippleSpan = document.createElement('span');
            rippleSpan.className = 'clickRippleSpan';
            rippleSpan.style.top = clickY - maxDimension - pixelsToTop + 'px';
            rippleSpan.style.left = clickX - maxDimension - pixelsToLeft + 'px';
            rippleSpan.style.minWidth = maxDimension * 2 + 'px';
            rippleSpan.style.minHeight = maxDimension * 2 + 'px';
            rippleSpan.style.transition = 'all ' + (maxDimension * 2) / 250 + 's ease-in';
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
    