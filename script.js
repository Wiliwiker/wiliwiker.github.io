
function generate()
{
    let numberChars = "0123456789";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
    let charSet = "";
    let Final = "";
    let length_var = index + 1;

    if (window.document.getElementById("number").checked)
    {
        charSet += numberChars;
    }

    if (window.document.getElementById("lower").checked)
    {
        charSet += lowerChars;
    }
    
    if (window.document.getElementById("upper").checked)
    {
        charSet += upperChars;
    }

    if (window.document.getElementById("other").checked)
    {
        charSet += otherChars;
    }

    for (let i = 0; i < length_var; ++i)
    {
        Final += charSet.charAt(getRandomInt(0, charSet.length));
    }

    window.document.getElementById("Generator_champ").value = Final;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}





var numbers = document.getElementById('box');
for (i=1;i<16;i++)
{
    var span = document.createElement('span');
    span.textContent = i;
    numbers.appendChild(span);
}

var num = numbers.getElementsByTagName('span');
var index = 7;

function nextNum()
{
    num[index].style.display = 'none';
    index = (index + 1) %  num.length;
    num[index].style.display = 'initial';
}

function prevNum()
{
    num[index].style.display = 'none';
    index = (index - 1 + num.length) %  num.length;
    num[index].style.display = 'initial';
}