$(document).ready(() => {

  const main =() => {
        $('#grow-me').addClass('big');
        $('#shrink-me').removeClass("big");
  
        $("li").text(function(index) {
          console.log($(this).text());
        });
  
        $('.link').attr('src', "https://www.example.com").text("somewhere");
        $('#hide-me').css('display', 'none');
        $('#show-me').css('display', 'block');
      
  
      $('#name')
      .keyup(function() {
        var value = $(this).val();
        $('h1').text("Welcome " + value);
      })
  
      .keyup();
  };
      $("#action").on("click", main);
    });