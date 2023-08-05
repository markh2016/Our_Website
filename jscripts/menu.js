
// globle variable 
var hamburger ;
var  navmenu ;


$(document).ready(function() {
    // Script to push the section down on menu clickhamvuder */

    /* assign variables to access  classes and menu functions */
    hamburger =$(".burger") ;
    navmenu =$(".nav-menu");
    

    hamburger.click(function(e){

        /* remove the active class which is suedo class 
         assocaited with these  css  lines 


         set the  middle bar to opacity  so we dont see this  
       
       
         ****************   CSS  Code ***************
         
         opacity:0 ;

            .burger.active .bar:nth-child(1){
            opacity:100;
            transform :translateY(8px) rotate(45deg) ;

        } 
            .burger.active .bar:nth-child(3){
    
            opacity:100;
            transform :translateY(-8px) rotate(-45deg) ;
            } */
         

        hamburger.toggleClass("active");
        navmenu.toggleClass("active");

     });

    //  add  click event listener to  nav_links in ccs 
    // so that we can toggle the  active  class on 
    // burger and nav-menu

     $(".nav_links").click(function(e){
        hamburger.removeClass("active");
        navmenu.removeClass("active") ;
        
     });

} );