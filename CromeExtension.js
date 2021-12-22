
let myleads= []
let lodlinks= []    
const inputEl= document.getElementById("input-el");
let inputbtn = document.getElementById("input-btn ")
const ulEl= document.getElementById("ul-el")
let myleadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
const deletebtn = document.getElementById("delete-btn ")
const tabBtn = document.getElementById("tab-btn")

if(myleadsfromlocalstorage){
    myleads =myleadsfromlocalstorage
    render(myleads)
}

function render(leads){
    let listItems = ""
    for(let i = 0; i<leads.length;  i++){
        
        // listItems += " <li><a target = '_blank' href = '" + leads[i] + "'>" + leads[i] + "</a></li> "
        listItems +=  `
        <li>
            <a target = '_blank' href = '${leads[i]}'>
                ${leads[i]}
            </a>
       </li>
    ` 
    }
    ulEl.innerHTML= listItems; 
}

tabBtn.addEventListener("click", function(){
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    })
})

deletebtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myleads= []
    render(myleads)
    })

//console.log(myleadsfromlocalstorage)
inputbtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myleads", JSON.stringify(myleads))

    render(myleads)
    console.log(localStorage.getItem("myleads"))
})

for(let i=0; i<myleads.length-1; i++){
  // console.log(myleads[i])
   ulEl.innerHTML += " <li>" + myleads[i] + "</li> "
    const li = document.createElement("li")
    li.textContent = myleads[i]
    ulEl.append(li);
}


//practice
/// Using  string template 

// const recipitanc ="james"
// const email = `hey ${recipitanc} hows going on !`
// console.log(email)

//local Storage 
// console.log(localStorage.getItem("Ashish"))
// let myleadss = `["www.ashish.com"]`
// myleadss = JSON.parse(myleadss)
// myleadss.push("www.w3school.com")
// myleadss = JSON.stringify(myleadss)
// console.log(typeof myleadss) 

// let Welcome = document.getElementById("welcomeEl")
// function greeting(greeting, Name){
//     Welcome.textContent = `${greeting} ${Name}`
// }
// greeting("hii..", "Ashish")

// let add1 = document.getElementById("welcomeEl")
// function add(num1 , num2){
//     return num1+ num2
// }
// console.log(add(2,3))
// let array1= ["Ashish", "Neeraj","Amber"]

///function with Array
// function getfirstarr(array1){
// return array1[2]
// }
// let cards = getfirstarr([10,11,13])
// console.log(cards)
