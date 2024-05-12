
function generate_random_words(type,length)
{
    var result = "";
    var characters = "";
    switch (type)
    {
        case '1':
            characters='abcdefghijklmnopqrstuvwxyz';
            break;
        case '2':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case '3':
            characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case '4':
            characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            break;
        case '5':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            break;
        case '6':
            characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            break;
        case '7':
            characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
            break;
        case '8':
            characters = '0123456789!@#$%^&*()_+'; // 假设 '8' 对应数字+符号的字符集
            break;
        case '9':
            characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+'; // 假设 '9' 对应全英文小写字符+大写字符+符号的字符集
            break;
        case '10':
            characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'; // 假设 '10' 对应全英文小写字符+符号的字符集
            break;
        case '11':
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+'; // 假设 '11' 对应全英文大写字符+符号的字符集
            break;
        case '12':
            for(let i = 0;i < length;i ++)
            {
                result += String.fromCharCode(Math.floor(Math.random()*20902)+19968);
            }
            return result;
    }
    var charactersLength = characters.length;
    for(let i = 0;i < length;i ++)
    {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}
function click_to_words()
{
    var chooseType = document.getElementById("choose_type").value;
    var numberss = document.getElementById("numbers").value;
    var randomWords = generate_random_words(chooseType,numberss);
    document.getElementById("main_content").innerHTML = randomWords;
}

function copy_to_clipboard()
{
    var content = document.getElementById("main_content").innerText;
    navigator.clipboard.writeText(content).then(function(){
        console.log("Copied to clipboard successfully");
    },function(err){
        console.log("failed to copy to clipboard",err);
    })
}