<script>
    $(function (e) {
        $('.mainmenu li').each(function (i, e) {
            $(this).mouseenter(function (e) {
                $(this).addClass('on').siblings().removeClass('on');
            });
        });
        $('.mainmenu').mouseleave(function (e) {
            $('.mainmenu li').removeClass('on')
        });
    })
</script>