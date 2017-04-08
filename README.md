# clickRipple
A JavaScript library to give your buttons (or any element really) a "ripple" effect on click.
![example gif](https://raw.githubusercontent.com/petetalksweb/clickRipple/master/example.gif)

## Usage

Just include clickRipple.min.js and clickRipple.min.css inside your html page

```html
<link rel="stylesheet" href="example.min.css">
<script src="clickRipple.min.js"></script>
```

And initialize by calling
```javascript
setupClickRipple();
```
That's it.

## Advanced Usage

The setupClickRipple function does accept an options JSON object, to allow for some customization

* options.velocity
  * The "ripple" follows the Material Design principle of transitions on bigger elements, taking longer, but you can edit the velocity (pixels per secons) of the ripple.
  * The default value is 250 pps.
  * Example to set to 500 pps:
  * ```javascript
    setupClickRipple({velocity: 500});
    ```
* options.rippleColor
  * This, if the name isn't obvious enought, will change the color of the ripple.
  * The default value is 'white'.
  * Example to set to red:
  * ```javascript
    setupClickRipple({rippleColor: 'red'});
