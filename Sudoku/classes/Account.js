import {board} from "./BoardView.js";
import {score} from "./ScoreView.js";
import {difficulty} from "./DifficultyView.js";
import numpad from "./NumPadView.js";

class Account {

    constructor() {
        this.isExist = false;
        this.currentCoordinate = null;
        this.setData = this.setData.bind(this);
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
        board.setData(this.sudokuArr);
        numpad.setData();
        score.setData();
        difficulty.setData();
    }

    update() {
    }

    setData(sudokuArr) {
        this.sudokuArr = sudokuArr;
        this.render();
    }
}

export const account = new Account()