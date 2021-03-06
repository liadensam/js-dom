# DOM Manipulation & Timing

:point_right: This guide is part of the Javascript In The Browser Guides.
The DOM is a representation of a website that the Javascript can use to access its contents and properties. For example, with it it's possible to add and remove a list's items, or make an element “stick” to a specific place after the user scrolled a certain amount, or add and remove CSS classes of whatever element in the page. This is the feature that makes possible the highly interactive interfaces we see on the web today, and is therefore very important to learn.
Asides from that topic, this Guide covers the timing features of Javascript, which you will use to create cyclical actions and timers.

## Topics

• DOM -> Only available in browsers vs. Pure javascript
• DOM (Document Object Model)
• What is DOM
• window and document object
• Adding, Getting, Modifying and Deleting DOM Elements
• Adding Event Listeners to DOM Elements
• Event bubbling
• Iterate DOM collections
• Animate with JS and CSS transitions
• Timing Events
• setTimeout
• setInterval

## Knowledge

• Understand what is the DOM
• Understand why the DOM is only available in browsers
• Understand what event listeners are
• Understand the timing functions in Javascript

## Skills

• Be able to select elements form the DOM and change them with Javascript
• Be able to iterate through collections of DOM elements
• Be able to add event listeners to DOM elements
• Be able to create animations by manipulating element classes
• Be able to create a timer for a an action

## My Project

I have created a dice game with the following rules:

#### GAME RULES:

- The game has two players who switch rounds.
- Every round each player rolls the dice how many times the player wants. Every value thrown is added to the points in the round.
- If the player throws number one on the dice, looses points in that round and the next player is on the move.
- The player can choose "Enough", which means that all her/his points played in that round will be added to his whole score. Then the next player is on the move.
- The game ends when one of the players reach the final score. (The end score is set to 25 for the testing purposes.)

The code is described in very detailed manner in the file. At the bottom I inserted in a comment a pure code without comments so you can see how the code looks in a more clear way. Live site is in the about section above - at the top of this repository page. Enjoy :)
