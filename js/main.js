$(document).ready(function () {

    //portfolio_modal
    $('.example-view__button').click(function (e) {
        e.preventDefault();
        $('.example-view__img').removeClass('example-active')
        $('.example-view__button').removeClass('active')
        let datanum = $(this).attr('data-num');
        $('.example-view__img' + datanum).addClass('example-active')
        $('.example-view__button' + datanum).addClass('active')
    });
    $('.portfolio-button__open').click(function () {
        $('.example-view__img').removeClass('example-active')
        $('.example-view__button').removeClass('active')
        $('.example-view__img1').addClass('example-active')
        $('.example-view__button1').addClass('active')
    });

    //about
    $('.resume').click(function (e) {
        // $(this).addClass('resume-click');
        // $(this).removeClass('resume-hover cost-hover');
        $(this).css('height', 'auto');
    });

    //price
    $(".item-cost__service").click(function () {
        let sum = 0;
        $('.item-cost__service :checked').each(function () {
            sum += parseInt($(this).data('cost'));
        });
        $('.sum').text(sum);
        $('.sumv').attr('value', sum);
    });
    $('.sum-button__width').click(function () {
        $('.order__display').addClass('order__display_active');
        $('.order__display_active').hide().fadeIn(1000);
    });
    $('.igreeting__name').hover(
        function () { $(this).addClass('animated rubberBand') },
        function () { $(this).removeClass('animated rubberBand') }
    );

    let mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        $('.dpnone').css('display', 'flex');
    }

    $('.burger').click(function(){
        $('.burger__menu').toggleClass('burger__noactive');
        $('.aside').toggleClass('aside__block');
    })

    $(window).scroll(function(){
        if ($(window).scrollTop()>300){
            $('.button__top').addClass('button__top_show');
        } else{
            $('.button__top').removeClass('button__top_show');
        }
    });
    $('.button__top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '100');
      });

    $("#tel").mask("( 999 ) 99 99 999");
});


let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
            label.querySelector('.input__file-button-text').innerText = labelVal;
    });
});