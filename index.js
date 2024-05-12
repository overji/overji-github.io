
function insert0(string)
{
    if(string < 10)
    {
        string = '0'+string;
    }
    return string;
}
function upDateTime()
{
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    hours = insert0(hours);
    minutes = insert0(minutes);
    seconds = insert0(seconds);
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

function updateStyle()
{
    let timeNow = new Date();
    let hours = timeNow.getHours();
    if( hours < 10 && hours > 6)
    {
        document.querySelector('div.timeNow').style.backgroundImage = 'url("pics/beach-1852945_1280.jpg")';
        document.querySelector('div.timeNow').style.color = 'black';
    }
    else if(hours >= 10 && hours < 16)
    {
        document.querySelector('div.timeNow').style.backgroundImage = 'url("pics/mid_morning.jpeg")';
        document.querySelector('div.timeNow').style.color = 'white';
    }
    else if(hours >= 16 && hours <= 18)
    {
        document.querySelector('div.timeNow').style.backgroundImage = 'url("pics/sky-3846778_1280.jpg")';
        document.querySelector('div.timeNow').style.color = 'white';
    }
    else
    {
        document.querySelector('div.timeNow').style.backgroundImage = 'url("https://gips3.baidu.com/it/u=1743996582,3792202273&fm=3028&app=3028&f=PNG&fmt=auto&q=75&size=f1184_840")';
        document.querySelector('div.timeNow').style.color = 'white';
    }
}


window.onload = function()
{
    upDateTime();
    setInterval(upDateTime,999);
    setInterval(updateStyle,999);
}

window.onfocus = function()
{
    document.title = "你好，我是时间";
}

window.onblur = function()
{
    document.title = "看我来获取时间";
}