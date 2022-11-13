//var dec & click add
document.querySelector('button').addEventListener('click', findDrink)
let drinkChoice =  document.querySelector('input').value
let sPrime = document.getElementById("slide0")

//fetch api data
function findDrink() {
    let drinkChoice = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkChoice}`)
    .then(res => res.json())
    .then(data => {
        const arrLeg = data.drinks.length
        // let runTime = data.drinks.length
        document.getElementById(`name0`).innerText = data.drinks[0].strDrink
        document.getElementById('thumb0').src = data.drinks[0].strDrinkThumb
        document.getElementById('desc0').innerText = data.drinks[0].strInstructions
        for(let i = 1; i < arrLeg; i++) {
            cloneSlide(i)
            document.getElementById(`name${i}`).innerText = data.drinks[i].strDrink
            document.getElementById(`thumb${i}`).src = data.drinks[i].strDrinkThumb
            document.getElementById(`desc${i}`).innerText = data.drinks[i].strInstructions
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
//clone elements w reference for loop
function cloneSlide(i) {
    let sClone = sPrime.cloneNode()
    sClone.id =`slide${i}`
    sClone.classList.add('slide')
    let sCloneHead = document.createElement('h2')
    let sCloneImg = document.createElement('img')
    let sCloneH3 = document.createElement('h3')
    sCloneHead.id = `name${i}`
    sCloneImg.id = `thumb${i}`
    sCloneH3.id = `desc${i}`
    sPrime.after(sClone)
    sClone.appendChild(sCloneHead)
    sClone.appendChild(sCloneImg)
    sClone.appendChild(sCloneH3)
}