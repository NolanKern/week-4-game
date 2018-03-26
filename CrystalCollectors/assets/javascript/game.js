($(document).ready(function(){
    var ran=Math.floor(Math.random()*101+19);
   //Random Number Selector
    $('#randomNumber').text(ran);
  
  //Variable list of numbers
    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);
  
    //User Input and Count
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
  
    //Variable for Counting Information
    $('#wins').text(wins);
    $('#losses').text(losses);
  
    //reset the game 
    function reset() {
     ran=Math.floor(Math.random()*101+19);
        console.log(ran);
        $('#randomNumber').text(ran);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        
    }
  
  //Adding the total of wins
  function winner() {
    alert("You won!");
    wins++;
    $("#wins").text(wins);
    reset();
  }
  
  //Adding total number of losses
  function loser(){
    alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset();
  }

  //diamond click condition
  $('#diamond').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == ran){
          winner();
        }
        else if ( userTotal > ran){
          loser();
        }   
  });  

// ruby click condition
   $('#ruby').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == ran){
            winner();
          }
          else if ( userTotal > ran){
            loser();
          }   
    });  
  
  $('#sapphire').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == ran){
            winner();
          }
          else if ( userTotal > ran){
            loser();
          } 
    });
  
  $('#peridot').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == ran){
            winner();
          }
          else if ( userTotal > ran){
            loser();
          }
    });   
  }));