const $cImg = $('#hidden-container');
const $body = $('body');

$body.mousemove(function (e) {
    $cImg.css('--clip-position', `${(e.pageX - 125)}px ${(e.pageY - 125)}px`);
});
