		$(window).resize( function(){
			var width = $('body').width()

			if(width < 500){
				$("div").find(".media-left").addClass("disable-media-left")
			}

			else{
				$("div").find(".media-left").removeClass("disable-media-left")	
			}
			location.reload()
			
		})

		$(document).ready( function(){
			var width = $('body').width()

			if(width < 500){
				$("div").find(".media-left").addClass("disable-media-left")
			}

			else{
				$("div").find(".media-left").removeClass("disable-media-left")	
			}
		})