//get all code input box into a node list
const codes = document.querySelectorAll(".code");

//when starting page place cursor in first input box
codes[0].focus();

//loop through input boxes
codes.forEach((code,idx)=>{
    code.addEventListener("keydown",(e)=>{

        //set the value to an empty string in case user wants to alter it when hitting back space
        codes[idx].value ='';

        //check to see if value is between 0 and 9 if true go to the next input box
        if(e.key >=0 && e.key<=9){
            setTimeout(()=>codes[idx+1].focus(),5)
            
        }
        //check to see if user hit backspace to go to previous input box
        else if(e.key=== "Backspace")
        {
            setTimeout(()=>codes[idx-1].focus(),5)
        }
    })
})