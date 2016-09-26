var place = prompt('Where in New Zealand do you like to travel?').toUpperCase();

var season = prompt('Which season do you want to travel?').toUpperCase();

switch(place){
    case 'AUCKLAND' || 'TAURANGA':
        if (season == 'SUMMER' || 'AUTUMN'){
            console.log('Nice place. Enjoy!');
        }    
        break;
    
    case 'WELLINGTON':
        if (season == 'SUMMER' || 'SPRING'){
            console.log('Beatiful!.');
        } else {
            console.log('Better go in Summer or Spring');
        }
        break;
    
    case 'QUEEN\'S TOWN':
        if (place == 'QUEEN\'S TOWN' && season == 'AUTUMN'){
            console.log('I love that');
        }
        break;
    
    default:
        console.log('Enjoy your journey!');
}