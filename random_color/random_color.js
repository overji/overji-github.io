let number_of_colors_input = document.getElementById("number_of_colors");
let select_color_prefer = document.getElementById("select_color_prefer");

function to_hex(num)
{
    num = Math.floor(num);
    if(num < 16)
    {
        return("0"+num.toString(16));
    }
    else
    {
        return(num.toString(16));
    }
}

function choose_prefer(arr,prefer)
{
   let start = [0,0,0];
   let pluser = 200;
   let minor = 0;
   let p_upper = 255;
   let p_lower = 125;
   let m_upper = 50;
   let m_lower = 0;
    if(prefer === "red")
    {
        start = [pluser,minor,minor];
    }
    else if(prefer === "blue")
    {
        start = [minor,minor,pluser];
    }
    else if(prefer === "green")
    {
        start = [minor,pluser,minor];
    }
    else if(prefer === "clay")
    {
        start = [minor,pluser,pluser];
    }
    else if(prefer === "purple")
    {
        start = [pluser,minor,pluser];
    }
    else if(prefer === "yellow")
    {
        start = [pluser,pluser,minor];
    }
    else if(prefer === "none")
    {
        return;
    }
    for(let i = 0;i < 3;i ++)
    {
        if(start[i] === pluser)
        {
            arr[i] = (arr[i]/255)*(p_upper-p_lower) + p_lower;
        }
        else
        {
            arr[i] = (arr[i]/255)*(m_upper-m_lower)+m_lower;
        }
    }
}

function update_color()
{
    let number = number_of_colors_input.value;
    let main_content = document.querySelector(".main_Content");
    let prefer_color = select_color_prefer.value;

    main_content.innerHTML = "";
    for(let i = 0;i < number;i ++)
    {
        let color_block = document.createElement("div");
        let r_num = Math.floor(Math.random()*255);
        let g_num = Math.floor(Math.random()*255);
        let b_num = Math.floor(Math.random()*255);
        let arr = [r_num,g_num,b_num];
        choose_prefer(arr,prefer_color)
        let color_string = "#" + to_hex(arr[0])+to_hex(arr[1])+to_hex(arr[2]);
        color_block.style.backgroundColor = color_string;
        color_block.className = "parter";
        color_block.textContent = color_string;

        color_block.addEventListener('click',()=>{
            navigator.clipboard.writeText(color_string).then(
                ()=>{
                    color_block.textContent = "已复制!";
                    setTimeout(()=>
                    {
                        color_block.textContent = color_string;
                    },3000);
                },
                ()=> {}
            )
        })
        main_content.appendChild(color_block);
    }

}

window.onload = update_color;
number_of_colors_input.addEventListener("input",update_color);
select_color_prefer.addEventListener("input",update_color);