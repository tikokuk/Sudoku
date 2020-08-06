import {gameService} from "../core/GameService/GameService.js";

class DataStore {

    constructor() {
    this.sudokuArray = [];
    }

    async getSudokuArray(difficulty) {
        this.sudokuArray = await gameService.getUserGrid(difficulty || undefined);
        return this.sudokuArray;
    }

    async saveGame() {
        console.log(this.sudokuArray);
       return await gameService.saveUserGrid(this.sudokuArray)
    }

   async getSavedGame() {
        this.sudokuArray = await gameService.getSavedGame()
        return this.sudokuArray;
    }
}

export const dataStore = new DataStore()