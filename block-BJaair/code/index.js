let form = document.querySelector('form')
let ul = document.querySelector('ul')


let cardArr = 
JSON.parse(localStorage.getItem('cards')) || 
[]


form.addEventListener("submit",(event)=>{
      event.preventDefault();
    let title = event.target.title.value
    let category = event.target.category.value
    if(title ==="" && category ===""){
        alert('Please fill the form')
    } else{
        cardArr.push({title,category})
        localStorage.setItem('cards',JSON.stringify(cardArr))
        createUI(cardArr,ul)
        event.target.title.value = ""
        event.target.category.value = ""
    }
})


function createUI (data = cardArr,root=ul){
    root.innerHTML = ""
let fragment = new DocumentFragment()
data.forEach((cardInfo,index) => {
    let li = document.createElement("li")
    let h2 = document.createElement('h2')
    h2.innerText = cardInfo.title
    h2.addEventListener("dblclick",(event)=>handleEdit(event,cardInfo.title,index,"title"))


    let p = document.createElement('p')
    p.innerText = cardInfo.category
    p.addEventListener("dblclick",(event)=>handleEdit(event,cardInfo.category,index,"category"))
  

    li.append(h2,p)
    fragment.appendChild(li)
})
root.append(fragment)
}
createUI(cardArr,ul)


function handleEdit(event,info,id,label){
       let elm =  event.target
       let input = document.createElement('input')
       input.value = info
    console.log(label)
        input.addEventListener("keyup",(event)=>{
            if(event.keyCode === 13){
                let updateValue = event.target.value
               cardArr[id][label] = updateValue
               createUI();

               localStorage.setItem('cards',JSON.stringify(cardArr))
            }
        })

        //    if we click outside so we are using blur event
        input.addEventListener("blur",(event)=>{
                let updateValue = event.target.value
               cardArr[id][label] = updateValue

               createUI();
               localStorage.setItem('cards',JSON.stringify(cardArr))
        })
        let parent = event.target.parentElement
        parent.replaceChild(input,elm)
        }
 
 
