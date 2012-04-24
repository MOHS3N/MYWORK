// JavaScript Document			
$(function(){
	/*----------------- global var -----------------------*/
	
	var divnum = $('div.scrool > div').index()+1;
	var width = (divnum*600)+'px';
	var menuwidth = (divnum-1)*26+'px';
	
	
	/*----------------- div.scrool & div.menu diynamic width -----------------------*/
	
		$('div.scrool').css({ 'width' : width });
		$('div.menu').css({ 'width' : menuwidth });
			
		
	/*----------------------- cearet diynamic bottom ------------------------*/
		
			var btn='<ul class="btns">';
			for(i=0;i<= (divnum-1);i++){
			btn+='<li> </li>';	
			}
			$('div.menu').html(btn);
	
	/*----------------------- function movie slider ------------------------*/
			var last=0;
			var active=0;
			var btns=$('div.menu ul.btns li');
			var total=btns.length;
			
			function nixy(n){
			if(n<0) n = total-1;
			if(n>=total) n = 0;
			active = n;
			$('div.scrool').animate({left:(-600)*n},800)
		
			btns.eq(last).removeClass('active');
			btns.eq(n).addClass('active');
			last=n
		}
		
			btns.click(function(){
				
				nixy(btns.index(this));
			});
	
			$('li.back').click(function(){
				nixy(active-1);
				})
			$('li.next').click(function(){
				nixy(active+1);
				})
			})