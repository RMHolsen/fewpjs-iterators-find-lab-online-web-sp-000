/* Why the hell is this even here 

const testVar = {}

function testFunc() {
  return "hi"
}

*/

const superbowlWin = (stats) => {
// function! stats here used to = the W/L stats for a team
  let result = stats.find(chiefsWin)
  // assign the variable result to the result 
  return !!result ? result.year : undefined 
  // return either the year of the result or undefined depending on whether or not they won that year
  // IT'S CALLED A TERNARY OPERATOR
}

const chiefsWin = (game) => {
  if (game.result === 'W') {
    return game 
  }
  // if the game result was a win, return the game object
  // also remember your damn javascript syntax please
}