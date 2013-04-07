jQuery(document).ready(function(){
	
	var menuOpen = false;
	var pi = 3.14;
	
	$("#circlum_main_button").click(function(){
		if(menuOpen){
			rotate($("#circlum_main_button"), 0);
			closeSubMenu();
			menuOpen = false;
		}else{
			rotate($("#circlum_main_button"), 45);
			openSubMenu();
			menuOpen = true;
		}
	});
	
	
	function openSubMenu(){
		var count = $(".circlum_secondary_button").size();
		var index = 0;
		$(".circlum_secondary_button").each(function(index){
			var elem = $(this);
			//var name = $(this).attr("id");
			//var id = name.substring(name.length-1, name.length);
			
			setTimeout(function(){
				if(index==0 || index==3){
					elem.css({'bottom' : (index*12)+90+'px'});
					elem.css({'left' : (index*12)+30+'px'});
				}
				
				else if(index==1){
					elem.css({'bottom' : 0.5*90+30+'px'});
					elem.css({'left' : 0.5*90+30+'px'});
				}
				
				if(index==2){
					elem.css({'bottom' : 30+'px'});
					elem.css({'left' : 90+'px'});
				}
				/*
if(id==1)
					elem.css({'bottom' : '100px'});
					
				else if(id%count==0)
					elem.css({'left' : '100px'});

				else if(index==2){
					elem.css({'left' : (Math.pow(index-1,0.5)*100)-20+'px'});
					elem.css({'bottom' : (Math.pow(count-(index+1),0.5)*100)-20+'px'});
				}
*/
				
				//elem.css({'left' : (Math.pow(index-1,0.5)*100)-20+'px'});
				//elem.css({'bottom' : (Math.pow(count-(index+1),0.5)*100)-20+'px'});
				
			}, index*200);
		
		});
	}
	
	/**
	
	1 => pi/4
	
	
	
	**/
	
	function closeSubMenu(){
		$(".circlum_secondary_button").each(function(index){
			$(this).css({'bottom' : '30px'});
			$(this).css({'left' : '30px'});
		});
	}
	
	function rotate(object, degrees) {
    object.css({
	    '-webkit-transform' : 'rotate('+degrees+'deg)',
	    '-moz-transform' : 'rotate('+degrees+'deg)',  
	    '-ms-transform' : 'rotate('+degrees+'deg)',  
	    '-o-transform' : 'rotate('+degrees+'deg)',  
        'transform' : 'rotate('+degrees+'deg)',  
        'zoom' : 1

    });
}
});