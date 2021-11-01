function changeColor()
{
    // alert("Change Color Function...")
    let tcolor = document.querySelector('#textColor').value
    let bcolor = document.querySelector('#tbackColor').value
    let bbcolor = document.querySelector('#backgColor').value
    // alert(tcolor)
    // alert(bcolor)
    document.querySelector('h2').style.color = tcolor
    document.querySelector('h2').style.backgroundColor = bcolor
    document.querySelector('body').style.backgroundColor = bbcolor
}
