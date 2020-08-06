import {service} from "../service/service.js";

const gameService = {
   getUserGrid : async (difficulty = 'easy') => {
      return await service(`getUserGrid/${JSON.parse(localStorage.ticket).userId}/${difficulty}`, 'GET', null);
   },
   getSavedGame : async () => {
      return await service(`getSavedGame/${JSON.parse(localStorage.ticket).userId}`)
   },
   gtePuzzleDigit : async (index) => {
      return await service(`getPuzzleDigit/${JSON.parse(localStorage.ticket).userId}/${index}`);
   },
   saveUserGrid : async (game) => {
     return await service('saveGame', 'PUT', {game, id: JSON.parse(localStorage.ticket).userId})
   },
};

export {gameService}