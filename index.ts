const prompots = require('prompts');

// Rock, Paper, Scissors

// Rock > Scisssors
// Paper > Rock
// Scissors > Paper

const ELEMENT_PAPER: string ='paper';
const ELEMENT_ROCK: string ='rock';
const ELEMENT_SCISSORS: string ='scissors';

const ELEMENTS: string[] = [
    ELEMENT_PAPER,
    ELEMENT_ROCK,
    ELEMENT_SCISSORS
];

(async () => {
    const PC_SELECTION: string = ELEMENTS[
        (Math.floor(Math.random() * ELEMENTS.length))
    ]

    console.log(PC_SELECTION);

    const response = await prompots({
        type: 'select',
        name: 'value',
        message: 'Select your element: ',
        choices: [
            { title: 'Rock', value: ELEMENT_ROCK },
            { title: 'Paper', value: ELEMENT_PAPER },
            { title: 'Scissors', value: ELEMENT_SCISSORS }
        ]
    });

    // 1. Check for draw
    // 2. Check if your element is better than other element - then you win
    // 3. You lose



})();