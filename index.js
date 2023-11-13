var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


// var monthsNumber = finances.length;
var totalChange = 0;
var i= 0;
var netTotal= 0;

// The following for loop flows through the finances array, selecting for each inner array the position [1], or the money number (position [0] is the date). It then increments ( += ) the netTotal variable with the value of each finances money at every loop, until "i" reaches the total length of the finances array. At the end of this loop we will have the total sum of the finances inside the variable netTotal.

for (i=0; i<finances.length; i++) {
  netTotal += finances[i][1];
}

// For the average change, I implemented a loop where [i] starts at at 1 (the second array) because I put that value in "currentMonth" and the value of the previousMonth in another variable to subtract them. So currentMonth takes finances[i][1] and the var previous takes finances[i - 1][1] which is the value of the month before. The change between [i] and [i-1] is stored in the variable "totalChange", that at every loop increments itself. So in the variable totalChange I have every time the sum of the differences between every two months (current and previous). Finally, outside the for loop, I calculated the averageChange by simply dividing the totalChange we obtained inside the loop, by the number of months in the array (finances.length -1).

for (i=1; i<finances.length; i++) {
  var previous = finances[i - 1][1];
  var currentMonth = finances[i][1];
  totalChange += currentMonth - previous;
}

var averageChange = totalChange / (finances.length - 1);

// To calculate the greatest increase and greatest decrease I used a for loop that, like the previous averageChange loop, sets the [i] at 1, and compares the [i] array with the previous [i - 1] while it runs for the whole finances.length. Outside the loop I declared 4 var for the greatest increase/date and greatest decrease/date that I use inside the ifs and will be the main variables that I will be printed out in the console. Inside the For loop I used two temporary variables: currentMoney and previousMoney, the first takes the value of the money in the current [i] and the second one takes the value of the money of the [i - 1]. I also needed two temp variables that hold the currentIncrease and curentDecrease at every [i] position, so at every [i], the variables currentIncrease and currentDecrese are updated with the difference between the values inside the currentMoney and previousMoney variables. At this point I just needed to implement the who ifs to compare the current increase and greatest increase, one if > and one if <, eg: if currentIncrease is > than greatestIncrease, then greatestIncrease = currentIncrease and greatestDate= finances[i][0]. 


var greatestIncrease = 0;
var greatestIncreaseDate = '';
var greatestDecrease = 0;
var greatestDecreaseDate = '';

for (var i = 1; i < finances.length; i++) {
  var currentMoney = finances[i][1];
  var previousMoney = finances[i - 1][1];
  var currentIncrease = currentMoney - previousMoney;
  var currentDecrease = currentMoney - previousMoney;

  if (currentIncrease > greatestIncrease) {
    greatestIncrease = currentIncrease;
    greatestIncreaseDate = finances[i][0];
  }

  if (currentDecrease < greatestDecrease) {
    greatestDecrease = currentDecrease;
    greatestDecreaseDate = finances[i][0];
  }
}


// The following code will display the result of the analysis in the console

console.log ("Financial Analysis\n" +
"------------------\n" +
"Total Months: " + finances.length + "\n" +
"Net Total: $" + netTotal + "\n" +
// the .toFixed is an inbuilt JS function to only show two decimals, this can be an alternative to the Math.round()
"Average Change: " + averageChange.toFixed(2) + "\n" +
'Greatest Increase in Profits/Losses: ' + greatestIncreaseDate + ' ($' + greatestIncrease + ')' + "\n" +
'Greatest Decrease in Profits/Losses: ' + greatestDecreaseDate + ' ($' + greatestDecrease + ')' + "\n" );
