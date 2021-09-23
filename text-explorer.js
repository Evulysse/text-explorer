const prompt = require('prompt-sync')({ sigint: true });



let x = 0
let y = 0

while (true) {

    const direction = (prompt('choose direction you would like to go: Left, Right, Up, Down '));
    
    if (direction === 'left') {
        x = x - 1
        console.log('you moved left');
    }


    if (direction === 'right') {
        x = x + 1
        console.log('you moved right');

    }
    if (direction === 'up') {
        y = y + 1
        console.log('you moved up');
    }

    if (direction === 'down') {
        y + y - 1
        console.log('you moved down');
    }
    console.log('Your location', x, 'x', y ,'y');

    if (x===0 && y===0) {
        console.log( 'You are at the door');
    }

    if (x===0 && y===1) {
        console.log('Passing the turtles');
    }

    if (x===0 && y===2) {
        console.log('passing the lillies');
    }

    if (x===0 && y===-1) {
        console.log('Do you see the sun?');
    }

    if (x===0 && y===-2) {
        console.log('The sky is beautiful');
    }

    if (x===1 && y===0) {
        console.log('boy oh boy');
    }

    if (x===2 && y===0) {
        console.log('look at birds on the left');    
    }

    if (x===-1 && y===0) {
        console.log('what pretty flowers');
    }

    if (x===-2 && y===0) {
        console.log('wacth out for the snakes');
    }

    if (x===-2 && y===2) {
        console.log('look mom no hands');
    }

    if (x===-2 && y===-2) {
        console.log('its a beautiful morning');
    }

    if (x===2 && y===2) {
        console.log('I think Ill go outside for a while');
    }

    if (x===2 && y===-2) {
        console.log('aaahh ahhh');
    }

    if (x===-1 && y===1) {
        console.log('You emerge near the pond');
    }

    if (x===1 && y===1) {
        console.log('Do you see the fish?')
    }

    if (x===-1 && y===-1) {
        console.log('You are near the cave');
    }

    if (x===1 && y===-1) {
        console.log('You are in the cave');
    }





}


