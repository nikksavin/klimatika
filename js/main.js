$(document).ready(function() {

    // BURGER MENU
    $('#burgerBtn').on('click', function() {
        $(this).toggleClass('opened');
        $('body').toggleClass('overflow-hidden');
        $('.header__bottom').toggleClass('opened');
        $('body').toggleClass('bg-overlay');
    });

     // CLOSE BURGER MENU
    $('html').click(function(e) {
        if (!$(e.target).closest('.header__bottom').length && !$(e.target).closest('#burgerBtn').length) {
            $('#burgerBtn').removeClass('opened');
            $('body').removeClass('overflow-hidden');
            $('.header__bottom').removeClass('opened');
            $('#page').removeClass('bg-overlay');
        }
    });

    // NAV ACCORDION
    $(".nav__menu-item a").click(function(){
		$("#accordion ul ul").slideUp(200);
        $("#accordion ul i").toggleClass("rotate");
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible")){
			$(this).next().slideDown(200);
		}
	});

    // INIT CATALOG ITEM GALLERY

    let item_cart_pagination;

    item_cart_pagination = new Swiper('.swiper-item-pagination', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchSlidesProgress: true,
        direction: 'horizontal',

        breakpoints: {
            768: {
                direction: 'vertical'
            }
        }
    });

    let item_cart;

    item_cart = new Swiper('.swiper-item', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
          swiper: item_cart_pagination,
        },
    });


    // CATALOG TABS

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});



    // POPUP SHOW/HIDE

    $('#callbackBtn').on('click', function(e) {
        e.preventDefault();
        $('.popup-layer, .popup-container').addClass('opened');
    });

    $('.popup-close').on('click', function(e) {
        e.preventDefault();
        $('.popup-layer, .popup-container').removeClass('opened');
    });

    // ???????????????? ???????? ???? ????????
    $(document).mouseup( function (e) { 
        var popup = $('.popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0){
            $('.popup-layer, .popup-container').removeClass('opened');
            $('.popup').removeClass('hide');
            $('.popup-success').addClass('hide');
        }
    });

    $('.popup-success a.button-style').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('popup-opened');
        $('.popup-layer, .popup-container').removeClass('opened');
        $('.popup').toggleClass('hide');
    });
    
});