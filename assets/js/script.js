
// ステッキーヘッダー
$(function() {
  let $win = $(window),
    $mv = $('.main-view'),
    $header = $('.header'),
    mvHeight = $mv.outerHeight();
    fixedClass = 'fixed';
    $win.on('load scroll', function(){
      let value = $(this).scrollTop();
      if($win.width() > 768) {
        if( value > mvHeight) {
          $header.addClass(fixedClass);
        }else {
          $header.removeClass(fixedClass);
        }
      }
    });
});

// スライダー
$('.slider').slick ({
  autoplay:true,
  autoplaySpeed:2000,
  speed: 1000,
  fade: true,
  cssEase: 'linear'
});


// ハンバーガーメニュー
$('.burger-menu').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $('.burger-menu').toggleClass('cross');
  $('body').toggleClass('noscroll');
});
