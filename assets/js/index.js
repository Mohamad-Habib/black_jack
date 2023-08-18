// fe 3ena 7seb=200$ w byn2as
// 3ena array cards mnl 1 lal 13 
// bdna na2e random 3adaden w njma3n
// if t7t l 21 mn2dar ns7ab card aw reset1
// if fo2 l21 you loser
// if 21 rab7an

// const wara2 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13]
// click = 0
// amount = 200
// let choose1
// let choose2
// let choose

// startBtn.addEventListener("click",function(){
//      choose1 = Math.floor(Math.random(wara2)*13)
//      choose2 = Math.floor(Math.random(wara2)*13)
    
// sum = choose1 + choose2    
//     click++
//     if (click<2){ 
       
//         cardsEl.innerHTML += ` ${choose1}  ${choose2}`
//         sumEl.innerHTML += ` ${sum}`
//         playerEl.innerHTML += `${amount}`
//         if(sum == 21){
//                messageEl.innerHTML = `you are the black jack`
        
//         }else if(sum>21) {
//                messageEl.innerHTML = `you loose`
        
//         }else {
//                messageEl.innerHTML = `do you want another card`
//                newBtn.addEventListener("click", function newCard(){
//                 choose = Math.floor(Math.random(wara2)*13)
//                 sum += choose
//                 amount = amount-50
//                 cardsEl.innerHTML += ` ${choose}`
//                 sumEl.innerHTML = `Sum: ${sum}`
//                 playerEl.innerHTML = `HABIB: ${amount} $`
//                 if(sum>21){
//                     messageEl.innerHTML = `you loose`
//                     newBtn.removeEventListener("click",newCard)
//                  }
//                 if(sum == 21){
//                           messageEl.innerHTML = `you are the black jack`
//                           newBtn.removeEventListener("click",newCard)
//                      }
//                      else if(sum<21) {
//                          messageEl.innerHTML = `do you want another card`        
//                      }
//         })   
//         }
//     }
//     else {    
//     }   
// })
    
// reset.addEventListener("click", function(){
//     window.location.replace("index.html")
// })


let player = { //shorthand
    name:"Habib",
    chips:200
}
let isAlive = false
let sum = 0
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")
messageEl.innerHTML = "Want to play a round?"
cardsEl.innerHTML = "Cards: "
sumEl.innerHTML = "Sum: "
playerEl.innerHTML = `${player.name}: $${player.chips}`
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13)+1
    return randomNumber
}
function startGame() {
    if(isAlive == false){
        isAlive = true
        player.chips -= 50
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cardsEl.innerHTML = `Cards: ${firstCard} ${secondCard}`
        sumEl.innerHTML = `Sum: ${sum}`
        playerEl.innerHTML = `${player.name}: $${player.chips}`
        renderGame()
    }else{
        alert('You already have started the game')
    }
}
function newCard() {
    if(isAlive == true && player.chips >= 50 && sum < 21){
        player.chips -= 50
        let card = getRandomCard()
        cardsEl.innerHTML += ` ${card}`
        sum += card
        sumEl.innerHTML = `Sum: ${sum}`
        playerEl.innerHTML = `${player.name}: $ ${player.chips}`
        renderGame()
    }
}
function renderGame() {
    if(sum < 21){
        messageEl.innerHTML = "do you want a new card ?"
    }else if(sum == 21){
        messageEl.innerHTML = 'congrats you win!'
    }else if(player.chips == 0) {
        messageEl.innerHTML = "you are out of money, try again"
    }else{
        messageEl.innerHTML ='sorry, you lose, try again'
    }
}
function reset() {
    if(sum >= 21 || player.chips == 0){
        location.reload()
    }
}


