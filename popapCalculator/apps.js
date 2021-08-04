$(document).ready(function(){
  
//Popap  
  $('.popapButton').click(function(){
    event.preventDefault();
    $("section, footer, div").addClass('shadow');
    $('.printPopap').addClass('active');
  });
  
  $('.popapSubmit').click(function(){
    $('.printPopap').removeClass('active');
    $('.popapThankYou').addClass('active');
  });
  
  
//  EndPopap

    $('header, .crumbsCalculator, .finishedGoods, .popularProducts.catalog, .grayBackground, footer, .popapPrintClose').click(function(){
      
        $('.printPopap').removeClass('active');
        $('.popapThankYou').removeClass('active');
        $('section, footer, div').removeClass('shadow');
   });
});