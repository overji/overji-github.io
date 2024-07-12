

function textToASCII(text)
{
    let res = "";
    for(let i in text)
    {
        res += text.charCodeAt(i).toString() + " ";
    }
    return res;
}

function textToBase64(text)
{
    return btoa(text);
}

function toASCII()
{
    let text = document.getElementById("input_text").value;
    document.getElementById("output_text").value = textToASCII(text);
}

function toBase64()
{
    let text = document.getElementById("input_text").value;
    document.getElementById("output_text").value = textToBase64(text);
}

function fromASCII()
{
    let text = document.getElementById("input_text_dec").value;
    let res = "";
    let arr = text.split(" ");
    for(let i in arr)
    {
        res += String.fromCharCode(arr[i]);
    }
    document.getElementById("output_text_dec").value = res;
}

function fromBase64()
{
    let text = document.getElementById("input_text_dec").value;
    document.getElementById("output_text_dec").value = atob(text);
}