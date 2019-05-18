AFRAME.registerComponent('make-invisible', {
    schema: {
        visible: {default: 'true'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        var defaultVisible = el.getAttribute('visible');

        el.addEventListener('mouseenter', function () {
        el.setAttribute('visible', false);
        });

    }
});