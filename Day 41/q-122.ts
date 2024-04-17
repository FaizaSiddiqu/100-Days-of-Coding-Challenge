// : Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let count : number = 10;
while ( count > 0 ) {
    if ( count == 5) {
        break;      // exit the loop when counter reaches the 5
    }
    console.log(count);
    count--;    //decrements the counter
}
// logs the countdown from 10 but stop abruptly when it hita 5.