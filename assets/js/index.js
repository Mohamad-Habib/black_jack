// fe 3ena 7seb=200$ w byn2as
// 3ena array cards mnl 1 lal 13 
// bdna na2e random 3adaden w njma3n
// if t7t l 21 mn2dar ns7ab card aw reset1
// if fo2 l21 you loser
// if 21 rab7an

const wara2 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13]
click = 0
amount = 200
let choose1
let choose2
let choose

startBtn.addEventListener("click",function(){
     choose1 = Math.floor(Math.random(wara2)*13)
     choose2 = Math.floor(Math.random(wara2)*13)
    
sum = choose1 + choose2    
    click++
    if (click<2){ 
       
        cardsEl.innerHTML += ` ${choose1}  ${choose2}`
        sumEl.innerHTML += ` ${sum}`
        playerEl.innerHTML += `${amount}`
        if(sum == 21){
               messageEl.innerHTML = `you are the black jack`
        
        }else if(sum>21) {
               messageEl.innerHTML = `you loose`
        
        }else {
               messageEl.innerHTML = `do you want another card`
             
        }

    }
    else {
       
    }
    
})

   newBtn.addEventListener("click", function newCard(){
         
         
        choose = Math.floor(Math.random(wara2)*13)
        sum = sum+choose
        amount = amount-50
        cardsEl.innerHTML += ` ${choose}`
        sumEl.innerHTML = `Sum: ${sum}`
        playerEl.innerHTML = `HABIB: ${amount} $`
        if(sum>21){
            messageEl.innerHTML = `you loose`
            newBtn.removeEventListener("click",newCard)
         }
        if(sum == 21){
                  messageEl.innerHTML = `you are the black jack`
                  newBtn.removeEventListener("click",newCard)
             }
             else if(sum<21) {
                 messageEl.innerHTML = `do you want another card`
                  newCard()
             }
    
        

})
reset.addEventListener("click", function(){
    window.location.replace("index.html")
})