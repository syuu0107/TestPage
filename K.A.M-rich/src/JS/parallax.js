$(function () {
  //各背景画像のtopの位置を取得
  var bg1_top = $(".bg_1").offset().top;
  var bg2_top = $(".bg_2").offset().top;
  var bg3_top = $(".bg_3").offset().top;

  // ウィンドウの高さを取得
  var win_h = $(window).height();

  //各背景画像を動かすタイミングの位置を計算
  var start_bg1 = bg1_top - win_h;
  var start_bg2 = bg2_top - win_h;
  var start_bg3 = bg3_top - win_h;


  $(window).scroll(function () {

    //スクロール量
    var y = $(this).scrollTop();

    //スクロール量と動かすタイミング位置を判定した場合は背景画像を動かす
    if (y >= start_bg1) {
      $('.bg_1').css('background-position-y', -(y - bg1_top) * 0.2 + 'px');
    }
    if (y > start_bg2) {
      $('.bg_2').css('background-position-y', -(y - bg2_top) * 0.2 + 'px');
    }
    if (y > start_bg3) {
      $('.bg_3').css('background-position-y', -(y - bg3_top) * 0.2 + 'px');
    }
  });
});
