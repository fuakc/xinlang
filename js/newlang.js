/**
 * Created by ASUS on 2017/7/21.
 */
$(function () {

//    顶部下拉菜单
    $(".top-xiala").each(function (a,b) {
        $(this).click(function () {
            $(".showList").eq(a).slideDown()
        })
    })
    $(".showList dd").click(function () {
        $(".showList").slideUp()
    })
    $(".showList").parent().mouseleave(function () {
        $(".showList").slideUp()
    })
// 搜索框下拉菜单
    $(".searchTxt").click(function () {
      $(".scarchBox .list").slideDown();
        $(".scarchBox .list li").click(function () {
            $(".searchTxt").text($(".scarchBox .list li").eq($(this).index()).text())
            $(".scarchBox .list").slideUp();

        })
    })

//    全选
  var pan=true;
  $(":checkbox").eq(0).click(function () {
       // $(":checkbox:gt(2)").prop("checked",$(this).prop("checked"))
    pan=true;
      $(":checkbox:gt(2)").attr("checked",pan);
        $(":checkbox").eq(1).attr("checked",false);
   })

    $(":checkbox:eq(1)").click(function(){
       pan = false;
      $(":checkbox:gt(2)").attr("checked",pan);
     $(":checkbox:eq(0)").attr("checked",false)
  })
  $(":checkbox:eq(2)").click(function(){
   $.each($(":checkbox:gt(2)"), function() {
         $(this)[0].checked = !$(this)[0].checked
       });

   })
    //先实现全选
               
	//		$(":checkbox").eq(0).click(function(){
	//			if(!$(":checkbox").eq(0).attr("checked")){
	//				$(":checkbox").attr("checked",true)
	//				
	//			}else{
	//		//接下来实现全不选
	//				$(":checkbox").attr("checked",false)
	//				
	//			}
	//			
	//		})

  
   
// //    选项卡

//    封装选项卡1
    function xltoggle(xl1,xl2,xl3) {
        $(xl1).click(function () {
            var ind=$(this).index();
            $(xl1).removeClass(xl2);
            $(xl1).eq(ind).addClass(xl2);
            $(xl3).eq(ind).show().siblings().hide();
        })

    }
//    视频综艺切换
xltoggle(
	".rightArea .leftBox .newsBox .comTitle .comTitle_tabs li",
    "active",
    ".wq .page_r"
    )



    //封装选项卡2
    function xltoggle2(a,b,c,d) {
        $(a).click(function () {
            var inde=$(this).index();

            $(a).removeClass(b);
            $(a).eq(inde).addClass(b);
            $(c).eq(inde).addClass(d).siblings().removeClass(d);
        })
    }
    //    教育培训招生出个 选项卡
    xltoggle2(
    ".titBg li",
    "active",
    ".smList .item",
    "show" )
    //今日 明日
    xltoggle2(
        ".comWidth .leftAd .sina_video .comTitle_f .day a",
        "active",
        ".tabs .tabs_item",
        "show"
    )
    //体育 NBA 体育视频
	xltoggle2(
    ".xl li",
        "active",
        ".xlx .tabs_item",
        "show"
    )
    //汽车 新车 购车
    xltoggle2(
    ".xl1 li",
        "active",
        ".xls .tabs_item",
        "show"
    )
    //娱乐 八卦 大片
    xltoggle2(
        ".xl2 li",
        "active",
        ".xls1 .tabs_item",
        "show"
    )
    //财经 股票 理财
    xltoggle2(
        ".xl3 li",
        "active",
        ".xls2 .tabs_item",
        "show"
    )
    //我爱看图 猜你喜欢
    xltoggle2(
        ".xl4 li",
        "active",
        ".xls3 .tabs_item",
        "show"
    )
//    读书小说
    xltoggle2(
        ".xl5 li",
        "active",
        ".xls4 .tabs_item",
        "show"
    )

    //    科技探索
    xltoggle2(
        ".xl6 li",
        "active",
        ".xls5 .tabs_item",
        "show"
    )
    //    手机数码
    xltoggle2(
        ".xl7 li",
        "active",
        ".xls6 .tabs_item",
        "show"
    )
    //    游戏
    xltoggle2(
        ".xl8 span",
        "active",
        ".xls7 .tabs_item",
        "show"
    )
//    应用中心
    xltoggle2(
        ".xl9 span",
        "active",
        ".xls8 .tabs_item",
        "show"
    )



//    体育 NBA 体育视频

    // jwdtoggle(".comWidth .rightArea .comTitle .comTitle_tabs li",
    //     ".active",
    //     ".baos .page1"
    //
    // )

//轮播切换

    var lunbo = $(".lunboone .photo_list")[0];
    lunbo.innerHTML += lunbo.innerHTML;
    lunbo.style.width = (lunbo.offsetWidth * 2) + "px";
    var shu = $(".lunboone .photo_list li")[0].offsetWidth;
	console.log(shu)
    function move() {
        if(lunbo.offsetLeft > 0) {
            lunbo.style.left = -lunbo.offsetWidth / 2 + "px";
        }
        if(lunbo.offsetLeft < -lunbo.offsetWidth / 2) {
            lunbo.style.left = 0 + "px";
        }
    }

    $(".lunboone .photo_prev").click(function(){
        $(".lunboone .photo_list").stop().animate({"left": "-=" + shu + "px"}, 500, function() {
            move();
        })
    })
    $(".lunboone .photo_next").click(function(){
        $(".lunboone .photo_list").stop().animate({"left": "+=" + shu + "px"}, 500, function() {
            move();
        })
    })




    // //
    // $(".lunbotwo .wwr")[0].innerHTML += $(".lunbotwo .wwr")[0].innerHTML;
    // $(".lunbotwo .wwr")[0].style.width = 1000 + "px";
    //
    // var shu = $(".lunbotwo .wwr li")[0].offsetWidth;
    // //
    // function moves() {
    //     if($(".lunbotwo .wwr")[0].offsetLeft > 0) {
    //         $(".lunbotwo .wwr")[0].style.left = -$(".lunbotwo .wwr")[0].offsetWidth / 2 + "px";
    //     }
    //     if($(".lunbotwo .wwr")[0].offsetLeft < -$(".lunbotwo .wwr")[0].offsetWidth / 2) {
    //         $(".lunbotwo .wwr")[0].style.left = 0 + "px";
    //     }
    // }
    //
    // $(".lunbotwo .photo_prev").click(function(){
    //     $(".lunbotwo .wwr").stop().animate({"left": "-=" + shu + "px"}, 500, function() {
    //         moves();
    //     })
    // })
    // $(".lunbotwo .photo_next").click(function(){
    //     $(".lunbotwo .wwr").stop().animate({"left": "+=" + shu + "px"}, 500, function() {
    //         moves();
    //     })
    // })











})