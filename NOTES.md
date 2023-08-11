# Begin Project on 8/11/2023

## Initial Thoughts

I have previously experimented with React, 
but since I decided to backtrack to complete a To-Do App with vanilla JS I decided to start this project from the 
beginning and do it the right way. I.E. Include planning and documentation on the computer instead of paper notes
and going right into the code. 

# UI Structure and Planning
2 main containers left and right. Left side are forms that take user input. Right side displays/renders output.

## UI LEFT SIDE 
3 Input sections stacked vertically from A-C. 

All sections Submit from the same button for better UX - so all are contained in the same form.

3 Input Sections Are as follows-

-A. General Info --- Take in Name,Profession,Email, and Phone

-B. Professional Experience --- Take in Company Name, Position, Responsibilities, Date Start - Date end Employed

-C. Education  --- Take in school name, area of study and date of study

Most input are text input besides Date which will use a calendar picker

Edit and Submit buttons at the bottom of the form. Since there is an edit function, the previous data must persist on Submit unless intentionally edited.

## UI RIGHT SIDE

3 Output Sections to coincide with the 3 Input Sections


-A. Header --- Take in General Info --> output NAME and PROFESSION as Large Text <h1> or <h2>

    EMAIL and PHONE are subtext <p> elements.  All of these are rendered DOM elements.


-B. Professional Experience --- Professional Experience is diplayed across the top as a constant <h1> 

    4 Subsections with constant <h2> subheaders - "Company Name, Position, Responsibilities, Date Start"

    Professional Experience input is rendered under each subheader as DOM <p> elements

-C. Education --- Education is diplayed across the top as a constant <h1> 

    4 Subsections with constant <h2> subheaders - "School name, area of study, date attended"
    
    Education Input is rendered under each subheader as DOM <p> elements

    The complexity of these elements calls for the use of HTML <templates> for each section and possibly tables for the Professional Experience and Education sections.

# Logic Planning/Brainstorm

Primary areas of Logic Each Divided Into Components

-Taking in of User Input and storing the data in Objects "Factory Function to create the objects since they will be changing based on user input"

-DOM manipulation Functions - create and append elements using the data stored in the aforementioned objects.

-Render functions that clear and ReRender the Elems from their Continer

-Event Listeners for Edit and Submit Buttons -- Call the above DOM Manipulation functions onCLick/Submit

-State Management

-Utils







