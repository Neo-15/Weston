$('.headerButton.burger').click(function(){
	event.preventDefault();
  
  $(".headerMenuMobile").parent().find('.headerCalculatorContainer').removeClass('active');
  
   $(".headerMenuMobile").parent().find('.searchDesctop').removeClass('active');
  
    $(".headerMenuMobile").parent().find('.primary-menu-container').toggleClass('active');
});

$('.headerButton.calk').click(function(){
	event.preventDefault();
  $(".headerMenuMobile").parent().find('.primary-menu-container').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.searchDesctop').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.headerCalculatorContainer').toggleClass('active');
});

$('.headerButton.search').click(function(){
	event.preventDefault();
  $(".headerMenuMobile").parent().find('.primary-menu-container').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.headerCalculatorContainer').removeClass('active');
  
  $(".headerMenuMobile").parent().find('.searchDesctop').toggleClass('active');
});

  
   $('.main, .popularProducts, .benefits, .aboutUs, .catalog, .recentPublications, .footer, blogMain, .blogForm, .article, .news, .blogForm, photogalery, photoGaleryCatalog').click(function(){
    $(".headerMenuMobile").parent().find('.primary-menu-container').removeClass('active');
  
    $(".headerMenuMobile").parent().find('.headerCalculatorContainer').removeClass('active');
    $(".headerMenuMobile").parent().find('.searchDesctop').removeClass('active');
  });