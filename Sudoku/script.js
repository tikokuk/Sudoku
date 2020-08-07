import {account} from "./classes/Account.js";
import {dataStore} from "./classes/DataStore.js";
import {logIn} from "./classes/SignInView.js";


window.onload = main;
//testing
let i = 0; 
while(i < 10) {
console.log(i--)
}
function main() {
     if (localStorage.ticket) {
          dataStore.getSavedGame()
              .then(data =>  account.setData(data));
          return;
     }
     logIn.setData();
}
