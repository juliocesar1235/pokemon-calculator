var weight = 0
let poke_name = document.querySelector("#poke-name")
let weight_total = document.querySelector("#total-value")
let search_button = document.querySelector("#poke-search")
let total = document.querySelector("#total-value")

total.textContent = 0

search_button.addEventListener("click", (_) => {
//   if(poke_name.value != ""){
//     // item_name.classList.remove("warning")
//     // item_value.classList.remove("warning")
       add_item_to_ul(poke_name.value, total);
//   }else{
//     item_name.classList.add("warning")
//     item_value.classList.add("warning")
//   }
})

function get_element_li (name, price, total_value) {
  let li = document.createElement('li')
  let poke_name = document.createElement('span')
  let poke_weight = document.createElement('span')
  let button = document.createElement('button')

  //button.classList.add("remove")
  button.innerText = "remove"
  poke_name.textContent = name
  poke_weight.textContent = price

  button.addEventListener("click", (_) => {
    remove_item(li, total_value)
  });

  li.appendChild(poke_name)
  li.appendChild(poke_weight)
  li.appendChild(button);
  return li
}

async function get_pokemon(name){
    try{
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ name)
        return res.data
    } catch(e){
        console.log("error")
    }
};

function add_item_to_ul(name, total){
  let poke_data;
  (async () => {
    poke_data  = await get_pokemon(name)
    weight += parseInt(poke_data.weight,10)
    let li = get_element_li(poke_data.name,poke_data.weight, total)
    let ul = document.getElementById("list")
    ul.appendChild(li)
    total.textContent = weight
  })()
}

let remove_item  = (node_to_remove, total_value) => {
  let ul = document.getElementById("list")
  weight -= parseInt(node_to_remove.children[1].innerText)
  total_value.textContent = weight
  ul.removeChild(node_to_remove)
}