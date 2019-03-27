 $(document).ready(function(){

   $(".submit-survey").click(function(event) {
     event.preventDefault();
     var name = $("#firstName").val();
     console.log(name);
     var beverage = $("#beverage").val();
     console.log(beverage);
     var music = $("input:radio[name=music]:checked").val();
     console.log(music);
   });
 });
