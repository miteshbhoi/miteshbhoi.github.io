$(document).ready(function() {
	/***************************************************
		MENU
	***************************************************/
	$('body').addClass('js');
	var $menu = $('#menu, #menu2 '),
	$menulink = $('.menu-link'),
	$menuTrigger = $('.has-submenu > a');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});

	$menuTrigger.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active').next('ul').toggleClass('active');
	});
		
	/***************************************************
		HOME PORTFOILO
	***************************************************/
	$("#zoom_latest").dzsportfolio({
		settings_slideshowTime:15,
		settings_mode: 'masonry',
		title: '',
		design_thumbw: '275',
		design_thumbh: '1/1',
		settings_disableCats: 'on',
		settings_lightboxlibrary: "prettyphoto",
		design_categories_pos: 'bottom'
	});	
	
	/***************************************************
		SERVICES PAGE - CLIENT CAROUSEL
	***************************************************/
	 $("#client_slider").dzsportfolio({
		settings_slideshowTime:3,
		settings_mode: 'advancedscroller',
		settings_skin:'skin-black',
		title: '',
		design_bulletspos: "none",
		settings_lightboxlibrary: "prettyphoto",
		disable_itemmeta: 'off'
	});
	
	/***************************************************
		PORTFOILO - CAPTION HOVER
	***************************************************/
	$("#zoom_portfolio_caption").dzsportfolio({
		settings_slideshowTime: 15,
		settings_mode: 'masonry',
		title: '',
		design_item_width: '',
		design_thumbh: '300',
		settings_disableCats: 'off',
		design_categories_pos: 'top'
	});
	
});	
	
$(window).load(function() {
	/***************************************************
		GOOGLE MAP
	***************************************************/
	(function() {
		var gm = document.createElement('script');
		gm.src = 'http://maps.google.com/maps/api/js?v=3&sensor=false&language=en&callback=gmaps_loaded';
		gm.type = 'text/javascript';
		gm.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gm, s);
		window.gmaps_loaded = function() {
			$( '.google-maps' ).each(function() {
				var options = {
					map: {
						address: $(this).data( 'map-address' ),
						options: {
							zoom: $(this).data( 'zoom' ),
							styles: [ {
							stylers: [
								{ "visibility": "on" }, { "saturation": -100 }, { "gamma": 1 }]
							}],
							scrollwheel: false,
							mapTypeControl: false,
							streetViewControl: false,
							scalControl: false,
							draggable: false,
						}
					},
					marker: {
						values:[
							{address: $(this).data( 'marker-address' ), options:{icon: "img/marker.png"}}
						],
					}
				};
				$(this).gmap3(options);
			});
		}
	})();
				
	/***************************************************
			PRETTYPHOTO
	***************************************************/
	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
	});
	$("a[rel^='prettyPhoto']").prettyPhoto();
	jQuery("a[rel^='prettyPhoto'], a[rel^='lightbox']").prettyPhoto({
		overlay_gallery: false, social_tools: false,  deeplinking: false
	});

	/***************************************************
			IMAGE HOVER
	***************************************************/
	$(".hover_img").on('mouseover',function(){
		var info=$(this).find("img");
		info.stop().animate({opacity:0.8},300);
	});
	$(".hover_img").on('mouseout',function(){
		var info=$(this).find("img");
		info.stop().animate({opacity:1},300);
	});
	
	/***************************************************
			BACK TO TOP LINK
	***************************************************/
	$('.go-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
	});
	
	/***************************************************
		TOOLTIP
	***************************************************/
	$("[rel=tooltip]").tooltip();
	$("[data-rel=tooltip]").tooltip();

});

/***************************************************
	LARGE IMAGE FADE
***************************************************/
(function(e){e.fn.krioImageLoader=function(t){var n=e(this).find("img").css({opacity:0,visibility:"hidden"}).addClass("krioImageLoader"),r=n.size(),i=e.extend({},e.fn.krioImageLoader.defaults,t),s=setInterval(function(){r?n.filter(".krioImageLoader").each(function(){if(this.complete){o(this);r--}}):clearInterval(s)},i.loadedCheckEvery),o=function(t){e(t).css({visibility:"visible"}).animate({opacity:1},i.imageEnterDelay,function(){e(t).removeClass("krioImageLoader")})}};e.fn.krioImageLoader.defaults={loadedCheckEvery:350,imageEnterDelay:300}})(jQuery);