$(function(){
	
	//主导航的二级菜单
	
	//获得窗口的可见宽度
	var   seeW = $('body').width();
//	console.log(seeW);
	$('#mainnav_box .nav_erji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
	
	$(window).resize(function(){
		 var seeW = $('body').width();
		 $('#mainnav_box .nav_erji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
	})
	
	
	$('li.slider').mouseenter(function(){
		$(this).find('.nav_erji').show().stop().animate({'height':'231px'},200,function(){
//			console.log($(this));
				$($(this)).css({'overflow':'auto'})
		})
		$(this).siblings('li.slider').find('.nav_erji').css({'height':'231px'}).hide();
	});
		
	$('ul.middle').mouseleave(function(){
			$(this).find('li.slider .nav_erji').animate({'height':'0px'},200)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//声明一个大总管变量num 来总控照片的轮播显示
	var num = 0;
	//封装一个函数，是实现图片的切换
	function run(){
		//先判断
		if(num== 6){
			num=-1;
		}
		//后增加变量值
		num++;
		//让照片的第num张(从0开始计数)显示(fadeIn淡入)   它的兄弟们全都隐藏(淡出)
		$('.banner_img').eq(num).fadeIn(500).siblings('.banner_img').fadeOut(500);
		//让  小圆点的第num个  背景色变为红色     它的兄弟们(其余的小圆点)的背景色为白色
		$('#banner_ul .dian').eq(num).css({'background':'red',}).siblings('#banner_ul .dian').css({'background':'white'});
	}
	//定时器，实现每一秒钟切换一次图片
	var timer = setInterval(run,1000);
	//用一个hover   实现鼠标移入停止定时器    鼠标移出继续定时器
	$('#banner_box').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(run,1000);
	})
	//当点击  左箭头时num越来越小    实现图片往回切换
	$('#left_jiantou').click(function(){
		num--;
		if(num==-1){
			num=5;
		}
		$('.banner_img').eq(num).fadeIn(500).siblings('.banner_img').fadeOut(500);
		$('#banner_ul .dian').eq(num).css({'background':'red',}).siblings('#banner_ul .dian').css({'background':'white'});
	})
	//当点击  右箭头时num越来越大    实现图片往前切换
	$('#right_jiantou').click(function(){
		num++;
		if(num==6){
			num=0;
		}
		$('.banner_img').eq(num).fadeIn(500).siblings('.banner_img').fadeOut(500);
		$('#banner_ul .dian').eq(num).css({'background':'red',}).siblings('#banner_ul .dian').css({'background':'white'});
	})
	//对于小圆点处    完全模仿小米官网   移入(移出)时   小圆点只是背景色发生变化   图片并不切换    当点击时才切换
	$('#banner_ul .dian').hover(function(){
		//鼠标移入哪个圆点  哪个圆点就背景色变红
		$('#banner_ul .dian').eq($(this).index()).css({'background':'red'});
	},function(){
		//鼠标移出圆点  该圆点背景色就变回变色   但是   若   这个圆点是    鼠标移入时定时器停止的当前圆点   此时不能让鼠标移出  立马变白     不然   当鼠标瞬间移入移出此点时   所有的点   就全都是白色的啦     直到定时器启动走到下一张图片时  才有圆点变红
		if($(this).index()!=num){
		$('#banner_ul .dian').eq($(this).index()).css({'background':'white'});	
		}
		
	});
	//当点击小圆点时   圆点本身背景色发生变化   并且让相应的图片显示  
	$('#banner_ul .dian').click(function(){
		//将当前点击的那个圆点的下标索引值  赋值给   大总管变量num   实现    全局      变量统一
		 num = $(this).index();
		 //让点击的该圆点背景色变红
		$('#banner_ul .dian').eq(num).css({'background':'red'}).siblings().css({'background':'white'})
		//此时的num  已被(被点击的)圆点的下标值赋予新值   ！同步实现了图片的切换
		$('.banner_img').eq(num).fadeIn(500).siblings('.banner_img').fadeOut(500);
	});
	
	
	
	
	
	
	//小米明星单品的   图片滑动效果
	
	//声明一个大总管变量   统管全局
	var z = 0;
	//封装一个函数  实现图片的的自动切换！！！！！！切记 ，前面banner轮播时已经有了函数run   千万不能重名
	function xiaomi(){
		z++;
		//只让大盒子（装有10个块）移动一次，所以判z==2的界限
		if(z==2){
			z=0;
		}
		//让装有10个块的大盒子.wwugetu向左滑动一次
		$('.danpin .wugetu').animate({'left':-1226*z+"px"},500);
		//让相应的小箭头的颜色发生变化
		$('.danpin .more01 a').eq(z).removeClass('active1').siblings('.more01 a').addClass('active1')
		$('.danpin .more01 a').eq(z).css({'cursor':'default'}).siblings('.more01 a').css({'cursor':'pointer'})
	}
	//定时器   3秒钟执行一次函数
	var timer2 = setInterval(xiaomi,3000);

	//分别写  鼠标移入两个小箭头   暂停定时器    移出开始定时器
	//当鼠标移入移出左箭头时的情况
	$('.danpin #zuojian').hover(function(){
		//大总管变量只有两个值   1   和   0  所以我们把1和0 来  控制两个小箭头的两种状态（就像开关的  开  和  关 ）
		//综合上边可以知道  当z==1时，大盒子已经向右滑动了一次了，这时我们才可以  点击左箭头  让大盒子往右走
		if(z==1){
			//用  移出类  之后  增加  一个新的类   实现箭头颜色的hover效果
			$('#zuojian').removeClass('active1')
			$('#zuojian').addClass('active2')
		}else{
			$('#zuojian').css({'cursor':'default'})
			$('#youjian').css({'cursor':'pointer'})
		}
		//鼠标移入左箭头时  必须暂停定时器
		clearInterval(timer2)
	},function(){
		if(z==1){
			//鼠标移出  同样让箭头颜色相应变化回去
			$('#zuojian').removeClass('active2')
			$('#zuojian').addClass('active1')
		}
		//鼠标移出   开启定时器
		timer2 = setInterval(xiaomi,3000);
	})
	
	// 右箭头的  hover  等同左箭头
	$('#youjian').hover(function(){
		if(z==0){
			$('#youjian').removeClass('active1')
			$('#youjian').addClass('active2')
		}else{
			//实现鼠标移入时鼠标样式的相应改变
			$('#youjian').css({'cursor':'default'})
			$('#zuojian').css({'cursor':'pointer'})
		}
		clearInterval(timer2)
	},function(){
		if(z==0){
			$('#youjian').removeClass('active2');
			$('#youjian').addClass('active1');
		}
		
		timer2 = setInterval(xiaomi,3000);
	})
	
	
		//给左箭头添加点击事件
		$('#zuojian').click(function(){
			//点击时  先加判断  只有的当他符合条件时   点击才有效  才会有点击后的变化 
			if(z==1){
				$('.wugetu').animate({'left':0+"px"},500);
				//同样   点击时   箭头颜色  也会有相应变化
				$('#zuojian').removeClass('active2')
				$('#youjian').addClass('active1')
				$('#zuojian').css({'cursor':'default'})
			   $('#youjian').css({'cursor':'pointer'})
				z=0;
			}
			
			
		})

	
	
	
	
	
	
	//给右箭头添加点击事件   同样  和 左箭头一样   也要先判断  后发生变化
		$('#youjian').click(function(){
			if(z==0){
				$('.wugetu').animate({'left':-1226+"px"},500);
				$('#youjian').removeClass('active2')
				$('#zuojian').addClass('active1')
				$('#youjian').css({'cursor':'default'})
			   $('#zuojian').css({'cursor':'pointer'})
				z=1;
			}
		})
	



//家电部分的tab切换
		$('#more02 li').mouseenter(function(){
			$(this).addClass('jd_current').siblings('#more02 li').removeClass('jd_current');
			$(this).parents('.jiadian_box').find('.jiadian_right').eq($(this).index()).show().siblings('.jiadian_right').hide();
		})
		
		//家电部分的每个li的底部隐藏部分  滑动显隐效果
		$('.jd_li').hover(function(){
			$(this).find('.yincang').show().animate({'height':'70px'},300)
		},function(){
			$(this).find('.yincang').show().animate({'height':'0px'},300)
		})
		
		
		
		
//家电部分的tab切换


//为你推荐
		var A = 0;
		
		$('#tuijian_box .youjian').click(function(){
			if(A==0){
				$('#tuijian_box .zuojian').css({'color':'blue'})
			}
			A++;
			
			if(A==3){
				$('#tuijian_box .youjian').css({'color':'#e0e0e0'})
			}
			if(A>3){
				A=3;
				
			}
			$('#tuijian_ul').stop().animate({'left':-1226*A+'px'},500);
//			alert(A)	
			
			
		})
		
		$('#tuijian_box .zuojian').click(function(){
			if(A==3){
				$('#tuijian_box .youjian').css({'color':'blue'})
			}
			if(A>0){
				A--;
			}
			if(A==0){
				$('#tuijian_box .zuojian').css({'color':'#e0e0e0'})
				A=0;
			}
			
		
			$('#tuijian_ul').stop().animate({'left':-1226*A+'px'},500);
		})
		
		//先事件（点击事件   hover事件），后判断       事件里面有判断
		$('#tuijian_box .youjian').hover(function(){
			if(A>=0&&A<3){
				$(this).removeClass('active1')
				$(this).addClass('active2')
			}else{
				$(this).css({'corlor':'#e0e0e0'})
				$(this).css({'cursor':'default'})
			}
		},function(){
			if(A>=0&&A<3){
				$(this).removeClass('active2')
				$(this).addClass('active1')
			}
		})
		
		
		
		$('#tuijian_box .zuojian').hover(function(){
			if(A>0&&A<3){
				$(this).addClass('active2')
			}else{
				$(this).css({'corlor':'#e0e0e0'})
				$(this).css({'cursor':'default'})
			}
		},function(){
			if(A>0&&A<3){
				$(this).removeClass('active2')
				$(this).addClass('active1')
			}
		})
				
//为你推荐



			var s=0;
			
//内容部分    四个点击滑动切换
		$('.si_jiantou .right').click(function(){
			var L=$(this).parents('.bodong').siblings('.yuandian').find('.yuan_kuang li').length-1;
			s++;
			if(s>L){
				s=L;
			}
			$(this).parents('.si_jiantou').siblings('.sibufen_one').animate({'left':-296*s+'px'},300);
			$(this).parents('.bodong').siblings('.yuandian').find('li').siblings().find('span').removeClass('si')
			$(this).parents('.bodong').siblings('.yuandian').find('li').eq(s).find('span').addClass('si');
		    
		})

		
		$('.si_jiantou .left').click(function(){
			
				s--;
				if(s<0){
					s=0;
				}
			
			$(this).parents('.si_jiantou').siblings('.sibufen_one').animate({'left':-296*s+'px'},300);
			$(this).parents('.bodong').siblings('.yuandian').find('li').siblings().find('span').removeClass('si')
			$(this).parents('.bodong').siblings('.yuandian').find('li').eq(s).find('span').addClass('si');
		    
			
		})



		//  加上小圆点的hover效果
		
		
		
		
		
		
		$('.first').mouseenter(function(){
			$(this).find('.si_jiantou .left').show();
			$(this).find('.si_jiantou .right').show();
			//进入每个   轮播块   就获得这个里面 圆点的长度   用这个长度值  去循环每个块的每个点    看看每个点是否是当前项（有添加的类.avtive）
			var LD = $(this).find('.yuan_kuang li').length;
			for(var a=0; a<LD;a++){
				
				if($(this).find('.yuan_kuang li').eq(a).find('span').hasClass('si')){
					s = a;
				
				}
			}
			//  hover 小圆点  
			$('.yuan_kuang li').hover(function(){
			if($(this).index()!=s){
				$(this).find('span').css({'cursor':'pointer'})
				$(this).find('span').addClass('sii')
				$(this).siblings().find('span').removeClass('sii');
			}
			
		},function(){
			if($(this).index()!=s){
				$(this).find('span').removeClass('sii')
			}
		})
		//加点击小点 的事件   
		
		$('.yuan_kuang li').click(function(){
			var DD = $(this).index();
			console.log(DD);
			 if(DD!=s){
			 	s=DD
			 $(this).parents('.yuandian').siblings('.bodong').find('.sibufen_one').animate({'left':-296*s+'px'},300);
			 $(this).find('span').addClass('si');
			 $(this).siblings().find('span').removeClass('si')
			 $(this).find('span').removeClass('sii')

			 }
		})
			
			
		})


		$('.first').mouseleave(function(){
			$(this).find('.si_jiantou .left').hide();
			$(this).find('.si_jiantou .right').hide();
		})


//			视频部分

			$('div.tu').hover(function(){
				$(this).find('.radius').css({'background':'#ff6700','border-color':'#ff6700'})
			},function(){
				$(this).find('.radius').css({'background':'#424242','border-color':'white'})
			})




});
//上面这个花括号  小括号  是   window.onload的结尾括号