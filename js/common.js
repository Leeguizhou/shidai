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


})();

//移动端菜单弹出
function navBar(id1,id2){
    var nav = document.getElementById(id1);
    var menu = document.getElementById(id2);
    var cls = nav.className;
    menu.onclick = function () {
        if(nav.className == cls){
            nav.className = cls + ' ' + 'active';
        }else{
            nav.className = cls;
        }
    }

}
navBar('navBar','menu')
