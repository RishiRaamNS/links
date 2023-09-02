

const element = document.getElementById("brvideo")
const element2 = document.getElementById("brimg")
element2.addEventListener('mouseover', e=> {
   element.classList.remove("disable")
})

element2.addEventListener('mouseout', e=>{
    element.classList.add("disable")
})

const element3 = document.getElementById("gotvideo")
const element4 = document.getElementById("gotimg")
element4.addEventListener('mouseover', e=> {
   element3.classList.remove("disable")
})

element4.addEventListener('mouseout', e=>{
    element3.classList.add("disable")
})

const element5 = document.getElementById("wdvideo")
const element6 = document.getElementById("wdimg")
element6.addEventListener('mouseover', e=> {
   element5.classList.remove("disable")
})

element6.addEventListener('mouseout', e=>{
    element5.classList.add("disable")
})

const element7 = document.getElementById("mhvideo")
const element8 = document.getElementById("mhimg")
element8.addEventListener('mouseover', e=> {
   element7.classList.remove("disable")
})

element8.addEventListener('mouseout', e=>{
    element7.classList.add("disable")
})
