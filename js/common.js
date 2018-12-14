(function () {

  /**
   * 头部导航 hover 效果
   * @type {*|*|jQuery|HTMLElement}
   */
  var HeaderNavListsLi = $('.header .navLists > li')
  HeaderNavListsLi.hover(function () {
    $(this).children('.menu').slideToggle(200)
  });

  /**
   * 选项卡切换
   * @param option
   * @param active
   * @param tabObj
   * @param siblingObj
   * @constructor
   */
  function Tab(option,active,tabObj,siblingObj) {
    var $bp = $(option);
    $bp.click(function () {
      $(this).addClass(active).siblings().removeClass(active);
      var index = $bp.index(this);
      $(tabObj).eq(index).show().siblings(siblingObj).hide();
    });
  }


})()
