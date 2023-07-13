function display(val){
    document.getElementById('result').value += val
    return val
}

function clearScreen(){
    let clear = document.getElementById('result').value = ' '
    return clear
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x)
    let solved = document.getElementById('result').value = y
    return solved
}


function insertText(){
    let paragraph = document.getElementById('para')
    paragraph.textContent = 'Welcome to my website'
}
insertText()


function changeBGColor(){
    let color = document.getElementById('para')
    color.textContent = `<style></style>`
}