$(function() {	
		
		//导航栏对象
		var nav = $('.nav-wrap');	
		//导航栏相对于网页原点的高度
		var daohangHeight = nav.offset().top;
		//获取滚动条距离网页原点的位置
		var scrollHeight = $(window).scrollTop();
		
		//小火箭动画
		$('#topcontrol').click(function() {
			$('html,body').animate({scrollTop:0},1000);
		});
		
		//滚动条变化事件
		$(window).scroll(function() {		
		
		scrollHeight = $(window).scrollTop();
		//距离网页原点200px显示小火箭
		if(scrollHeight >= 200) {
			$('#topcontrol').fadeIn(300);
		} else {
			$('#topcontrol').fadeOut(300);
		}
		
		//滚动轮下拉导航栏位置相对于视口定位
		if(scrollHeight >= daohangHeight) {
			if(!nav.hasClass('fix')) {
				nav.addClass('fix');
				$('.banner').css('margin-bottom',nav.outerHeight());
			}
		} else {
			if(nav.hasClass('fix')) {
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);
			}
		}	
		
		//随着滚动条位置变化显示高亮
		change( $('#post-intro'),$('.intro') );
		change( $('#post-usage'),$('.usage') );
		change( $('#choiceness'),$('.choice') );
		
	});
	
	//点击导航栏滑动动画
	$('.nav-wrap a').click(function() {
		
		var top = $(this.hash).offset().top - nav.outerHeight() + 7;
		$('html,body').animate({scrollTop:top},1000);
		
		return false;
	});
	
	//随着滚动条位置变化显示高亮（方法）
	function change(obj,aObj) {
		
		var start = obj.offset().top - nav.outerHeight();
		var end = obj.offset().top + obj.outerHeight() - nav.outerHeight();
		
		if(scrollHeight >= start && scrollHeight < end) {
			
			aObj.addClass('active');
			
		} else {		
			
			aObj.removeClass('active');
		}
		
	}
	
	
});
