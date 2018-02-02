$(function() {

	// Fancybox

	$("[data-fancybox]").fancybox();

	
	// Mask

	$("input[name='phone']").mask("+7 (999) 999-9999");


	// NAV

	$(".navbar-toggler").on("click", function() {
		$(".navbar-toggler, .navbar").toggleClass("active");
		$("body").toggleClass("nav-opened");
	});

	$(".navbar .close-btn").on("click", function() {
		$(".navbar-toggler, .navbar").removeClass("active");
		$("body").removeClass("nav-opened");
		$(".navbar-collapse").removeClass("show");
	});


	// range slider

	if ($("#rangeslCarrying").length) {
		var rangeSl = $("#rangeslCarrying").slider({
			tooltip: 'hide'
		});

		$("#startSliderInput").prop( 'value', rangeSl.slider('getValue')[0] );
		$("#currentSliderInput").prop( 'value', rangeSl.slider('getValue')[1] );
	}

	$("#rangeslCarrying").on("slide", function(slideEvt) {
		$("#startSliderInput").prop( 'value', rangeSl.slider('getValue')[0] );
		$("#currentSliderInput").prop( 'value', rangeSl.slider('getValue')[1] );
	});


	// Switch viewlist

	$(".view-select .view-option").on("click", function() {
		$(".view-select .view-option").removeClass("active");
		$(this).addClass("active");
		
		$(".category-list").attr("data-view", $(this).data("view"));
	});

	// Collapse

	$("[data-toggle=collapse").on("click", function() {
		$(this).toggleClass("opened")
	});


	// Sliders

	$(".promo-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		nextArrow: $(".promo .slick-next"),
		prevArrow: $(".promo .slick-prev"),
		dots: true,
		fade: true
	});

	$(".spec-products-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		nextArrow: $(".spec-products .slick-next"),
		prevArrow: $(".spec-products .slick-prev"),
		dots: false,
		vertical: false
	});

	$(".related-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 3000
	});

	$(".banner-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: true,
		fade: true
	});


	$('.prphoto').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.prphoto-nav'
	});

	$('.prphoto-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		infinite: false,
		asNavFor: '.prphoto',
		nextArrow: '<button type="button" class="slick-next"><svg class="arrow-i arrow-next-i"><use xlink:href="#arrow-right"></use></svg></button>',
		prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-i arrow-prev-i"><use xlink:href="#arrow-right"></use></svg></button>',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: true,
		responsive: [
		{
			breakpoint: 576,
			settings: {
				vertical: false,
			}
		}]
	});

});


/*--AJAX Form submit--------------------*/

$(document).on('af_complete', function(event,response) {
	var form_id = response.form.parents('.modal').attr('id');
	if (response.success) {
		$('#'+form_id).modal('hide');
		$('#success-modal').modal('show');
	}
});


// load SVG-Sprite to LocalStorage

;( function( window, document ) {
	'use strict';

	var file = 'img/sprite.svg',
	revision = 2;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
	request,
	data,
	insertIT = function()
	{
		document.body.insertAdjacentHTML( 'afterbegin', data );
	},
	insert = function()
	{
		if( document.body ) insertIT();
		else document.addEventListener( 'DOMContentLoaded', insertIT );
	};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );