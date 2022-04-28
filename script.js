const textArea = document.querySelector("#textArea")
const textArea2 = document.querySelector("#textArea2")
const textArea3 = document.querySelector("#textArea3")
const encriptar = document.getElementById("encriptar")
const desencriptar = document.getElementById("desencriptar")
const message = document.querySelectorAll(".message")
const copiar = document.getElementById("copiar")

textArea.addEventListener("input",(ev)=> textAreaOnChange(ev))
encriptar.addEventListener("click",encriptarTexto)
desencriptar.addEventListener("click",desencriptarTexto)
copiar.addEventListener("click",copiarMessage)

function textAreaOnChange(ev){
    textArea2.value = ev.target.value
    textArea3.value = ev.target.value
}


const claves ={
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

function encriptarTexto(){
    const textArr = textArea.value.split("")
    const encriptedArr = textArr.map(item=>{
        switch(item){
            case "a":
                return claves.a
            case "e":
                return claves.e
            case "i":
                return claves.i
            case "o":
                return claves.o
            case "u":
                return claves.u
            default:
                return item
        }
    })
    message.forEach(item=>{
        item.innerText = encriptedArr.join("")
    })
}

function desencriptarTexto(){
    const desencriptedArr = textArea.value
        .replaceAll(claves.o,"o")
        .replaceAll(claves.a,"a")
        .replaceAll(claves.e,"e")
        .replaceAll(claves.i,"i")
        .replaceAll(claves.u,"u")
        message.forEach(item=>{
            item.innerText = desencriptedArr
        })
}

function copiarMessage(){
    
    navigator.clipboard.writeText(message[1].innerText)
    message.forEach(item=>{
        item.innerText = ""
    })
    textArea.value = "Copied_"
    textArea2.value = "Copied_"
    textArea3.value = "Copied_"
    setTimeout(()=>{
        textArea.value = ""
        textArea2.value = ""
        textArea3.value = ""
    },1000)
}


//animation time randomizer

const lines = document.querySelectorAll(".lines")

lines.forEach(item=>{
    item.style.setProperty("--animation-time", ((2+Math.random()*4))+"s")
})