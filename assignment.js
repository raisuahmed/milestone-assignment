1.//feetToMile

function feetToMile(feet) {
    convertToMile = feet / 5280;
    convertToMile = convertToMile.toFixed(4);
    return convertToMile;
    }
//Check:
Mile = feetToMile(5280);
console.log(Mile);


2.//woodCalculator

function woodCalculator(chair, table , bed) { 
var chairWoodFeet = chair * 1;
var tableWoodFeet = table * 3;
var bedWoodFeet = bed * 5;
var totalWood = chairWoodFeet + tableWoodFeet + bedWoodFeet;
return totalWood;
}
var woodResult = woodCalculator(14, 5, 12);
console.log(woodResult, " cubic wood for all furniture");



3.//brickCalculator 

function brickCalculator(floor) { 
    let perFeetBrick = 1000;
    if(floor <= 0) {
     console.log("A floor can't 0 or less then it");  
    }
    else if (floor <= 10){
        brickIsNeeded = floor * 15 * perFeetBrick;
        console.log( brickIsNeeded, "bricks");
        
    }
      else if (floor <= 20) {
          brickIsNeeded = (10 * 15 * perFeetBrick) + ((floor-10) * 12 * perFeetBrick);
          console.log( brickIsNeeded, "bricks");
          
      }
      else {
        brickIsNeeded = (10 * 15 * perFeetBrick) + (10 * 12 * perFeetBrick) + ((floor-20) * 10 * perFeetBrick);
        console.log( brickIsNeeded, "bricks");
    }
}
let floorIs = brickCalculator(23);
   




4.//tinyFriend 

function tinyFriend(friendList){
    var friend = friendList[0];
    for (var i = 0; i < friendList.length; i++ ){
        var currentPosition = friendList[i];
            if (currentPosition.length < friend.length){
            friend = currentPosition;
        }
    }
        return friend;
    }
     

 friendName=tinyFriend(["Rokoon", "Liton", "Aminul", "Herok", "Soliman"]);
console.log(friendName);

