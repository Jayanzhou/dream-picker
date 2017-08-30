/**
 * Created by jay on 17-8-29.
 */

layui.define(["common", "carousel"], (exports) => {
    layui.carousel.render({
        elem: '#logo_carousel',
        width: '100%',
        height: "70vh",
        arrow: 'always',
        anim: 'fade',
        autoplay: true
    });

    exports("index");
});