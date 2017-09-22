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
  $('#typing').on('keydown', function(key) {
    if(key.which === 71) {
      alert("You have pressed G!")
    }
  })
};

function submitIt() {
  $('form').on('submit',)
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();

});
