const settingButton = document.querySelector('.setting button');

const menu =

document.querySelector('.menu');

const inputWidth = menu.querySelector('#inputWidth')

const inputHeight = menu.querySelector('#inputHeight')

const inputDuration = menu.querySelector('#inputDuration')

let showMenu = false

let duration = 1000

let width = 45

let height = 45

settingButton.addEventListener('click',function(e){

 

 

 

 if (!showMenu) {

  

  showMenu = true 

   e.target.textContent = 'close'

   menu.classList.add('active')

 } else {

   showMenu = false 

   e.target.textContent = 'tune'

   menu.classList.remove('active')

 }

 

 

 

})

inputWidth.addEventListener('input',function(e){

 

 

 width = e.target.value 

  const showWidth = document.querySelector('.showWidth');

  

  showWidth.innerHTML = `Bubble Width : ${width} px`

  

 

})

inputHeight.addEventListener('input',function(e){

 

 

 height = e.target.value 

 

 const showHeight = document.querySelector('.showHeight');

  

  showHeight.innerHTML = `Bubble height : ${height} px`

})

inputDuration.addEventListener('input', function(e){

 

 duration = e.target.value

 

 const showDuration = document.querySelector('.showDuration');

 

 showDuration.innerHTML = ` Bubble duration ${duration} s`

 

})

// ***** Todo add click event for computer 

 window.addEventListener('touchstart',function(e){

  

  

  const x = event.touches[0].clientX 

  const y = event.touches[0].clientY

  createBubbles(x, y);

  

  

 })

// ***** move all the bubbles together 

 // window.addEventListener('touchmove',function(e){

  

  

 //  const x = event.touches[0].clientX 

 //  const y = event.touches[0].clientY

 //  moveBubbles(x, y);

  

  

 // })

function createBubbles(x, y){

 

 const rotation = 

 Math.floor(Math.random() * 360)

 

 

 const bubble =

 document.createElement('div');

 

 bubble.classList.add('bubble');

 

 bubble.style.width = width + 'px'

 bubble.style.height = height + 'px'

 bubble.style.left = x + 'px'

 bubble.style.top = y + 'px'

 

 bubble.style.transform = `rotate(${rotation}deg)`

 

 

 

 

 document.body.appendChild(bubble)

 

 setTimeout(()=>{

  document.body.removeChild(bubble)

 },duration);

 

 

}

// ***** function to move all the bubbles together  ***** remove the comment to see the effect, only work on touch screen *****

// function moveBubbles(x, y){

 

 

//  const allBubbles = document.querySelectorAll('.bubble');

 

 

//  allBubbles.forEach((bubble)=>{

  

//   bubble.style.left = x + 'px'

  

//   bubble.style.top = y + 'px'

  

//  })

 

 

 

 

// }

 

 

 

 
