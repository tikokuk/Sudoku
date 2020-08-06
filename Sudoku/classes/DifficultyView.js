import {dataStore} from "./DataStore.js";
import {board} from "./BoardView.js";

class DifficultyView {
    constructor() {
        this.isExist = false;
        this.setData = this.setData.bind(this)
    }

    render(){
        if (!this.isExist) {
            this.create();
        }
    }

    create () {
    this.container = document.createElement('div');
    this.container.classList.add('difficulty-section')
    this.select = document.createElement('select');
    const difLabel = document.createElement('label');
    const easy = document.createElement('option');
    const medium = document.createElement('option');
    const hard = document.createElement('option');
    this.select.setAttribute('id', 'difficultyId');
    difLabel.innerText = 'Difficulty  :';
    difLabel.setAttribute('for', 'difficultyId');
    easy.setAttribute('value', 'easy');
    medium.setAttribute('value', 'medium');
    hard.setAttribute('value', 'hard');
    easy.innerText = 'Easy';
    medium.innerText = 'Medium';
    hard.innerText = 'Hard';
    this.select.appendChild(easy);
    this.select.appendChild(medium);
    this.select.appendChild(hard);
    this.select.addEventListener('change',  async (e) => {
        this.difficulty = e.target.valueOf().value;

        const data = await dataStore.getSudokuArray(this.difficulty)
            board.setData(data);

        await dataStore.saveGame()
    })
        this.container.appendChild(difLabel)
    this.container.appendChild(this.select)
        document.getElementById('root').appendChild(this.container);
    }

    setData () {
        this.render()
    }
}

export const difficulty = new DifficultyView();