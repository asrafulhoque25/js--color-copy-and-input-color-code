//global variable

let div = null;



window.onload=()=>{
    main()
}

function main(){
    const body = document.getElementById('allBody')
    const input = document.getElementById('input')
    const clickBtn = document.getElementById('clickBtn')
    const copyBtn = document.getElementById('copy')
    //change color button
    clickBtn.addEventListener("click",function(){
        const rgbaColor =RGBgenerate()
        body.style.backgroundColor=rgbaColor
        input.value=rgbaColor
    })
    //copy btn
    copyBtn.addEventListener("click",function(){
        navigator.clipboard.writeText(input.value);
        if(div !== null){
            div.remove()
            div=null
        }
       if(isvalidHax(input.value)){
        generateTostMsg(`${input.value} copied`)
       }else{
        alert("Invalid color code")
       }
    })

    input.addEventListener("keyup",function(e){
        const color= event.target.value;
        if(color && isvalidHax(color)){
            body.style.backgroundColor=color
        }
    })

}


function RGBgenerate(){
    //rgb(255,332,23)
    // #444444
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}


//tost message

function generateTostMsg(msg){
     div = document.createElement('div')
    div.innerText = msg
    div.className="tostMsg tostMsgIn"
    document.body.appendChild(div)

    div.addEventListener("click",function(){
        div.classList.remove('tostMsgIn')
        div.classList.add('tostMsgOut')

        div.addEventListener('animationend',function(){
            div.remove()
            div=null
        })
    })

}


function isvalidHax(color){
if(color.length !== 7) return false;
if(color[0] !== '#') return false;
color = color.substring(1)
return /^[0-9A-Fa-f]{6}$/i
}