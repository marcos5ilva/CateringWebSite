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

function initMap() {
    var myLatLng = {lat: 40.233845, lng: -111.658531};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }