import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player"); //get iframe 
const player = new Player(iframe); //create new object from Player class


const timeFuction = (data) => { // function that fetch "data" from player object
    let playerSecond = data.seconds; // assign seconds from data object
    localStorage.setItem("videoplayer-current-time", playerSecond); // save playersecond as videoplayer-current-time in local storage
}

player.on('timeupdate', throttle(timeFuction, 1000)); // call "on" method from player object with keyword timeupdate and a timeFunction enclosed with throttle which update localStorage every 1 sec

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});