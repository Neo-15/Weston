$(document).ready(function(){
	
/*slider*/
		$('.mainContainer').slick({
	  infinite: true,
      fade:true,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  arrows:true,
	  dots:false,
      speed:1200,
      responsive: [
		  {
		  breakpoint: 570,
			settings: {
			arrows:false,
		}
	   },
	  ] 
	});
    
    $('.popularProductsContainerTabled').slick({
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 3.5,
          arrows:false,
          dots:false,
          speed:1600,
          responsive: [
          {
              breakpoint: 850,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
            }
           },
             {
              breakpoint: 769,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
            }
           },
            {
              breakpoint: 570,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1.2,
            }
           },
          {
              breakpoint: 360,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
           },
          ] 
        });
  
         $('.popularProductsCatalog').slick({
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 3.1,
          arrows:true,
          dots:false,
          speed:1600,
          responsive: [
            {
              breakpoint: 1026,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
                arrows:false,
            }
           },
          {
              breakpoint:850,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
                arrows:false,
            }
           },
            {
              breakpoint:610,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1.4,
            }
           },
            {
              breakpoint:425,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1.3,
            }
           },
          ] 
        });
  
         $('.photoGaleryContainer').slick({
          infinite: false,
          fade:true,
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows:false,
          dots:true,
          autoplay: true,
          autoplaySpeed: 12000,
          speed:1200,
            responsive: [
          {
              breakpoint: 570,
                settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                dots:false
            }
           }
          ] 
        });
  
  
  
$('.headerButton.burger').click(function(){
	event.preventDefault();
  
  $(".headerMenuMobile").parent().find('.headerCalculatorContainer').removeClass('active');
  
   $(".headerMenuMobile").parent().find('.searchContainer').removeClass('active');
  
    $(".headerMenuMobile").parent().find('.primary-menu-container').toggleClass('active');
});

$('.headerButton.calk').click(function(){
	event.preventDefault();
  $(".headerMenuMobile").parent().find('.primary-menu-container').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.searchContainer').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.headerCalculatorContainer').toggleClass('active');
});

$('.headerButton.search').click(function(){
	event.preventDefault();
  $(".headerMenuMobile").parent().find('.primary-menu-container').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.headerCalculatorContainer').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.searchContainer').toggleClass('active');
});

  
   $('.main, .popularProducts, .benefits, .aboutUs, .catalog, .recentPublications, .footer, blogMain, .blogForm, .article, .news, .blogForm, photogalery, photoGaleryCatalog').click(function(){
    $(".headerMenuMobile").parent().find('.primary-menu-container').removeClass('active');
  
    $(".headerMenuMobile").parent().find('.headerCalculatorContainer').removeClass('active');
    $(".headerMenuMobile").parent().find('.searchContainer.mobile').removeClass('active');
  });
  
  $('.langButton').click(function(){
    event.preventDefault();
    $(this).parent().find(".disabled").slideToggle();
    $('.langContainer').toggleClass('clicked');
  });
  
  $('.telButton').click(function(){
    event.preventDefault();
    $(this).parent().find(".disabled").slideToggle();
    $('.telephoneContainer').toggleClass('clicked');
  });
  
  
  
   $('.main, .popularProducts, .benefits, .aboutUs, .catalog, .recentPublications, .footer, blogMain, .blogForm, .article, .news, .blogForm, .photogalery, .photoGaleryCatalog').click(function(){
     $('.headerButton').removeClass('clicked');
     $('.headerMenuContainer').animate({
              left: "-300"
      });
     $('.langActive').parent().find(".disabled").slideUp();
     $('.headerTel').parent().find(".disabled").slideUp();
     $('.langContainer').removeClass('clicked');
     $('.telephoneContainer').removeClass('clicked');
   });
  
     $('.headerSearch').click(function(){
      event.preventDefault();
     $(".searchContainer").toggleClass('active');
   });
    
     $('.main, .popularProducts, .benefits, .aboutUs, .catalog, .recentPublications, .footer, blogMain, .blogForm, .article, .news, .blogForm, .photogalery, .photoGaleryCatalog').click(function(){
      $(".searchContainer").removeClass('active');
    });

 });