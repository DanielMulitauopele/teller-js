$('a').on('click', function(event){
  event.preventDefault;
  $('a').removeClass('active')
  $(this).addClass('active')
  localStorage.setItem('link', $(this).prop('href'))
});

function loadActiveNav(){
  let link = localStorage.getItem('link')
  if (link == window.location['href']) {
    $('a').each(function(index){
      if ($(this).prop('href') === link)
        $(this).addClass('active')
    });
  };
};

loadActiveNav();
