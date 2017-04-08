var pps = 250; // pixels per second
var rippleColor = 'white';

function setupClickRipple(options) {
    var rippleElements = document.getElementsByClassName('clickRipple');
    if(options) {
        if(options.velocity && typeof options.velocity === 'number') {
            pps = options.velocity;
        }
        if(options.color) {
            rippleColor = options.color;
        }
    }
    for(rippleElement of rippleElements) {
        rippleElement.addEventListener('mouseup', clickRipple);
    }
}

function clickRipple(event) {
    if(event) {
        var clickX = event.pageX;
        var clickY = event.pageY;
        var pixelsToTop = this.offsetTop;
        var pixelsToLeft = this.offsetLeft;
        var maxDimension = Math.max(this.offsetWidth, this.offsetHeight);
        var rippleSpan = document.createElement('span');
        rippleSpan.className = 'clickRippleSpan';
        rippleSpan.style.top = clickY - maxDimension - pixelsToTop + 'px';
        rippleSpan.style.left = clickX - maxDimension - pixelsToLeft + 'px';
        rippleSpan.style.minWidth = maxDimension * 2 + 'px';
        rippleSpan.style.minHeight = maxDimension * 2 + 'px';
        rippleSpan.style.backgroundColor = rippleColor;
        rippleSpan.style.transitionDuration = (maxDimension * 2) / pps + 's';
        this.appendChild(rippleSpan);
        requestAnimationFrame(function() {
            rippleSpan.className += ' ripple';
            setTimeout(function() {
                this.removeChild(rippleSpan);
            }.bind(this),((maxDimension * 2) / pps) * 1000);
        }.bind(this));
    }
}