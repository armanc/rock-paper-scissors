const prompots = require('prompts');

type GameElement = {
    title: string;
    beats: GameElement[];
}

const ELEMENT_PAPER: GameElement = {
    title: 'Paper',
    beats: [],
}
const ELEMENT_ROCK: GameElement = {
    title: 'Rock',
    beats: [],
}
const ELEMENT_SCISSORS: GameElement = {
    title: 'Scissors',
    beats: [],
}
const ELEMENT_LIZARD: GameElement = {
    title: 'Lizard',
    beats: [],
}
const ELEMENT_SPOCK: GameElement = {
    title: 'Spock',
    beats: [],
}
const ELEMENT_DYNAMITE: GameElement = {
    title: 'Dynamite',
    beats: [],
}

ELEMENT_PAPER.beats.push(ELEMENT_ROCK, ELEMENT_SPOCK);
ELEMENT_ROCK.beats.push(ELEMENT_SCISSORS, ELEMENT_LIZARD);
ELEMENT_SCISSORS.beats.push(ELEMENT_PAPER, ELEMENT_LIZARD);
ELEMENT_LIZARD.beats.push(ELEMENT_PAPER, ELEMENT_SPOCK);
ELEMENT_SPOCK.beats.push(ELEMENT_ROCK, ELEMENT_SCISSORS);
ELEMENT_DYNAMITE.beats.push(ELEMENT_ROCK, ELEMENT_SCISSORS, ELEMENT_SPOCK, ELEMENT_PAPER, ELEMENT_LIZARD);

const ELEMENTS: GameElement[] = [
    ELEMENT_PAPER,
    ELEMENT_ROCK,
    ELEMENT_SCISSORS,
    ELEMENT_LIZARD,
    ELEMENT_SPOCK,
    ELEMENT_DYNAMITE
];

(async () => {
    const PC_SELECTION: GameElement = ELEMENTS[
        (Math.floor(Math.random() * ELEMENTS.length))
    ]

    const response = await prompots({
        type: 'select',
        name: 'selectedElement',
        message: 'Select your element: ',
        choices: ELEMENTS
    });

    const PLAYER_SELECTION = ELEMENTS[response.selectedElement];

    // console.log(PLAYER_SELECTION)

    if (PC_SELECTION.title == PLAYER_SELECTION.title) {
        console.log("It's a draw!")
    } else {
        if (PLAYER_SELECTION.beats.includes(PC_SELECTION)) {
            console.log("PC had "+PC_SELECTION.title+"! Player won!")
        } else {
            console.log("PC had "+PC_SELECTION.title+"! PC won!")        
        }
    }
})();