var total_cost = 0;
let item_name = document.querySelector("#item-name");
let item_value = document.querySelector("#item-value");
let item_total = document.querySelector("#total-value");
let item_button = document.querySelector("#add-item");
let total = document.querySelector("#total-value")

total.textContent = 0;
item_button.addEventListener("click", (_) => {
  if(item_name.value != "" && item_value.value != ""){
    item_name.classList.remove("warning")
    item_value.classList.remove("warning")
    add_item_to_ul(item_name.value, item_value.value, total);
  }else{
    item_name.classList.add("warning")
    item_value.classList.add("warning")
  }
})

function get_element_li (name, price, total_value) {
  let li = document.createElement('li');
  let it_name = document.createElement('span');
  let value = document.createElement('span');
  let button = document.createElement('button')

  button.classList.add("remove")
  button.innerText = "remove";
  it_name.textContent = name;
  value.textContent = price;

  button.addEventListener("click", (_) => {
    remove_item(li, total_value)
  });

  li.appendChild(it_name)
  li.appendChild(value)
  li.appendChild(button);
  return li
}

function add_item_to_ul(item_name, item_price, total_value){
  total_cost += parseInt(item_price,10)
  let li = get_element_li(item_name,item_price, total_value)
  let ul = document.getElementById("list")
  ul.appendChild(li)
  total_value.textContent = total_cost
}

let remove_item  = (node_to_remove, total_value) => {
  let ul = document.getElementById("list")
  total_cost -= parseInt(node_to_remove.children[1].innerText)
  total_value.textContent = total_cost
  ul.removeChild(node_to_remove)
}