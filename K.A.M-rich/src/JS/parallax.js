// $(function () {
//   //各背景画像のtopの位置を取得
//   var shop_1top = $(".shop-1").offset().top;
//   var shop_2top = $(".shop-2").offset().top;
//   var shop_3top = $(".shop-3").offset().top;
//   var shop_4top = $(".shop-4").offset().top;
//
//   // ウィンドウの高さを取得
//   var win_h = $(window).height();
//
//   //各背景画像を動かすタイミングの位置を計算
//   var start_shop_1 = shop_1top - win_h;
//   var start_shop_2 = shop_2top - win_h;
//   var start_shop_3 = shop_3top - win_h;
//   var start_shop_4 = shop_4top - win_h;
//
//
//   $(window).scroll(function () {
//
//     //スクロール量
//     var y = $(this).scrollTop();
//
//     //スクロール量と動かすタイミング位置を判定した場合は背景画像を動かす
//     if (y >= start_shop_1) {
//       $('.shop-1').css('background-position-y', -(y - shop_1top) * 0.5 + 'px');
//     }
//     if (y > start_shop_2) {
//       $('.shop-2').css('background-position-y', -(y - shop_2top) * 0.5 + 'px');
//     }
//     if (y > start_shop_3) {
//       $('.shop-3').css('background-position-y', -(y - shop_3top) * 0.5 + 'px');
//     }
//     if (y > start_shop_4) {
//       $('.shop-4').css('background-position-y', -(y - shop_4top) * 0.5 + 'px');
//     }
//   });
// });

jQuery(function($){
  $(document).scroll(function() {
    $("shop").each(function(){
      var imgPos = $(this).offset().top;//画像の位置
      var scrollPos = $(window).scrollTop();//現在位置
      var windowHeight = $(window).height();//ウィンドウサイズ
      var imgRange = imgPos + $(this).innerHeight();//画像範囲
      var contentTop = scrollPos + windowHeight - imgPos;//画像内の位置情報(scrollTop関数の代わり)

      $('.shop-1').css('background-size','auto' + (windowHeight + $(this).innerHeight() / 20) +'px');//画像のリサイズ
      if(scrollPos+windowHeight > imgPos && scrollPos < imgRange ){//画像が画面内に少しでも入ったらtrue
        $(this).find('.shop-1').css({
          "background-position-y": (-contentTop / 20)//背景画像をスクロールに合わせて上にずらす
        })
      }

      $('.shop-2').css('background-size','auto ' + (windowHeight + $(this).innerHeight() / 20) +'px');//画像のリサイズ
      if(scrollPos+windowHeight > imgPos && scrollPos < imgRange ){//画像が画面内に少しでも入ったらtrue
        $(this).find('.shop-2').css({
          "background-position-y": (-contentTop / 20)//背景画像をスクロールに合わせて上にずらす
        })
      }

      $('.shop-3').css('background-size','auto ' + (windowHeight + $(this).innerHeight() / 20) +'px');//画像のリサイズ
      if(scrollPos+windowHeight > imgPos && scrollPos < imgRange ){//画像が画面内に少しでも入ったらtrue
        $(this).find('.shop-3').css({
          "background-position-y": (-contentTop / 20)//背景画像をスクロールに合わせて上にずらす
        })
      }

      $('.shop-4').css('background-size','auto ' + (windowHeight + $(this).innerHeight() / 20) +'px');//画像のリサイズ
      if(scrollPos+windowHeight > imgPos && scrollPos < imgRange ){//画像が画面内に少しでも入ったらtrue
        $(this).find('.shop-4').css({
          "background-position-y": (-contentTop / 20)//背景画像をスクロールに合わせて上にずらす
        })
      }
    });
  });
});
