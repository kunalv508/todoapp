var i =0;
var values = [];
const iteminput = document.getElementById('addTodoItem');
const addtodo = document.getElementById('addTodo');
const todolist = document.getElementById('todoList');
const ol = document.querySelector("ol");
console.log(localStorage.getItem("values"));
var ls = JSON.parse(localStorage.getItem("values"));

if(ls != null){
  //console.log();

  let len = ls.length;

  for(let a = 0;a < len; a++ ){
    const li = '<li onclick="changeCss(this)">'+ls[a]+' <button onclick="del(this)">Delete</button></li>';
    ol.innerHTML = ol.innerHTML + li;
    values[a] = ls[a];
    i++;
  }
}
//get local storag ends



addtodo.addEventListener("click", function add() {
  const inputvalue = iteminput.value;
  
  const li = '<li onclick="changeCss(this)">'+inputvalue+' <button onclick="del(this)">Delete</button></li>';
  ol.innerHTML = ol.innerHTML + li;
  
  values[i] = inputvalue;
   localStorage.setItem("values", JSON.stringify(values));
 //  localStorage.setItem("count.",i);
    i++;
});
//to delete li
function del(e){
  let delItem = e.parentElement.textContent.replace(" Delete", "");
  let rm = JSON.parse(localStorage.getItem("values"));
  //console.log(rm);
  var index = rm.indexOf(delItem);
  rm.splice(index, 1);
  localStorage.setItem("values", JSON.stringify(rm));
  //console.log(rm);
  //str.replace("Microsoft", "W3Schools");
  e.parentElement.remove();//delete parent li on button click
}

//to change css of selected li
function changeCss(e){
  e.style.color = "red";
  e.style.textDecoration = "line-through";
  
}

// Check browser support