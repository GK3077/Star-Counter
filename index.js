let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalStars = 0
function increment(){
    count += 1
    countEl.textContent = count
    totalStars += 1
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
    let totalStr = totalStars 
    saveEl.textContent += totalStr
}