import {account} from "./classes/Account.js";
import {dataStore} from "./classes/DataStore.js";
import {logIn} from "./classes/SignInView.js";


window.onload = main;

const word = 'hello World';

function main() {
     if (localStorage.ticket) {
          dataStore.getSavedGame()
              .then(data =>  account.setData(data));
          return;
     }

     logIn.setData();
     console.log(word)
}
