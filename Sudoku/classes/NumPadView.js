import {score} from "./ScoreView.js";
import {board} from "./BoardView.js";
import {dataStore} from "./DataStore.js";
import {gameService} from "../core/GameService/GameService.js";

export class NumPadView {

    constructor() {
    this.isExist = false;
    this.currentCoordinate = null;
        this.setData = this.setData.bind(this)
    }

    render() {
        if (!this.isExist) {
            this.create();
            this.isExist = true;
        } else {
            this.update();
        }
    }

    create() {
        this.container = document.createElement('div');
        this.container.classList.add('numpad');
        const button = document.createElement('button');
        button.innerText = 'New Game';
        button.className = 'btn btn-primary btn-lg';
        button.addEventListener('click',  async () => {
            const difficulty = document.getElementById('difficultyId');
            const data = await dataStore.getSudokuArray(difficulty.valueOf().value);

            score.setData();
            board.setData(data);
            await dataStore.saveGame();
        });
        this.container.appendChild(button);
        for (let i = 0; i < 3; i++) {
            const row = document.createElement('div');
            row.classList.add('numpadRow');
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement('div');
                cell.classList.add('numpadCell');
                row.appendChild(cell);
                cell.innerText = `${i * 3 + j + 1}`;
                cell.addEventListener('click',async () => {
                    const digit = await gameService.gtePuzzleDigit(this.currentCoordinate);
                    if (+cell.innerText === digit) {
                    if (dataStore.sudokuArray[this.currentCoordinate] > 0 && typeof dataStore.sudokuArray[this.currentCoordinate] === "number") {
                        return
                    }
                        document.getElementById(`index_${this.currentCoordinate}`).innerText = digit;
                        dataStore.sudokuArray[this.currentCoordinate] = `${digit}`;
                        console.log(dataStore.sudokuArray);
                        await gameService.saveUserGrid(dataStore.sudokuArray);
                    }
                });
            }
            this.container.appendChild(row);
        }
        const erase = document.createElement('button');
        erase.innerText = 'Erase';
        erase.classList.add('btn');
        erase.classList.add('btn-primary');
        erase.addEventListener('click', () => {
            if (typeof dataStore.sudokuArray[this.currentCoordinate] === 'string') {
                document.getElementById(`index_${this.currentCoordinate}`).innerText = '';
                dataStore.sudokuArray[this.currentCoordinate] = 0;
            }
        });
        this.container.appendChild(erase);
        const root = document.getElementById('root');

        root.appendChild(this.container);
    }

    update() {

    }

    setData(currentCoordinate) {
        this.currentCoordinate = currentCoordinate;
        this.render();
    }
}

const numpad = new NumPadView();

export default numpad;