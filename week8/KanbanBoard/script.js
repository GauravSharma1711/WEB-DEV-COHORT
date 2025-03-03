// for adding board
const container = document.querySelector('.container')
const todoBoard = document.getElementById('todo-board');
const addTaskBtn = document.getElementById('add-task');
const items = document.getElementById('todo-items')
const addBoard = document.getElementById('add-board');

addBoard.addEventListener('click',()=>{

    const name = prompt("Enter name of board");

    const board = document.createElement('div');
    const upper = document.createElement('div');
    const boardUpperOne =  document.createElement('div');
    const nameHere = document.createElement('h4');
    const countItem = document.createElement('div');
    const boardUpperTwo =  document.createElement('div');
    const delBtn = document.createElement('button');
    const cardItems =  document.createElement('div');


    nameHere.innerText = name;
    countItem.innerText = `(${cardItems.querySelectorAll("p").length})`;
    delBtn.innerText = "Delete";

    board.classList.add('board');
    upper.classList.add('board-upper');
    cardItems.classList.add('items');
    boardUpperOne.classList.add('board-upper-one');
    countItem.classList.add('item-counter');
    delBtn.classList.add('board-delete-btn')


    container.appendChild(board);

    board.appendChild(upper);
    board.appendChild(cardItems);

    upper.appendChild(boardUpperOne)
    upper.appendChild(boardUpperTwo);
    boardUpperOne.appendChild(nameHere)
    boardUpperOne.appendChild(countItem);
    boardUpperTwo.appendChild(delBtn);

  delBtn.addEventListener('click',()=>{
    board.remove();
  })




})


// for adding card


addTaskBtn.addEventListener('click',()=>{
    let task = prompt('Enter the task');
    if(task==""){
        alert("Please enter task first");
        return;
    }
    let description = "";
    if(task){
         description = prompt('Enter the description');
    }
    if(description==""){
        alert("Please enter description first");
        return;
    }


const item = document.createElement('div');

const itemUpper = document.createElement('div');
const itemLower = document.createElement('div');

const date = document.createElement('div');

const itemBtn = document.createElement('div');
const itemDelete = document.createElement('button');
const itemEdit  = document.createElement('button');

const itemName = document.createElement('p');
const itemDescription = document.createElement('p');


itemName.textContent = task;
itemDescription.textContent = description;
itemDelete.innerText="❌"
itemEdit.innerText="✏️"
date.innerText = getDate();

item.classList.add('item');
itemUpper.classList.add('item-upper')
itemLower.classList.add('item-lower')
date.classList.add('item-date')
itemBtn.classList.add('item-btn')
itemDelete.classList.add('item-delete')
itemEdit.classList.add('item-edit')
itemName.classList.add('item-name')
itemDescription.classList.add('item-description')

item.appendChild(itemUpper)
item.appendChild(itemLower)
itemUpper.appendChild(date);
itemUpper.appendChild(itemBtn)
itemBtn.appendChild(itemEdit)
itemBtn.appendChild(itemDelete)
itemLower.appendChild(itemName)
itemLower.appendChild(itemDescription)

todoBoard.appendChild(item);


itemDelete.addEventListener('click',()=>{
   item.remove();
})

itemEdit.addEventListener('click', () => {
    let newTask = prompt('Enter new task', itemName.textContent);
    if (newTask === "") {
        alert("Please enter a valid task");
        return;
    }

    let newDescription = prompt('Enter new description', itemDescription.textContent);
    if (newDescription === "") {
        alert("Please enter a valid description");
        return;
    }

   
    itemName.textContent = newTask;
    itemDescription.textContent = newDescription;
});



})


function getDate(){
    const date = new Date(); 

const day = date.getDate(); 
const month = date.toLocaleString('en-US', { month: 'short' }); 
const year = date.getFullYear(); 

const formattedDate = `${day} ${month} ${year}`;
console.log(formattedDate); 
return formattedDate

}
