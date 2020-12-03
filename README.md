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