//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  })
};

function pressIt() {
  $(document).on('keypress', function(key) {
    if(key.which === 71) {
      alert("You have pressed G!")
    }
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();


});
