import numpad from "./NumPadView.js";

class BoardView {
    constructor() {
    this.isExist = false;
    this.container = document.createElement('div');
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
        const table = document.createElement('table');
        table.classList.add('sudokuBoard');
        this.tableBody = document.createElement('tbody');
        for (let i = 0; i < 9; i++) {
            const row = document.createElement('tr');
            row.classList.add('game-row');
            for (let j = 0; j < 9; j++) {
                const index =  i * 9 + j;
                const cell = document.createElement('td');
                cell.innerText = this.userGrid[index] > 0 ? this.userGrid[index] : '';
                row.appendChild(cell);
                cell.classList.add('game-cell');
                cell.setAttribute('id', `index_${index}`);
                if (this.userGrid[index] === 0 || typeof this.userGrid[index] === 'string') {
                    cell.classList.add('cell-value');
                }
                cell.addEventListener('click',() => {
                    numpad.setData(index);
                });
            }
            this.tableBody.appendChild(row);
        }
        table.appendChild(this.tableBody);


        this.container.classList.add('tempReview');
        this.container.appendChild(table);
        document.getElementById('root').appendChild(this.container)
    }

    update() {
        const len = this.tableBody.children.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                const cell = this.tableBody.children[i].children[j];
                if (this.userGrid[i * len + j] > 0) {
                    cell.innerText = this.userGrid[i * len + j];
                    cell.classList.remove('cell-value');
                } else {
                    cell.innerText = '';
                    cell.classList.add('cell-value');
                }
            }
        }
    }

     setData(userGrid) {
        this.userGrid = userGrid;
         this.render();
    }
}

export const board = new BoardView();