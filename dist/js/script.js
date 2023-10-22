
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  $(function(){
    // 各 .p-qa__content 内の最初の .p-qa__a 要素を非表示
    $('.p-qa__content .p-qa__item .p-qa__a').hide();

    // 最初の .p-qa__a 要素だけを表示
    $('.p-qa__content .p-qa__item:first-child .p-qa__a').show();

    // p-qa__qをクリックした時の処理
    $('.p-qa__q').click(function() {
      // クリックされたp-qa__qの次の要素（p-qa__a）をスライドトグル（開閉）する
      $(this).next('.p-qa__a').slideToggle();
    });

  });


    //ハンバーガーメニュー
    $(".js-hamburger").on("click", function () {
      $(this).toggleClass("open");
      if ($(this).hasClass("open")) {
        $(".js-nav").fadeIn();
        $(".p-header").addClass("transparent");
        $(".p-header-bg").fadeIn(); // バックグラウンドを表示
        $("body").css("overflow", "hidden"); // スクロール無効化
      } else {
        $(".js-nav").fadeOut();
        $(".p-header").removeClass("transparent");
        $(".p-header-bg").fadeOut(); // バックグラウンドを非表示
        $("body").css("overflow", "auto"); // スクロール有効化
      }
    });

    // swiper
    const swiper1 = new Swiper(".js-people-slider", {
      loop: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
        425: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 2.5,
          spaceBetween: 64,
        },
      },
    });
});


