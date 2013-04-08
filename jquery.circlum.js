jQuery(document).ready(function(){
	
	var menuOpen = false;
	var pi = 3.14;
	
	$("#circlum_main_button").click(function(){
		if(menuOpen){
			rotateOpening($("#circlum_main_button"));
			closeSubMenu();
			menuOpen = false;
		}else{
			rotateClosing($("#circlum_main_button"));
			openSubMenu();
			menuOpen = true;
		}
	});
	
	
	function openSubMenu(){
		var count = $(".circlum_secondary_button").size();
		var index = 0;
		$(".circlum_secondary_button").each(function(index){
			var elem = $(this);
			
			setTimeout(function(){
				if(index==0 || index==3){
					elem.css({'bottom' : (index*12)+90+'px'});
					elem.css({'left' : (index*12)+30+'px'});
				}
				
				else if(index==1 || index==4){
					elem.css({'bottom' : (-(index-1)*3)+0.5*90+30+'px'});
					elem.css({'left' : ((index-1)*17)+0.5*90+30+'px'});
				}
				
				if(index==2){
					elem.css({'bottom' : 30+'px'});
					elem.css({'left' : 90+'px'});
				}
				
			}, index*200);
		
		});
	}
	
	function closeSubMenu(){
		$(".circlum_secondary_button").each(function(index){
			$(this).css({'bottom' : '30px'});
			$(this).css({'left' : '30px'});
		});
	}
	
	function rotateOpening(object){
		rotate(object, 0);
		object.css({"border-color" : "#AAA",
			"background" : "#CCC"
		});
	}
	
	function rotateClosing(object){
		rotate(object, 45);
		object.css({"border-color" : "#71a3ff",
			"background-color" : "#aecee4"
		});
	}
	
	function rotate(object, degrees) {
    object.css({
	    '-webkit-transform' : 'rotate('+degrees+'deg)',
	    '-moz-transform' : 'rotate('+degrees+'deg)',  
	    '-ms-transform' : 'rotate('+degrees+'deg)',  
	    '-o-transform' : 'rotate('+degrees+'deg)',  
        'transform' : 'rotate('+degrees+'deg)',  
        'zoom' : 1,
        "border-color" : "#AAA"

    });
}
});