$(document).ready(function(){
    $('.wallet_app, .dpay_app, .hard_wallet, .store, .buy').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    $(document).click(function (event) {
        if ($(event.target).hasClass('responsive_menu')) {
            $('.side').toggleClass('show');
            $('.fade').toggleClass('in');
        } else if($('.side').hasClass('show') && $(event.target).closest('.toogle_menu').length == 0) {
            $('.side').removeClass('show');
            $('.fade').toggleClass('in');
        } else if($(event.target).closest('.toogle_menu').length > 0) {
            $(event.target).parent('li').addClass('active');
        }
    });
});
