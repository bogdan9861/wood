$(function () {

    $('.main__slider-content').slick({
        slidesToShow: 1,
        asNavFor: '.main__slider-images',
        prevArrow: '<button class="slick-arrow left"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 10.5L11 20" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round"/></svg></button>',
        nextArrow: '<button class="slick-arrow right"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 10.5L1 20" stroke="#3D3D3D" stroke-width="2"stroke-linecap="round"/></svg></button>',
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.main__slider-images').slick({
        arrows: false,
        asNavFor: '.main__slider-content',
        fade: true,
        dots: true,
    })

    $('.sale__slider').slick({
        slidesToShow: 4,
        centerMode: true,
        prevArrow: false,
        prevArrow: '<button class="slick-arrow left"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 10.5L11 20" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round"/></svg></button>',
        nextArrow: '<button class="slick-arrow right-sale"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 10.5L1 20" stroke="#3D3D3D" stroke-width="2"stroke-linecap="round"/></svg></button>',
    })

    $('input, radio, checkbox, select').styler({

    });

    $('.aside__filter-wrap').on('click', function () {
        $('.aside__filter-drop').toggleClass('revers');
        $(this).next().find('.aside__list-slidetogle').slideToggle(500);
    });

    $('.jq-radio ').on('click', function () {
    });

    $('.jq-radio ').on('click', function () {
    })

    $('.product__cart__size-item').on('click', function () {
        $('.product__cart__size-item').removeClass('product__cart__size-item--active');
        $(this).addClass('product__cart__size-item--active');
    });

    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    
    let i = 0;
    
    plus.addEventListener("click", function () {
        i++;

        document.getElementById('num').innerHTML = i;
    });

    minus.addEventListener("click", function () {
        i--;

        if (i < 0) {
            i += 1;
        }

        document.getElementById('num').innerHTML = i;
    });

    $('.tab').on('click', function (e) {
        e.preventDefault()

        $('.tab').removeClass('tab--active');
        $(this).addClass('tab--active');

        $('.tabs-content__item').removeClass('tabs-content__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    })


    $('.product__slider').slick({
        prevArrow: '<button class="slick-arrow-cart left-cart"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 10.5L11 20" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round"/></svg></button>',
        nextArrow: '<button class="slick-arrow-cart  right-cart"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 10.5L1 20" stroke="#3D3D3D" stroke-width="2"stroke-linecap="round"/></svg></button>',
        dots: true, 
    })
    
});