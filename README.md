# Console Finances Analysis Project

Project and development of the analysis of a company's financial records.

## About Me 
Born and raised in Italy, I moved to the UK in 2015. I have always been interested in new technologies and IT, as I studied IT in my A levels back in Italy. After 5 years working in content management for a website, I decided to make the step of learning Front-End Development thanks to the edX course, and on my gitHub profile I showcase not only my progress in Front-End Development as a student but also a journey that hopefully will lead to new exciting projects in this field.

## Usage

You can visit the Finance Analysis Project by clicking [HERE](https://nikola84ca.github.io/Console-Finances/). On the website you will have to right-click on any black part of the browser, and select the Inspect option, then select the Console view to see the results of the Financial Analysis. Alternatively you can clone the repository on your device as shown in the Installation section below and access the index.html file by opening it in your browser. Here is a gif animation of the step-by-step procedure:

![Gif animation of how to use the page to view the Financial Analysis](/Images/financial-analysis-usage-animation.gif)

## Installation
First, make sure that Git and Git Bash are installed on your system. To download this project on your machine click [HERE](https://github.com/Nikola84ca/Console-Finances) to go to the repository on GitHub. Click on the green CODE button, and copy the link of the repository. In your machine, open gitBash and create a new folder where you will clone the project using the command below:

```bash
Git mkdir your-project-folder
```
navigate inside the new folder, and clone the project files with the following comands

```bash
cd your-project-folder
Git clone url-copied-on-repository
git pull
```

Open your editor with the command

```bash
code .
```

alternatively download the zip file in GitHub after pressing the Code button, unzip it and copy it in your project folder. Navigate to the folder using the cd command on gitbash and lounch your editor as shown above with code . To view the Financial Analysis open the index.html file on your browser, inspect the page by right-clicking on any black part of the browser, and once you select the Inspect option on the drop menu, select the Console view to see the results of the Financial Analysis.

![Gif animation of how to use the page to view the Financial Analysis](/Images/financial-analysis-usage-animation.gif)

## Website Description 

The website is a single page simply serves as access to the console log, that is where the Financial Analysis is shown. The analysis consists of:

* The total number of months included in the dataset.

* The net total amount of Profit/Losses over the entire period.

* The average of the changes in Profit/Losses over the entire period.

* The greatest increase in Profit/Losses (date and amount) over the entire period.

* The greatest decrease in Profit/Losses (date and amount) over the entire period.

This is the final analysis as shown in the browser console:

![Gif animation of the webpage](/Images/financial-analysis-console-view.JPG)

## My Process

* The first thing I did was making sure the html file included the JavaScript link in the body section.

```HTML
<script src="index.js"></script>
```

* Then I identified the Data set give in the variable finances, an array of arrays that includes all the dates and relative funds of the company for every year of activity.

```JavaScript
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ....
   ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
```

* The first element that we want printed in the console is the Total number of months inside the Data set. This is equal to the finances array length, so I simply used the .length function inside the consol.log at the end of the code.

```JavaScript
console.log ("Financial Analysis\n" +
"------------------\n" +
"Total Months: " + finances.length + "\n" +
....
);
```

* The second requirement was to calculate the Net Total. I decided to implement a for loop that flows through the finances array, selecting for each inner array the position [1], or the money number (position [0] is the date). It then increments ( += ) the netTotal variable with the value of each finances money at every loop, until "i" reaches the total length of the finances array. At the end of this loop we will have the total sum of the finances inside the variable netTotal.


```JavaScript
for (i=0; i<finances.length; i++) {
  netTotal += finances[i][1];
}
```

* At this point I was required to calculate the average change between every year and the year before. I implemented a loop where [i] starts at at 1 (the second array) because I put that value in "currentMonth" and the value of the previousMonth in another variable to subtract them. So currentMonth takes finances[i][1] and the var previous takes finances[i - 1][1] which is the value of the month before. The change between [i] and [i-1] is stored in the variable "totalChange", that at every loop increments itself. So in the variable totalChange I have every time the sum of the differences between every two months (current and previous). Finally, outside the for loop, I calculated the averageChange by simply dividing the totalChange we obtained inside the loop, by the number of months in the array (finances.length -1).

```JavaScript
for (i=1; i<finances.length; i++) {
  var previous = finances[i - 1][1];
  var currentMonth = finances[i][1];
  totalChange += currentMonth - previous;
}

var averageChange = totalChange / (finances.length - 1);
```

* Next I had to calculate the greatest increase and greatest decrease. I used a for loop that, like the previous averageChange loop, sets the [i] at 1, and compares the [i] array with the previous [i - 1] while it runs for the whole finances.length. Outside the loop I declared 4 var for the greatest increase/date and greatest decrease/date that I use inside the ifs and will be the main variables that I will be printed out in the console. Inside the For loop I used two temporary variables: currentMoney and previousMoney, the first takes the value of the money in the current [i] and the second one takes the value of the money of the [i - 1]. I also needed two temp variables that hold the currentIncrease and curentDecrease at every [i] position, so at every [i], the variables currentIncrease and currentDecrese are updated with the difference between the values inside the currentMoney and previousMoney variables. At this point I just needed to implement the ifs to compare the current increase and greatest increase, one if > and one if <, eg: if currentIncrease is > than greatestIncrease, then greatestIncrease = currentIncrease and greatestDate= finances[i][0].

```JavaScript
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
```


* Lastly, I made sure that the whole analysis is printed in the console simply by concatening the final variables in the console.log as shown below

```JavaScript
console.log ("Financial Analysis\n" +
"------------------\n" +
"Total Months: " + finances.length + "\n" +
"Net Total: $" + netTotal + "\n" +
// the .toFixed is an inbuilt JS function to only show two decimals, this can be an alternative to the Math.round()
"Average Change: " + averageChange.toFixed(2) + "\n" +
'Greatest Increase in Profits/Losses: ' + greatestIncreaseDate + ' ($' + greatestIncrease + ')' + "\n" +
'Greatest Decrease in Profits/Losses: ' + greatestDecreaseDate + ' ($' + greatestDecrease + ')' + "\n" );
```


## Credits

I would like to thank all the teachers and TA of the EdX bootcamp for all the content provided and study materials. 

## Project Status and Upcoming Improvements

Although the web page's sole scope is to make users access the console to view the Financial Analysis from the given data set, the next step would be to integrate an interface in the HTML, styled with CSS, that allow users to view the report also on the main page. Additionally, through some forms or JavaScript Prompts/Alerts/Confirm functions, we could turn the whole webpage in a dinamic and functional interface that will also allow users to manipulate the Data and Money array, by inserting new financial values, so that the Financial Analysis can be updated with the latests figures of the company. Graphs and Visual Reports can also be an interesting addition to make the UI and UX design more efficient.

## Collaborations and Contributions

I welcome all the brilliant coders out there to join me in this project. Join effort can result in a fundamental learning experience for a beginner coder like me, so feel free to reach out with tips and advice. If you want to contribute to this project, pull requests are welcome, but if you want to make major changes, please open an issue first so that we can discuss what you would like to change. You can contact me on my GitHub profile [HERE](https://github.com/Nikola84ca) and visit this project repository by clicking [HERE](https://github.com/Nikola84ca/Console-Finances).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)