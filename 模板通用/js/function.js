$(document).ready(function(){
	/*	
	$(this).animate({width:'681px'});
	$(this).find(".tmcbg").fadeIn().fadeOut();
	$(this).addClass("active").removeClass("active");
	$(this).toggleClass("active");
	$(this).css({width:'0px'});
	$(this).parent().parents(".lanmu");
	$(this).slideDown(300).slideUp(300);
	$(this).slideToggle();
	$(window).width().height();
	$(this).siblings()
	
	自写选项卡
	var $sub_chthis = $(".sub_chnal ul li")
		$sub_chthis.click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var sub_chindex = $sub_chthis.index(this);     创建当前点击li所对应的li元素的索引
		$(".solution_con>div").eq(sub_chindex).show().siblings().hide();    当前li点击对应索引显示同辈元素隐藏
	})
	
	$('.inldpro ul li').hover(function(){
			$('.inldpro ul li').removeClass("gl");
		},function(){
			$(this).addClass("gl");
		}
	);
	
	window.onscroll = function () {
		var gao=document.documentElement.scrollTop || document.body.scrollTop;
		if(gao>94){
			$(".top").addClass("fixed");
			$(".huitop").show();
		}else
		{
			$(".top").removeClass("fixed");
			$(".huitop").hide();
		}
	};
	
	<a onclick="AddFavorite('http://www.baidu.com','百度')" href="javascript:void(0)" >加入收藏</a> |
	<a onclick="SetHome('http://www.baidu.com')" href="javascript:void(0)">设为首页</a>
	
	function AddFavorite(sURL, sTitle) {
		sURL = encodeURI(sURL); 
		try{   
			window.external.addFavorite(sURL, sTitle);   
		}catch(e) {   
			try{   
				window.sidebar.addPanel(sTitle, sURL, "");   
			}catch (e) {   
				alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
			}
		}
	}
	function SetHome(url){
	if (document.all) {
		document.body.style.behavior='url(#default#homepage)';
		document.body.setHomePage(url);
		}else{
			alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
		}
	}

	*/
	
	$('.nav2 ul li').hover(function(){
			$(this).find("ul").slideToggle();
		}
	);
	
	$('.navlist h2 span').click(function(){
			$(this).parents(".navlist").find("ul").slideToggle();
			$(this).parents(".navlist").siblings(".navlist").find("ul").slideUp();
		}
	);
	
	$(".huitop").click(function(){
	  $("html,body").animate({scrollTop:0},600)	
	});

});