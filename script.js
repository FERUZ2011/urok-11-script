const cursor = document.querySelector('.cursor')
const links = document.querySelectorAll('a')

links.forEach((item) => {
   const handlerEnter = () => {
      cursor.classList.add('cursor--hover')
   }

   const handlerLeave = () => {
      cursor.classList.remove('cursor--hover')
   }

   item.addEventListener("mouseenter", handlerEnter)
   item.addEventListener("mouseleave", handlerLeave)
});

const handler = (event) => {
   cursor.style.top = event.clientY + "px"
   cursor.style.left = event.clientX + "px"
}

window.addEventListener('mousemove', handler)

const imgs = document.querySelectorAll('.wrapper img')

const move = (event) => {
   imgs.forEach((item)=> {
      const x = (event.clientX - window.innerWidth / 2) * item.getAttribute('speed')
      const y = (event.clientY - window.innerHeight / 2) * item.getAttribute('speed')
      item.style.transform = `translate(${x}px, ${y}px)`
   })
}

window.addEventListener("mousemove", move)







































// const block = document.querySelectorAll(".block")
// function handleScroll() {
//    block.forEach((item)=>{
//     const speed = item.getAttribute("speed")
//     item.style.transform = `translateY(${window.scrollY * speed}px)`
//    })
// }


// window.addEventListener("scroll", handleScroll)