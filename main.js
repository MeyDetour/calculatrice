let champtexte = document.querySelector(".champsDeTexte")
let  ac = document.querySelector(".reset")
let  zero  = document.querySelector(".zero")
let  sept = document.querySelector(".sept")
let  huit = document.querySelector(".huit")
let neuf  = document.querySelector(".neuf")
let  quatre = document.querySelector(".quatre")
let  cinq = document.querySelector(".cinq")
let  six = document.querySelector(".six")
let  un = document.querySelector(".un")
let  deux = document.querySelector(".deux")
let  trois = document.querySelector(".trois")
let  division = document.querySelector(".diviser")
let  multip = document.querySelector(".fois")
let  moins = document.querySelector(".moins")
let  egal = document.querySelector(".egal")
let  plus = document.querySelector(".plus")


function resultat(){

}

un.addEventListener('click',()=>{champtexte.value +=  '1'})
deux.addEventListener('click',()=>{champtexte.value +=  '2'})
trois.addEventListener('click',()=>{champtexte.value +=  '3'})
quatre.addEventListener('click',()=>{champtexte.value +=  '4'})
cinq.addEventListener('click',()=>{champtexte.value +=  '5'})
six.addEventListener('click',()=>{champtexte.value +=  '6'})
sept.addEventListener('click',()=>{champtexte.value +=  '7'})
huit.addEventListener('click',()=>{champtexte.value +=  '8'})
neuf.addEventListener('click',()=>{champtexte.value +=  '9'})
zero.addEventListener('click',()=>{champtexte.value +=  '0'})

ac.addEventListener('click',()=>{champtexte.value =  ''})
division.addEventListener('click',()=>{champtexte.value +=  ' / '})
multip.addEventListener('click',()=>{champtexte.value +=  ' x '})
moins.addEventListener('click',()=>{champtexte.value +=  ' - '})
egal.addEventListener('click',resultat)
plus.addEventListener('click',()=>{champtexte.value +=  ' + '})






const codeHexadecimal = "0123456789ABCDEF".split('');
function random(){
    let nb_random = ''
    for (let k = 0 ; k<6; ++k){nb_random += codeHexadecimal[Math.floor(Math.random()*  codeHexadecimal.length)]  }
    return nb_random
}

let rond = document.querySelector(".rondCouleur")
let btn_couleur = document.querySelector(".changerColeur")

function changer_couleur(){
    const couleur = random()
    rond.style.backgroundColor="#"+couleur
}

btn_couleur.addEventListener('click', changer_couleur)

