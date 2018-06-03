//Create a variable called "count"
var count = 0;
function increaseCount () {
  //Define a function that increases the count variable
}

function decreaseCount() {
  /* Define a function that decreases the count.
  DO NOT allow the count to go below 0. If the user tries to decrease the count at 0,
  create a popup that warns them not to do that. */
}

function logCountInConsole() {
  //Define a function that console.logs a message as many times as the count says.
  //For example, if the count is 6, it should log 6 times.

}

module.exports = {
    increaseCount,
    decreaseCount,
    logCountInConsole,
    getCount,
    setCount
};

/////////////// Don't touch

function getCount() {
    return count;
}

function setCount(value) {
    count = value;
}
