const fs = require('fs');

const filePath = "./tasks.json";

const command = process.argv[2]
const argument = process.argv.slice(3).join(" ");;
const loadTasks =()=>{
    try {
        const databuffer = fs.readFileSync(filePath);
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    } catch (error) {
        return []
    }
}
const saveTask = (task)=>{
    const dataJSON = JSON.stringify(task);
    fs.writeFileSync(filePath,dataJSON);

}
const listTask = ()=>{
    const task = loadTasks()
    task.forEach((task,index)=>console.log(`${index + 1}. ${task.task}`))
}
const addTask = (task)=>{
    const tasks = loadTasks();
    tasks.push({task})
    saveTask(tasks)
    console.log("task added..",task);
    
}
const removeTask = (argument) => {
    const indexToRemove = parseInt(argument) - 1; // because user gives task number starting from 1
    const tasks = loadTasks();

    if (indexToRemove >= 0 && indexToRemove < tasks.length) {
        const removed = tasks.splice(indexToRemove, 1); // actually removes the item
        saveTask(tasks); // save updated list
        console.log("Removed task:", removed[0].task);
    } else {
        console.log("Invalid task number");
    }
};


if (command === 'add') {
    addTask(argument)
}else if(command === 'list'){
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("command not found");
    
}
