$(function () {
  //各背景画像のtopの位置を取得
  var shop_1top = $(".shop-1").offset().top;
  var shop_2top = $(".shop-2").offset().top;
  var shop_3top = $(".shop-3").offset().top;

  // ウィンドウの高さを取得
  var win_h = $(window).height();

  //各背景画像を動かすタイミングの位置を計算
  var start_shop_1 = shop_1top - win_h;
  var start_shop_2 = shop_2top - win_h;
  var start_shop_3 = shop_3top - win_h;


  $(window).scroll(function () {

    //スクロール量
    var y = $(this).scrollTop();

    //スクロール量と動かすタイミング位置を判定した場合は背景画像を動かす
    if (y >= start_shop_1) {
      $('.shop-1').css('background-position-y', -(y - shop_1top) * 0.2 + 'px');
    }
    if (y > start_shop_2) {
      $('.shop-2').css('background-position-y', -(y - shop_2top) * 0.2 + 'px');
    }
    if (y > start_shop_3) {
      $('.shop-3').css('background-position-y', -(y - shop_3top) * 0.2 + 'px');
    }
  });
});
