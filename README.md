# Simple Spotlight

### Description
A simple spotlight effect, following the cursor, that reveals underlying content.

### Demo

![Demo GIF](https://i.imgur.com/DbPhNTr.gif)

### Supported Browsers

Tested it in Firefox, Chrome and Edge. Seems to be working perfectly in all 3 of them.

### How it works and why
We stack 2 `div`s on top of each other. In my case `div#hidden-container` which will be on top and not visible. `div#visible-container` the container that's visible by default.

`div#hidden-container` has a higher `z-index` than `div#visible-container` because we want it to be on top since we're going to mask it.

We have a class called `circle-clip`, this basically creates a mask with a shape. This means that any element with this class will only be visible where the mask is positioned. If you look at the class itself you will notice that the `mask-position` is set to `var(--clip-position)`, this means that we're passing the position via HTML (with the help of javascript).
If you look at `mask: url(...)` this is where we add the shape as a SVG. You can change this to any other SVG and it should work. Just make sure the `mask-size` is big enough otherwise your shape will get cut off.

Without any JavaScript running, with the setup above, you should see a circle positioned to the top left.
![Top Left Positioned Circle](https://i.imgur.com/hcFkqQC.png)

All that's left to do is to position the circle based on the mouse position. This is done with some simple JavaScript.
I used jQuery for this, but you can probably do it without it.

What we want to do here is trigger an event whenever the mouse moves on the body (`body.mousemove`) so we can get the position of the cursor and apply it to the mask (remember `var(--clip-position)`).

We get the cursor position, on the page, `e.pageX` + `e.pageY`. If you look at the JavaScript you will notice that we have `e.pageX - 125`. This is done because when I created the SVG circle I gave it the size by using `r=125` which means that the circle will have a radius of `125px` so we need to position it so the center of the circle will be on the cursors position.

Since we have `cImg.css('--clip-position', '...')` whenever the cursor moves we will automatically add `--clip-position` to the selected `div` thus achieving a "spotlight effect" on the cursor.