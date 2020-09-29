var readlineSync = require('readline-sync');


let listTask = [
    { desc: "Homework", complete: true },
    { desc: "Visit Grandma", complete: false },
];

let choseIndex = 0;
const action = ["Add", "Delete", "Mark as done", "Un mark as done", "print all the items with their status."]
index = readlineSync.keyInSelect(action, "Select one of the options?");

const getTaskArr = () => {
    const newArray = listTask.map((task) => {
        return task.desc;
    });
    return newArray;
}

const add = () => {
    item = readlineSync.question('please enter your new task \n');
    listTask.push({ desc: item, done: false });
};

const deleteTask = () => {
    choseIndex = readlineSync.keyInSelect(getTaskArr(), "Which Task you want to delete?");
    listTask.splice(choseIndex, 1);
    console.log(listTask);
};

const taskDone = () => {
    choseIndex = readlineSync.keyInSelect(getTaskArr(), "Which task is done?");
    listTask[choseIndex].complete = true;
    console.log(listTask);
};

const taskUndone = () => {
    choseIndex = readlineSync.keyInSelect(getTaskArr(), "Which task is undone?");
    listTask[choseIndex].complete = false;
    console.log(listTask);
};

const print = () => {    
    listTask.sort(function(x, y) {
        return (x.complete === y.complete)? 0 : x.complete? 1 : -1;
    });
    console.log(listTask);
};

startToDo=()=>{
    switch (index) {
        case 0:
            add();
            break;
        case 1:
            deleteTask();
            break;
        case 2:
            taskDone();
            break;
        case 3:
            taskUndone();
            break;
        case 4:
            print();
            break;
        default:
            break;
    }
}
startToDo();










