import {account} from "./classes/Account.js";
import {dataStore} from "./classes/DataStore.js";
import {logIn} from "./classes/SignInView.js";

//todo: test branch

window.onload = main;
//testing
let i = 0; 
while(i < 10) {
console.log(i--)
}
function main() {
     let x = 10;
     while (x) {
          console.log(x--);
     }
     if (localStorage.ticket) {
          dataStore.getSavedGame()
              .then(data =>  account.setData(data));
          return;
     }

     logIn.setData();

}
