
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

  // 近くまで来たら一行づつ表示
  $(document).ready(function() {
    $(document).ready(function() {
        const targetElement = $('.p-top-message__body');
        const triggerOffset = 50; // フェードインを開始する位置のオフセット（適宜調整）
      
        $(window).scroll(function() {
            const windowHeight = $(window).height();
            const scrollPosition = $(window).scrollTop();
          
            // スクロール位置が要素の上端から画面の下端まで近づいたら要素にフェードイン用のクラスを追加
            if (targetElement.length > 0) {
                const offsetTop = targetElement.offset().top;
                if (scrollPosition > offsetTop - windowHeight + triggerOffset && !targetElement.hasClass('fadein-started')) {
                    targetElement.addClass('fadein-started');
                    targetElement.addClass('fadein');
                }
            }
        });
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
          // Swiperの設定
          loop: true,
          autoplay: {
              delay: 4000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          breakpoints: {
              // ブレイクポイントごとの設定
              320: {
                  slidesPerView: 1.25,
                  spaceBetween: 20,
              },
              425: {
                  slidesPerView: 1.7,
                  spaceBetween: 20,
              },
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
  


    $(document).ready(function() {
      // 最初は要素を非表示にする
      $('.p-header').hide();
  
      // 2秒後に要素を表示する
      setTimeout(function() {
          $('.p-header').show(); // 要素を表示する
      }, 1100); // 2秒後に実行する（2000ミリ秒 = 2秒）
  });



    // コンテンツをふわっと表示
  // 動きのきっかけとなるアニメーションの名前を定義
  function fadeAnime() {
    // ふわっ
    $(".js-fadeUpTrigger").each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("u-fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass("u-fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述




});


