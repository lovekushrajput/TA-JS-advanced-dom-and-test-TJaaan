let ul = document.querySelector('ul')

let max = 3
let count  = 0

function quote(){
    for(let i=0; i<max ; i++){
        count = count + 1
        let li = document.createElement('li')
        let blockquote =  document.createElement('blockquote')
        blockquote.innerText = quotes[count].quoteText
        let cite =  document.createElement('cite')
        cite.innerText = quotes[count].quoteAuthor
        li.append(blockquote,cite)
        ul.append(li)
    }
}

window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    if(scrollTop + clientHeight >= scrollHeight && count < quotes.length){
        quote()
    }
})

document.addEventListener("DOMContentLoaded", () => {
    alert( `The content of the DOM is loaded`)
    quote()
   });

