import {account} from "./classes/Account.js";
import {dataStore} from "./classes/DataStore.js";
import {logIn} from "./classes/SignInView.js";

//todo: test branch

window.onload = main;

function main() {
     if (localStorage.ticket) {
          dataStore.getSavedGame()
              .then(data =>  account.setData(data));
          return;
     }

     logIn.setData();

}
