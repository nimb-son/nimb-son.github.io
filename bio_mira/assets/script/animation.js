
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 700,
      framesCount = 10;

anchors.forEach(function(item) {
  
  item.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    let scroller = setInterval(function() {
    
      let scrollBy = coordY / framesCount;
      
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        
        window.scrollBy(0, scrollBy);
      } else {
        
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    
    }, animationTime / framesCount);
  });
});



/*var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});*/

/*jQuery(document).ready(function($){
  $("#header, #footer, #mainpage").on("click","a", function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
  top = $(id).offset().top;
  $('html, body').animate(
    {scrollTop: top}, 500);
  });
});

jQuery(document).ready(function($) {
  var myHash = location.hash; //получаем значение хеша
  location.hash = ''; //очищаем хеш
  if(myHash[1] != undefined){ //проверяем, есть ли в хеше какое-то значение
  $('html, body').animate(
  {scrollTop: $(myHash).offset().top }
  , 700); //скроллим за полсекунды
  location.hash = myHash; //возвращаем хеш
  };
  });*/