function chocolateCakeRecipe(){
    document.getElementById("pop-outer").style.visibility="visible";
   $(document).ready(function(){
       $(".open").click(function(){
           $('.pop-outer').fadeIn('slow');
       });
       $(".close").click(function(){
           document.getElementById("pop-outer").style.visibility="hidden";
           $('.pop-outer').fadeOut('slow');
           
       });
   });
}