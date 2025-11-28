//your JS code here. If required.
let inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, idx)=>{

    input.addEventListener("input",(e)=>{
        const value = e.target.value;

        if(!/^[0-9]$/.test(value)){
            e.target.value=""
            return
        }
        if(value && idx < inputs.length-1){
            inputs[idx+1].focus();
        }
    })

    input.addEventListener("keydown",(e)=>{
        if(e.key ==="Backspace"){
            if(input.value === ""){
              if(idx>0){
                inputs[idx-1].focus();
                inputs[idx-1].value=""
              }
            }
            else{
                input.value=""
            }
            
        }
    })
})