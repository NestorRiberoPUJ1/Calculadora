var result=0;
var num1=0;
var operator="";

function press(symbol)
{
    var display = document.querySelector("#display");
    if (display.innerText=="0")
    {
        display.innerText=symbol;
    }
    else
    {
        display.innerText = display.innerText+symbol;
    }
}

function setOP(symbol)
{
    var display = document.querySelector("#display");
    operator=symbol;
    num1=parseFloat(display.innerText);
    display.innerText="0";
    
}

function calculate()
{
    var display = document.querySelector("#display");
    if(operator=="+")
    {
        display.innerText=num1+parseFloat(display.innerText);
    }
    else if(operator=="-")
    {
        display.innerText=num1-parseFloat(display.innerText);
    }
    else if(operator=="*")
    {
        display.innerText=num1*parseFloat(display.innerText);
    }
    else if(operator=="/")
    {
        display.innerText=num1/parseFloat(display.innerText);
    }
}

function clr()
{
    display.innerText="0";
    num1=0;
}