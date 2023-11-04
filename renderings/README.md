# SWE 432 - Cosmic Harmony <br>ITERATION 4
We will now take our web pages into the client-server world by moving the Iteration 3 pages into Node.JS with the EJS template engine. The resulting functional application must run using the node command with routes to determine the action to be performed and all pages must be returned for display through EJS. (Once the pages are migrated and functional under Node, you should continue adding any missing capabilities in preparation for the final submission.)

### CHECKLIST<br>
Below is a checklist for based on the rubric for Iteration 4
- [x] <font color="white" size= "5" style="font-weight: bold; text-transform: uppercase; text-decoration: underline;">Server-Side Setup and Configuration</font>
    - [x] <font style="font-weight: bold; text-transform: uppercase;">Node.js setup</font><br> 
            Successfully installed Node.js, initialized their project, and installed necessary packages.
            <hr style="height:0.25px;border-width:0;color:gray;background-color:gray">
            <font style = "font-style: italic;">Node.js setup and installation successfully done as seen in<br>`root/package.json`<br>`root/package-lock.json`<br>`root/node_modules`</font>
    - [x] <font style="font-weight: bold; text-transform: uppercase;">Server Configuration</font><br>
            Must set up an Express server in a file (e.g., `app.js` or <font color = green style="font-weight: bold;">`server.js`</font>) and configure it to use EJS as the templating engine.
            They have organized their project directory properly, separating routes, views, and static files.
            <hr style="height:0.25px;border-width:0;color:gray;background-color:gray">
            <font style = "font-style: italic;">Server setup using express in `root/server.js`<br>Server runs with no issues as seen in terminal</font>
            ![Alt text](ServerRunning.png)
- [x] <font color="white" size= "5" style="font-weight: bold; text-transform: uppercase; text-decoration: underline;">EJS Implementation</font>
    - [x] <font style="font-weight: bold; text-transform: uppercase;">EJS Syntax</font><br>
            Example: The student demonstrates a good understanding of EJS syntax
            <hr style="height:0.25px;border-width:0;color:gray;background-color:gray">
            <font style = "font-style: italic;">EJS syntax utilized through various pages incluing partials.<br>`root/views/partials`<br>`root/views/pages`</font>
    - [x] <font style="font-weight: bold; text-transform: uppercase;">Data Passing</font><br>
            Passing data from their server to their EJS templates successfully. 
            <hr style="height:0.25px;border-width:0;color:gray;background-color:gray">
            ![Alt text](DataPass.png)
    - [x] <font style="font-weight: bold; text-transform: uppercase;">EJS Views</font><br>
            Created dynamic EJS views for their radio station application, utilized EJS layouts to create all pages.
            <hr style="height:0.25px;border-width:0;color:gray;background-color:gray">
            <font style = "font-style: italic;">EJS views setup for various pages.<br>`root/views/pages`</font>
            ![Alt text](DJpoolEJS.png)![Alt text](DJPoolScreen.png)<br>
            ![Alt text](LibraryEJS.png)![Alt text](LibraryScreen.png)
- [x] <font size = "5" style="font-weight: bold; text-transform: uppercase; text-decoration: underline;">Functionality</font><br>
            All features of the application are working as expected. Links lead to the correct pages, buttons 
            perform their intended actions, and data is displayed correctly. 
            <hr style="height:0.25px;border-width:0;color:gray;background-color:gray">
            <font style = "font-style: italic;">Demo recorded and saved in <a href="walkthrough.mp4">`walkthrough.mp4`</a></font>
            ![Alt text](HomeScreenShot.png)

### Additional Notes
- Did some additional css for all pages
- Would be implementing playlist creation and search functionality at end of next iteration