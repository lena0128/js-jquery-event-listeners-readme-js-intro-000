//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
  $('img').addClass('tasty');
  });
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which == G) {
      alert("G was pressed");
    }
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
});
