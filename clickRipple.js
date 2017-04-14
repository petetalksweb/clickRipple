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
    for(var i = 0; i < rippleElements.length; i++) {
        rippleElements[i].addEventListener('mousedown', clickRipple);
    }
}

function clickRipple(event) {
    if(event) {
        var rippleSpan = generateRippleSpan(event.pageX, 
            event.pageY, 
            this.offsetTop, 
            this.offsetLeft, 
            Math.max(this.offsetWidth, this.offsetHeight)
        );
        this.appendChild(rippleSpan);
        requestAnimationFrame(function() {
            rippleSpan.className += ' ripple';
            this.addEventListener('mouseup', function handler() {
                this.removeEventListener('mouseup', handler);
                clickFade(event, rippleSpan)
            });
            this.addEventListener('mouseout', function handler() {
                this.removeEventListener('mouseout', handler);
                clickFade(event, rippleSpan)
            });
        });
    }
}

function clickFade(event, rippleSpan) {
    if(event) {
        rippleSpan.className += ' fade';
        rippleSpan.addEventListener('transitionend', function(event) {
            if(event.propertyName === 'opacity' && this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });
    }
}

function generateRippleSpan(clickX, clickY, pixelsToTop, pixelsToLeft, maxDimension) {
    var rippleSpan = document.createElement('span');
    rippleSpan.className = 'clickRippleSpan';
    rippleSpan.style.top = clickY - maxDimension - pixelsToTop + 'px';
    rippleSpan.style.left = clickX - maxDimension - pixelsToLeft + 'px';
    rippleSpan.style.minWidth = maxDimension * 2 + 'px';
    rippleSpan.style.minHeight = maxDimension * 2 + 'px';
    rippleSpan.style.backgroundColor = rippleColor;
    rippleSpan.style.transitionDuration = (maxDimension * 2) / pps + 's';
    return rippleSpan;
}