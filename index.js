let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

//mapping to get value from each action
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1) //slice is a string method used to remove last element
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});