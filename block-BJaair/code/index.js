let div1 = document.querySelector('.div1')
let div2 = document.querySelector('.div2')

function addCards(){
    let form = document.createElement('form')
    let title = document.createElement('input')
    title.classList = "title"
    title.type = 'text'
    title.placeholder = "Enter the Title"
    title.name = "title"

    let category = document.createElement('input')
    category.classList = "category"
    category.placeholder = "Enter the Category"
    category.name = "category"
    category.type = 'text'
    let button = document.createElement('input')
    button.classList = "button"
    button.type = 'submit'
    button.value = "Add new item"
   
    form.append(title,category,button)
    form.addEventListener("submit",handleClick)
    div2.append(form)
}

addCards()

function handleClick (event){
    event.preventDefault();
    let valueOfTitle = event.target.title.value
    let valueOfCategory = event.target.category.value
console.log(event.target)
    if(valueOfTitle === '' && valueOfCategory === ""){
alert("please fill the form")
    } else{
        let divCard = document.createElement('div')
        let a = document.createElement("a")
        let p = document.createElement('p')
        a.addEventListener('dblclick',handleAncher)
        a.innerText = valueOfTitle
        p.innerText = valueOfCategory
    a.contentEditable=true
        a.style.textDecoration = "underline"
        divCard.classList="card"
        divCard.append(a,p)
        div1.append(divCard)
        event.target.title.value =""
        event.target.category.value=""
    }
  
}


function handleAncher(event){

    1   
   let rt =  event.target.nodeName
    console.log(event.target)     
    if( an.contentEditable= true){
        an.style.backgroundColor = "white"
        an.style.marginTop = "0.1rem"
        an.style.padding = "0.1rem"
    }
    //  else {
    //     an.contentEditable = false
    //     an.style.backgroundColor =  "rgb(238,109,82)"
    // }
    }

