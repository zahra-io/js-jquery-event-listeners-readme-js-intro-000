//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};

function frameIt() {
  $('.tasty').on('load', function(){
    $(this).css("border-color", "red");
  })
}


$(document).ready(function(){

// call functions here
getIt();

});
