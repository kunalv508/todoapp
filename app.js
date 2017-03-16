var i =0;
var values = [];
const iteminput = document.getElementById('addTodoItem');
const addtodo = document.getElementById('addTodo');
const todolist = document.getElementById('todoList');
const ol = document.querySelector("ol");
console.log(localStorage.getItem("values"));
var ls = JSON.parse(localStorage.getItem("values"));

if(ls != null){
  let len = ls.length;
  for(let a = 0;a < len; a++ ){
    const li = '<li onclick="changeCss(this)">'+ls[a]+' <button onclick="del(this)">Delete</button></li>';
    ol.innerHTML = ol.innerHTML + li;
    values[a] = ls[a];
    i++;
  }
}

addtodo.addEventListener("click", function add() {
	const inputvalue = iteminput.value;
	const li = '<li onclick="changeCss(this)">'+inputvalue+' <button onclick="del(this)">Delete</button></li>';
	ol.innerHTML = ol.innerHTML + li;
	values[i] = inputvalue;
	localStorage.setItem("values", JSON.stringify(values));
i++;
});

//deleting an li
function del(e){
  let delItem = e.parentElement.textContent.replace(" Delete", "");
  let rm = JSON.parse(localStorage.getItem("values"));
  var index = rm.indexOf(delItem);
  rm.splice(index, 1);//
  localStorage.setItem("values", JSON.stringify(rm));
  e.parentElement.remove();//delete parent li on button click
}

//changing css of selected li
function changeCss(e){
  e.className += " tddone";
}
