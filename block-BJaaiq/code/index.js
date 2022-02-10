document.addEventListener("DOMContentLoaded", (event) => {
   alert( `The content of the DOM is loaded`)
  });

let ul = document.querySelector('ul')
quotes.forEach((elm) => {
    let li = document.createElement('li')
    let  p =  document.createElement('p')
    li.innerText = elm.quoteText
    p.innerText = elm.quoteAuthor
    ul.append(li,p)
});