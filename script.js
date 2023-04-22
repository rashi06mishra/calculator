let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let ops = ['+','-','*','%', '/'];
let result = "";
let btns = Array.from(buttons);
btns.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            result = eval(result);
            input.value = result;
            if(result == 0){
                result = "";
                // console.log("aaya to hai ");
            }
        }
        else if(e.target.innerHTML == 'AC'){
            result = "";
            input.value = result;
        }
        else if(e.target.innerHTML == 'DEL'){
            result = result.substring(0,result.length -1);
            input.value = result;
        }
        else if(ops.includes(e.target.innerHTML)){
            if(ops.includes(result[result.length - 1])){

            }
            else if(result.length == 0){

            }
            else{
                result +=e.target.innerHTML;
                input.value = result;
            }
        }
        else{
            result +=e.target.innerHTML;
            input.value = result;
        }
        
    })
})