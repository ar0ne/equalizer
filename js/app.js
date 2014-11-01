$(document) .ready( function () {

    var setEqualizer = function (selector, timeout, colWidth) {
        colWidth = colWidth || 1;

        $(selector).css({
            verticalAlign: 'bottom',
            lineHeight: $(selector).height() + 'px',
        });

        var column_count = Math.ceil($(selector).width()/colWidth);

        for (var i = 0; i < column_count; i++) {
            $("<span> </span>").appendTo(selector);
        }
        $(selector + ' span').css({
            verticalAlign: 'bottom',
            display: 'inline-block',

            fontSize: 0,
            lineHeight: 0,

            width: colWidth,
            background: 'pink',
            borderTop: '2px solid red'
        });

        run_equalizer(selector, timeout);
    }
      
    var run_equalizer = function (selector, timeout) {

        var height_selector = $(selector) .height ();

        $(selector + ' span') .each( function (i) {

            var anim = function (that) {
                that .animate (
                    {
                        height:  height_selector * Math.random(),
                    },
                    timeout + i, 
                    'linear',
                    function () {
                        anim(that);
                    }
                )
            }

            anim($(this));
        });

    }

    var time         = 1000,
        width_col    = 2;

    setEqualizer('#eq_1 .equalizer', time, width_col);
    setEqualizer('#eq_2 .equalizer', time, width_col);
    setEqualizer('#eq_3 .equalizer', time, width_col);

});
