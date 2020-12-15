# hello_again
Hello again application

11.26.2020: I am following a tutorial to set up my react app from scratch
the tutorial is called "Creating a React App… From Scratch."
https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

11.26.2020: 13:15 webpack-dev-server not working

11.26.2020: 13:24
I followed the blog that react recommanded for creating react app from scatch. But instead of adding the specified version for all the packages, I add all the lastes version.
I ran into an issue trying to fire up webpack dev server but it throws error saying it cannot find module 'webpack-cli/bin/config-yargs'.
I suspact this has to do with the warning I got when I installed webpack-dev-server.
The warning says webpack-dev-middleware@3.7.2 requires a peer of webpack@^4.0.0 but non is installed. You must install peer dependencies yourself.
I assume this is the result of me wanting to ge the latest version of all packages instead of follow the instruction. 

For now, I'm using vscode live server to serve public/index.html and it shows up fine. I need to decide if I want to make webpack dev server work to try out the react hot loader or move on and have express server serve index.html and clean the dev server bs out of my code. 

Either way it's randering and I can start building my app if I want to.
Maybe i should just move on. 

TO START:
npm i
npm run build
click bottom of vscode "Go Live"
rendering localhoast 5500

11.27.2020
I'm going to take all the webpack-dev-server stuff out for now and move on. 
I'll build up express server when I cross that bridge. 
I'm going to use vscode live server for now

12.02.2020
let's make a todo

notes:JAVASCRIPT EVENT: E.CURRENTTARGET VS. E.TARGET (http://www.qc4blog.com/?p=650)

right now when you type and press add it would add input string to the end of the last one. right now everything is stored in state.

there are many possibiltiy for next step. 
1. store to database
2. introduce remove, edit, and change status feature
3. change function to custom hooks (refactoring)
4. ask Cindy for ideas to refactor it

12.03.2020

* change todo state data shape from str to array
* List will take an array of todo items and render it according to specification.
* List.js Rendering itemsArray

12.05.2020
* Factor out the ListItem into its own component

12.06.2020
I want to function or object that generate new item object instead of just string. there are going to be a lot of data in each item other than the text itself. This will help me keep track of the datashape of the todo list items.

newItemGenerator function
{ id, owner, color, complete, text, ...}
(these are the data I can come up with for now)

12.07.2020
****Problem****
in my "item" object, ther are function to change status, owner, and toggle complete. if these function to change the item, then I'm changing the state directly ratherthan using setstate
* i need to spend more time planning and develp a data shape.
** Solution **
delete methods for item in itemObject.js

next step
implement delete to all items

instead of actually delete it. I can just add a show/no show in the itemObejct and not render the HTML tag. I think the attibute is hide

12.12.2020
I want to have the run time for edit and delete to be consant. I think i can do that if i let every todo item manage their own state. Nahhh non of this matters just get it done so we can move on to redux and stuff

12.14.2020
I need to test the delete function
Delete function implemented
I worry that as I add more features it will all become messy and my code will be unreadable

I need to figure out exactly how I want to implement the change to do feature
I can buld a pumidoro planner todo list that would be dope