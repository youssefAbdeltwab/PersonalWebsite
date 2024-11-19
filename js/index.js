// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/



/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id 
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
// */

// let mins = $("#main-nav").innerHeight();

// let topa = $("#about").offset().top;

// console.log(mins);
// $(window).scroll(function () {

//   let tW = $(window).scrollTop()

//   if (tW > topa - mins) {
//     $("#main-nav").css("backgroundColor", `rgba(0,0,0,0.5)`);
//     $(`#btnUp`).fadeIn(300)

//   }
//   else {
//     $(`#main-nav`).css("backgroundColor", `transparent`);
//     $(`#btnUp`).fadeOut(300)
//   }

// });

// $(`#btnUp`).click(function () {
//   $("html,body").animate({ scrollTop: 0 }, 1000)
// });


// $(`#main-nav a`).click(function (e) {
//   let link = $(e.target).attr(`href`);
//   let top = $(link).offset().top;
//   $(`html,body`).animate({ scrollTop: top }, 1000)
// });


$(document).ready(function() {
  
  $("#loading").fadeTo(2000, 0,   function(){
      $("body").css("overflow", "auto");
  });

  // $('.parallax-window').parallax({imageSrc:  "images/1.jpg"});

  $(".owl-carousel").owlCarousel({ items: 4,  margin: 20,  loop: true, autoplay: true, autoplayTimeout: 1000});


  let mainNav = $("#main-nav").scrollTop();
  let aboutSectionOffset = $("#about").offset().top;
  let btnUp = $("#btnUp");
  // let homeSection  = $("#home")


  $(window).scroll(function(){

    let windowScroll  = $(window).scrollTop();

    if(windowScroll  >    aboutSectionOffset )
    {
        $("#main-nav").css("backgroundColor", `rgba(0,0,0,0.5)`);
        btnUp.fadeIn(500);
    }
    else{

      $("#main-nav").css("backgroundColor" , "transparent")
      btnUp.fadeOut(500);

    }

  })

  $(" a").click(function(eventInfo){

    // let clickedLink  =  $(e.target).attr("href");

    let clickedLinkHref = $(eventInfo.target).attr("href");

    let sectionOffset = $(clickedLinkHref).offset().top;

    $("html, body").animate({scrollTop: sectionOffset},  1500);
  })

  btnUp.click(function(){

    $("html, body").animate({scrollTop: 0}  , 1000)
  })



  $("#toggleIcon").click(function(){

    let sideBar =  $("#sideBar");
    let colorBoxWidth =  $("#colorBox").innerWidth();

    // sideBar.css("left")  ==  "0px" 
    if(sideBar.css("left")  ==  "0px" )
    {
      sideBar.animate({ left: -`${colorBoxWidth}`} ,1000);

    }
    else
    {
      sideBar.animate({ left:0 } ,1000);

    }

  })

  let colorItem = $(".color-item");

  colorItem.eq(0).css("backgroundColor", "rgb(153, 54, 61)");
  colorItem.eq(1).css("backgroundColor", "rgb(54, 153, 99)");
  colorItem.eq(2).css("backgroundColor", "rgb(54, 87, 153)");
  colorItem.eq(3).css("backgroundColor", "rgb(54, 120, 153)");  
  colorItem.eq(4).css("backgroundColor", "red");



  colorItem.click(function(eventInfo){

    let backgroundColorItem =  $(eventInfo.target).css("backgroundColor");
    // console.log(backgroundColorItem)

    $(".change").css("color",  backgroundColorItem )
  })


});


























