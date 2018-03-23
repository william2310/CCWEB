var app = angular.module('app', []);

app.controller('HomeController', function($scope) {
  
  $scope.goal_title = "timeline casacross";
  $scope.info_title = "Se funda Casa Cross";
  
  $scope.dates = [
    1946,1972,1999,2002,2003,2014
  ];
  
  $scope.goal_real_estate = false;
  
  for (x in $scope.dates) {
      if($scope.dates[x]== 1946){
        $scope.goal_real_estate_1946 = true;
      }else if($scope.dates[x]== 2003){
        $scope.goal_retirement_2003 = true; 
      }else if($scope.dates[x]== 1999){
        $scope.goal_involve_1999 = true; 
      }
  }
  
});

$(document).ready(function(e) {
  var viewport =Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(viewport);

  
  $('a').click(function(e){
    e.preventDefault()
  })

  $('.goal_wrap').click(function(){
    var diff = $(this).parent()[0].offsetLeft;
    $('.date .goal_wrap').removeClass('active bounce');
    $(this).addClass('active bounce');
    console.log(diff);
    console.log((viewport - diff));
TweenLite.to($('.date').parent(), 1, {x:((viewport*0.5) - diff), onComplete:function(){
        console.log('success');
        /*TweenLite.to($('.timeline'), 1, {top:"50%"});*/
      }});  
  });
  
  $('.goal_real_estate').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(vieja1.jpg)');
}).fadeTo('slow', 1);

  });
  
$('.goal_retirement').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(vieja3.jpg)');
}).fadeTo('slow', 1);

  });  
  
$('.goal_involve').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
    $(this).css('background-image', 'url(vieja2.jpg)');
}).fadeTo('slow', 1);

  });
  

});