$(function(){
	$('.bodong').each(function(){
							
//					获得js的原生对象
					var jsthis = $(this)[0];
//					为了防止this的指向发生变化我们将他存到一个变量里
					
//					设置变量
//					相当于向每个box对象添加一个属性
					 jsthis.n = 0;
					 
					$(jsthis).find('.right').click(function(){
					  var L=$(jsthis).find('.sibufen_one').find('li').length;

				      jsthis.n++;

					if(jsthis.n>L-1){
				      jsthis.n=L-1;
			       }
					
					$(jsthis).find('.sibufen_one').animate({'left':-296*jsthis.n+'px'},300);
            		$(jsthis).siblings('.yuandian').find('li').eq(jsthis.n).find('span').addClass('si');
					$(jsthis).siblings('.yuandian').find('li').eq(jsthis.n).siblings().find('span').removeClass('si');
					})


					$(jsthis).find('.left').click(function(){
					  var L=$(jsthis).find('.sibufen_one').find('li').length;

				     

					if(jsthis.n<=0){
				      jsthis.n=0;
			       }else{
			       	jsthis.n--;
			       	
			       }
					
					$(jsthis).find('.sibufen_one').animate({'left':-296*jsthis.n+'px'},300);
             		
					$(jsthis).siblings('.yuandian').find('li').eq(jsthis.n).find('span').addClass('si');
					$(jsthis).siblings('.yuandian').find('li').eq(jsthis.n).siblings().find('span').removeClass('si');

					})



			$(jsthis).siblings('.yuandian').find('span').hover(function(){
				alert($(jsthis).siblings('.yuandian').find('span').index())
//			if($(this).index()!=jsthis.n){
//				$(jsthis).siblings('.yuandian').find('li').eq($(this).index()).find('span').css({'cursor':'pointer'})
//				$('.yuan_kuang li').eq($(this).index()).find('span').addClass('sii')
//				$('.yuan_kuang li').eq($(this).index()).siblings().find('span').removeClass('sii');
//			}
			
			},function(){
//				if($(this).index()!=s){
//					$('.yuan_kuang li').eq($(this).index()).find('span').removeClass('sii')
//				}
			})
































	})	
			





		//  加上小圆点的hover效果
		
//		$('.yuan_kuang li').hover(function(){
//			if($(this).index()!=s){
//				$('.yuan_kuang li').eq($(this).index()).find('span').css({'cursor':'pointer'})
//				$('.yuan_kuang li').eq($(this).index()).find('span').addClass('sii')
//				$('.yuan_kuang li').eq($(this).index()).siblings().find('span').removeClass('sii');
//			}
//			
//		},function(){
//			if($(this).index()!=s){
//				$('.yuan_kuang li').eq($(this).index()).find('span').removeClass('sii')
//			}
//		})
//		
//		
//		
//		
//		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
})