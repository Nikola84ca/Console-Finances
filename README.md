# Console Finances Analysis Project

Project and development of my new Portfolio Website using Bootstrap.

## About Me 
Born and raised in Italy, I moved to the UK in 2015. I have always been interested in new technologies and IT, as I studied IT in my A levels back in Italy. After 5 years working in content management for a website, I decided to make the step of learning Front-End Development thanks to the edX course, and on my gitHub profile I showcase not only my progress in Front-End Development as a student but also a journey that hopefully will lead to new exciting projects in this field.

## Usage

You can visit the Finance Analysis Project by clicking [HERE](https://nikola84ca.github.io/console-finances/). On the website you will have to right-click on any black part of the browser, and select the Inspect option, then select the Console view to see the results of the Financial Analysis. Here is a gif animation of the step-by-step procedure:

## Installation
First, make sure that Git and Git Bash are installed on your system. To download this project on your machine click [HERE](https://github.com/Nikola84ca/Console-Finances) to go to the repository on GitHub. Click on the green CODE botton, and copy the link of the repository. In your machine, open gitBash and create a new folder where you will clone the project using the command below

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

## Website Description 

The website is a single page simply serves as access to the console log, that is where the Financial Analysis is shown. The analysis consists of:

* The total number of months included in the dataset.

* The net total amount of Profit/Losses over the entire period.

* The average of the changes in Profit/Losses over the entire period.

* The greatest increase in Profit/Losses (date and amount) over the entire period.

* The greatest decrease in Profit/Losses (date and amount) over the entire period.

Here is a gif animation of the final result, you can compare it with the previous portfolio website by clicking [HERE](https://nikola84ca.github.io/my-portfolio/).

![Gif animation of the webpage](/assets/images/01-portfolio-website-view.gif)

## My Process

* The first thing I did was designing a new, clearer structure of containers to have a clear idea of how to organize all the content. I started by analysing my previous portfolio, created with flex-boxes, and spotting all the possible improvement I could implement. The use of Bootstrap components has been fundamental to speed up the process and allow me to have a much more tidy, responsive and fast webpage. The first thing to do I did in the html file was to connect my project to Bootstrap through the relative html, Css and JavaScript links.


![Gif animation of the header nav bar, when clicked they will redirect the user to the relative sections of the webpage and external links](/assets/images/02-portfolio-nav-menu.gif)

For the work section I decided to include a dropdown menu, that serves as direct access to the specific project, and also a link to my GitHub profile. Here is a snippet of the HTML structure and its Relative CSS styling code for this nav bar:

```HTML

```






![Gif animation of the projects section, when passing the mouse on them the overlay color fades, and the background picture is fully visible, plus animation of the buttons.](/assets/images/03-portfolio-projects-cards-hover.gif)





```JavaScript

for (i=0; i<finances.length; i++) {
  netTotal += finances[i][1];
}

```


* Lastly, I made sure that the website is much more responsive for mobile view compared to the previous project, the menu and dropmenu keep their functionality, as all the other bootstrap components. Here is a gif animation of the final result on mobile view:

![Gif animation of the mobile view of the website.](/assets/images/05-portfolio-mobile-view.gif)

The content is align in colums and all the functionality of links and hover effects are working. 


## Credits

I would like to thank all the teachers and TA of the EdX bootcamp for all the content provided. I would like to credit [w3 schools](https://www.w3schools.com/html/html5_semantic_elements.asp) for the useful content responsive layouts, and the staff at [Bootstrap](https://getbootstrap.com/docs/5.0/layout/grid/) for the useful tools provided.

## Project Status and Upcoming Improvements

Although the web page's sole scope is to make users access the console to view the Financial Analysis from the given data set, the next step would be to integrate an interface in the HTML, styled with CSS, that allow users to view the report also on the main page. Additionally, through some forms or JavaScript Prompts/Alerts/Confirm functions, we could turn the whole webpage in a dinamic and functional interface that will also allow users to manipulate the Data and Money array, by inserting new financial values, so that the Financial Analysis can be updated with the latests figures of the company. Graphs and Visual Reports can also be an interesting addition to make the UI and UX design more efficient.

## Collaborations and Contributions

I welcome all the brilliant coders out there to join me in this project. Join effort can result in a fundamental learning experience for a beginner coder like me, so feel free to reach out with tips and advice. If you want to contribute to this project, pull requests are welcome, but if you want to make major changes, please open an issue first so that we can discuss what you would like to change. You can contact me on my GitHub profile [HERE](https://github.com/Nikola84ca) and visit this project repository by clicking [HERE](https://github.com/Nikola84ca/Console-Finances).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)