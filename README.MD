![ga](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)
# Space Game 🚀
Creator: Akira Wong, adapted by Thom Page, Andrew McMurryson and Tyler Lane <br>
![star wars](https://camo.githubusercontent.com/cffbbbbaf197f376c3d8462e7037b408365a52a7/687474703a2f2f7669676e65747465342e77696b69612e6e6f636f6f6b69652e6e65742f73746172776172732f696d616765732f362f36352f426174746c655f6f665f456e646f722e706e672f7265766973696f6e2f6c61746573743f63623d3230313231323136313635323339)
Using everything we've learned in class so far, we'll build a rudimentary spacbattle** game. At first, the game will be programmed for, and played in the browser console using `prompt()` to get user input. Optionally, use whatever time and understanding you have of HTML, CSS & jQuery to build a graphical interface in the browser to replace `prompt()`. 
does not have to be elegant or look good. **The only thing that matters is that it works.**
## Specifications ✨
### Build a Game of Battling Spaceships
Earth has been attacked by a horde of aliens! You are the captain of the _USS Assembly_ on a mission to destroy every last alien ship.
There are six alien ships. The aliens attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. You have initiative and will attack first. However, you can only engage the alien ships one at a time. After you have destroyed an alien ship, you have the option to attack the next ship or attempt a hasty retreat.
#### Example Game Round
- You attack the first alien ship
- If the ship survives, it attacks you
- If you survive, you attack the ship again
- If it survives, it attacks you again, and so forth until either ship is destroyed
- If your ship is destroyed, you lose the game
- If the alien ship is destroyed you have the option to **attack the next ship** or **retreat**
 - If you retreat, the game is over
 - You win the game if you destroy all six alien ships
#### Ship Properties
property | description
---|---
hull | (Same as hitpoints) If hull reaches `0` or less, the ship is destroyed
firepower | The amount of damage done to the **hull** of the target with a successful hit
accuracy | is the chance between 0 and 1 that the ship will hit its target
Your spaceship, the **USS Assembly** should have the following property values:
 - **hull** - `20`
 - **firepower** - `5`
 - **accuracy** - `.7`
**The alien ships** should each have the following _ranged_ properties determined randomly:
 - **hull** - between `3` and `6`
 - **firepower** - between `2` and `4`
 - **accuracy** - between `.6` and `.8`
You should be battling six alien ships each with unique values. 
### 🛠 Setup
Make a folder `spacebattle` and put together an `index.html` and `app.js`.
#### Where to begin?
Read over the specifications. Make sure you understand them. If you do not understand them, try to clarify them for yourself.
Plan the game. This is an act of simplification.
Follow [these programming principles](http://www.artima.com/weblogs/viewpost.jsp?thread=331531):
![](https://i.imgur.com/G8gyTJU.png)
Use **pseudo code** to get a sketch of your game first.
Often, beginning something is an act of creative inspiration to find the simplest possible case. The first step is not necessarily a matter of logical deduction. Once you have a few 'clues' you can follow the trail of crumbs to a logical conclusion.
#### Actors and Actions
A good rule of thumb is start with the **actors** and then the **actions**. What actors do we need? In this case, we need our spaceship and the alien spaceships. An action these ships can take is to attack something. Perhaps a ship object (an actor) could therefore have an **attack** method (an action). 
A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.
#### Start Simple
Keep these five things in mind when planning and coding your game:
1. Begin even simpler than the specifications suggest. In this case, perhaps just start with one alien ship instead of many alien ships, and get the code for one ship working first.
2. Root out any 'gotchas' that you really ought to foresee. In this case, will we really want nested loops -- one for a battle, one for iterating over aliens)? How will we exit one loop and then exit the parent loop? Perhaps keeping it to one loop somehow will help us avoid unnecessary difficulties.
3. When coding, form a solid and testable foundation before building upon it with more functionality. In this case, is there a bug where an alien can attack _after_ it has been destroyed? Better fix that bug before increasing the complexity of the code.
4. When you have a piece of functionality tested and working, **commit it**. Try not to commit broken code. Unsure of when to commit? **Commit when something works**. You want to save working code.
### UI
Use what we've learned about jQuery to manipulate the DOM. Replace thread-blocking `prompt()` statements with `<button>`s on the page that have click events. Learn about jQuery's `show()` and `hide()` methods. It doesn't have to look good, just work! (But don't be afraid to put in the work with CSS to make it look nice)
## ✅ Code Quality 
From the beginning, you will be writing your code for other developers.
Having to read and understand another developer's code is common practice. Get used to it now! In the 'real world', you will be in a position where you inherit someone else's code-base and are told to 'fix it' or to add a feature to the code.
What does this mean for your coding practices? 
- Use proper indentation! On the job, your code immediately fails a code review if indentation is not perfect.
- Use semantic variable and function names, and use a verb for your function/method names.
- What your code does should be self-evident.
- If a piece of code is hard to read have a comment above those few lines explaining what they do.
Your code should be as coherent to another developer as possible. 
## 🤡 Bonuses
 - The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it.
 - Scientists have developed a super targeting computer for your lasers. You now are asked which of the aliens you would like to hit with your lasers.
 - Scientists have improved your ship's shields. They don't work that consistently, and only improve your hit points by a random number each time
 - Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage. You can say before each battle if you want to use one of your missles.
 - The aliens have gained emotions and now can attack more than one at a time.
 - Evil alien scientists have created an alien mega-ship. This mega-ship contains a number of "weapon pods" that each have their own individual hit points. These "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship, which also has its own hit points.
## 🎉 Bonus Bonuses
 - When the game is over, prompt the user if they would like to play again, and make it so the user can play again with all the values set back to default.
 - So far the entire game is just one battle, with many aliens. Implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle. Keep track of points for the number of wins the player has.
 - After every battle you are asked if you want to return to base and recharge your shields.
 - Make the players and enemies stronger after each battle
 - Distribute medals and power ups to the player depending on points