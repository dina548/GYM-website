const name ="Welcome to GYM Website"
alert(name)
name= "Sample Website"
alert("This IS A" + " " + name)


  $("#navbar a, .btn").on("click" , function(event) {
      if(this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({scrollTop: $(hash).offset().top -100}, 800);
      }   
  });


  Window.addEVentListener("scroll", function() {
      if(Window.scrollY > 150) {
          document.querySelector("#navbar").style.opacity = 0.9;
      } else {
          document.querySelector("#navbar").style.opacity = 1;
      }
    });