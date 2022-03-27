function btnclick(val){
    document.getElementById("screen").value += val
}

function clearScr(){
    document.getElementById('screen').value=""
}

function del(){
    document.getElementById('screen').value=document.getElementById('screen').value.slice(0,-1)
}

function equal_to(){
    try {
        document.getElementById('screen').value=eval(document.getElementById('screen').value);
    } catch (err) {
        alert("invalid")
    }
}

function persent(){
    document.getElementById('screen').value=document.getElementById('screen').value / 100
}