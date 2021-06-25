const input = document.querySelector('.input input');
const taskList = document.querySelector('.task_list');
const first = document.querySelector('.first');
// let lis = []

input.onkeyup = e => {
  // (first!==null || first!==undefined)? taskList.removeChild(first):null;
  if(e.key === "Enter"){
    const li = document.createElement('li');
    li.setAttribute('class', '_list');
    li.innerText = input.value;
    taskList.appendChild(li);
    input.value = "";
    // lis = [...lis, li];
  }
  taskList.removeChild(first);
}

// setInterval(()=> {
//   for(let li of lis){
//     li.onclick = e => {
//       if(e.isTrusted){
//         li.classList.add('fade-out');
//         li.style.textDecoration = 'none';
//         li.innerText = "Removed";
//         setTimeout(()=>taskList.removeChild(li), 700);
//       }
//     }
//   }
// },500)

taskList.onclick = e => {
  if(e.isTrusted){
    e.target.classList.add('fade-out');
    e.target.innerText = "Removed";
    setTimeout(()=>taskList.removeChild(e.target), 800);
  }
}
