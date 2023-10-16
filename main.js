const champtexte = document.querySelector(".champsDeTexte")
const  ac = document.querySelector(".reset")
const  zero  = document.querySelector(".zero")
const  sept = document.querySelector(".sept")
const  huit = document.querySelector(".huit")
const neuf  = document.querySelector(".neuf")
const  quatre = document.querySelector(".quatre")
const  cinq = document.querySelector(".cinq")
const  six = document.querySelector(".six")
const  un = document.querySelector(".un")
const  deux = document.querySelector(".deux")
const  trois = document.querySelector(".trois")
const  division = document.querySelector(".diviser")
const  multip = document.querySelector(".fois")
const  moins = document.querySelector(".moins")
const  egal = document.querySelector(".egal")
const  plus = document.querySelector(".plus")
const  point = document.querySelector(".point")

let operation = champtexte.value

let nombre = '0123456789'.split('')
let operateur = '-+/x'.split('')
let ponctuation = '.'

function resultat(){
    console.log(operation)
    champtexte.value = eval(operation)
    operation = 0
}

function autorisation(valeur){
    if(nombre.includes(valeur)){
        return true
    }
    if (operateur.includes(valeur)){
        if(operateur.includes(operation[operation.length-1])){
            operation = operation.slice(0,operation.length-1)
            return true}
        else {console.log(operation, "l'operateur est bon" )
            return true }
    }
    if (ponctuation.includes(valeur) && nombre.includes(operateur.includes(operation[operation.length-1]))){
        return true
    }

}


function boutonNum(valeur){
    if (autorisation(valeur)){
        if (operation == 0){
            operation = valeur
        }
        else {
            if (valeur == 'x') {
                operation += '*'
            } else {
                operation += valeur
            }

        }
        champtexte.value = operation

}}
function reset(){
    operation = '0'
    champtexte.value= operation}

un.addEventListener('click',()=>{boutonNum('1')})
deux.addEventListener('click',()=>{boutonNum('2')})
trois.addEventListener('click',()=>{boutonNum('3')})
quatre.addEventListener('click',()=>{boutonNum('4')})
cinq.addEventListener('click',()=>{boutonNum('5')})
six.addEventListener('click',()=>{boutonNum('6')})
sept.addEventListener('click',()=>{boutonNum('7')})
huit.addEventListener('click',()=>{boutonNum('8')})
neuf.addEventListener('click',()=>{boutonNum('9')})
zero.addEventListener('click',()=>{boutonNum('0')})

ac.addEventListener('click', reset )
division.addEventListener('click',()=>{boutonNum('/')})
multip.addEventListener('click',()=>{boutonNum('x')})
moins.addEventListener('click',()=>{boutonNum('-')})
egal.addEventListener('click',resultat)
plus.addEventListener('click',()=>{boutonNum('+')})






const codeHexadecimal = "0123456789ABCDEF".split('')
function random(){

}

let rond = document.querySelector(".rondCouleur")

let btn_couleur = document.querySelector(".changerColeur")

function changer_couleur(){
    let couleur = ''
    for (let k = 0 ; k<6; ++k){couleur += codeHexadecimal[Math.floor(Math.random()*codeHexadecimal.length)]}
    rond.style.backgroundColor="#"+couleur
    ac.style.backgroundColor="#"+couleur
}

setInterval(changer_couleur,1500)
btn_couleur.addEventListener('click', ()=>{changer_couleur()})
