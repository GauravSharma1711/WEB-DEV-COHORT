
// for adding board
const container = document.querySelector('.container')
const todoBoard = document.getElementById('todo-board');
const progressBoard = document.getElementById('progress-board');
const completedBoard = document.getElementById('completed-board');
const addTaskBtn = document.getElementById('add-task');
const items = document.getElementById('todo-items')
const item = document.querySelector('.item')
const itemCounter = document.querySelector('.item-counter');
const addBoard = document.getElementById('add-board');
const todoDelete = document.getElementById('todo-delete')
const progressDelete = document.getElementById('progress-delete')
const completedDelete = document.getElementById('completed-delete')
const itemEdit=  document.querySelector('.item-edit')
const itemDelete = document.querySelector('.item-delete')
const nameitem = document.querySelector('.item-name')
const descitem  = document.querySelector('.item-description')


updatecounter(todoBoard);

itemDelete.addEventListener('click',()=>{
    item.remove();
    updatecounter(todoBoard)
})
itemEdit.addEventListener('click',()=>{
    const name = prompt("Enter name",nameitem.textContent );
    const description = prompt("Enter Description",descitem.textContent );

    nameitem.textContent = name;
    descitem.textContent  = description;
})

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
    countItem.innerText = `(${cardItems.querySelectorAll('.item').length})`;
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

  
 boardCapture(board,cardItems);


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
item.setAttribute("draggable",true);
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


items.appendChild(item);
updatecounter(todoBoard)


itemDelete.addEventListener('click',()=>{
   item.remove();
   updatecounter(todoBoard)
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


attach(item);





})


//stick card to board
const allBoard = document.querySelectorAll('.board');
allBoard.forEach((board)=>{
    let itemsdiv = board.querySelector('.items');
    boardCapture(board,itemsdiv);
  updatecounter(board);
})


const allItems = document.querySelectorAll('.item');
allItems.forEach((item)=>{
   attach(item);

})

function getDate(){
    const date = new Date(); 

const day = date.getDate(); 
const month = date.toLocaleString('en-US', { month: 'short' }); 
const year = date.getFullYear(); 

const formattedDate = `${day} ${month} ${year}`;
return formattedDate

}


function attach(target){
    let prevBoard= null;
    target.addEventListener('dragstart',()=>{
        target.classList.add('flying')
        prevBoard = target.closest('.board');
    })
    
    target.addEventListener('dragend',()=>{
        target.classList.remove('flying')
        const newBoard = target.closest('.board');
        if (prevBoard) updatecounter(prevBoard); 
        if (newBoard) updatecounter(newBoard); 
    })
  
    
}

function boardCapture(board,boardSecondDiv){
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying');
        boardSecondDiv.appendChild(flyingElement);
        updatecounter(board)
         
     })
}

function updatecounter(board){
    const countItem = board.querySelector('.item-counter'); 
    const cardItems = board.querySelector('.items'); 
    countItem.innerText = `(${cardItems.querySelectorAll('.item').length})`;
}


todoDelete.addEventListener('click',()=>{
    todoBoard.remove();
})

progressDelete.addEventListener('click',()=>{
    progressBoard.remove();
    updatecounter(progressBoard)
})

completedDelete.addEventListener('click',()=>{
    completedBoard.remove();
    updatecounter(completedBoard)
})



