$(document).ready(function() {
     $(".mobile-icon").on("click", function() {
        console.log("hello")
            $(".mobile-list-showing").css({display:"block"});
            $(".navbar-button").css({display:"none"});
            $(".close-icon").css({display:"block"});
            $(".mobile-icon").css({display:"none"});
     })
     $(".close-icon").on("click", function() {
        console.log("hello")
            $(".mobile-list-showing").css({display:"none"});
            $(".navbar-button").css({display:"block"});
            $(".close-icon").css({display:"none"});
            $(".mobile-icon").css({display:"block"});
     })
});
$(document).ready(function() {
     $("#navbar ul a li").on("click", function() {
        $(".mobile-list-showing").css({display:"none"});
        $(".navbar-button").css({display:"block"});
        $(".close-icon").css({display:"none"});
        $(".mobile-icon").css({display:"block"});
     });
});

// Scrolling Effect

$(window).on("scroll", function() {
     if($(window).scrollTop()) {
           $('nav').addClass('black');
     }

     else {
           $('nav').removeClass('black');
     }
})
function sendMail(){
 (function(){
     emailjs.init('CYfT3onImX-UZ9yiE')
 })();
 console.log(document.querySelector("#message").value,document.querySelector("#sender_email").value,document.querySelector("#sender_first_name").value,document.querySelector("#sender_last_name").value,document.querySelector("#sender_phone_number").value,)

 var params = {
     sender_first_name: document.querySelector("#sender_first_name").value,
     sender_last_name: document.querySelector("#sender_last_name").value,
     sender_phone_number:document.querySelector("#sender_phone_number").value,
     to: "awskeshawn@gmail.com",
     client:"Cincinnati Drywall(No CLient Now)",
     sender_email: document.querySelector("#sender_email").value,
     message: document.querySelector("#message").value
 }
 console.log(params)
 var serviceID = "service_103z8xr"
 var templateID = "template_lrelc7p"
 emailjs.send(serviceID,templateID,params)
 .then(res => {
     alert("Email Sent")
     window.open(
"https://cincinnatidrywall.co/thank-you-page"," "
)
 })
 .catch(err => console.log(err))
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
