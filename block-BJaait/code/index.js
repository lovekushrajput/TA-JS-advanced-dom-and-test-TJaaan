let input = document.querySelector('input')
let span = document.querySelector('span')
let section  = document.querySelector('section')



span.addEventListener("click",handleClick)

function handleClick (event){
    if(event.target.previousElementSibling.value===''){
        alert('Please Add something')
    }else{
        let div = document.createElement("div")
        div.classList = 'box'
        div.draggable = 'true'
        let h2 = document.createElement('h2')
        h2.innerText = input.value
        let  p = document.createElement('p')
        div.append(h2)
        section.append(div)
        input.value=''

            div.addEventListener('dragstart', handleDragStart);
            div.addEventListener('dragend', handleDragEnd);
            div.addEventListener('dragenter', handleDragEnter);
            div.addEventListener('dragleave', handleDragLeave);
            div.addEventListener('dragend', handleDragEnd);
            div.addEventListener('drop',handleDrop);
            div.addEventListener('dragover', handleDragOver);

            function handleDragStart(e) {
                this.style.opacity = '40%';
console.log(e.target)

                dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
              }
            
              function handleDragEnd(e) {
                this.style.opacity = '100%';
              }
            
              
              function handleDragOver(e) {
                if (e.preventDefault) {
                  e.preventDefault();
                }
            
                return false;
              }
            
              function handleDragEnter(e) {
                this.classList.add('over');
              }
            
              function handleDragLeave(e) {
                this.classList.remove('over');
              }

              function handleDrop (e){
                  e.stopPropagation()
                  if (dragSrcEl !== this) {
                    dragSrcEl.innerHTML = this.innerHTML;
                    this.innerHTML = e.dataTransfer.getData('text/html');
                    // let para = document.querySelector('p')
                    // para.innerText = 'Drag me'

                   
                  }
                
                //   return false;
              }
    }
}