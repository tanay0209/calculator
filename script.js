let string = ""
let buttons = document.querySelectorAll('.btn')
let errorElement = document.getElementById('errorMessage')


Array.from(buttons).forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        
        try{
            if(e.target.innerHTML == '=')
            {
                string = eval(string)
                document.querySelector('.display').value = string
            }
            else if(e.target.innerHTML == 'C'){
                string = ""
                document.querySelector('.display').value = string
    
            }
            else if(e.target.innerHTML == 'AC')
            {
               
                string = string.slice(0,-1)
                document.querySelector('.display').value = string
            }
            else if(e.target.innerHTML == '^')
            {
                string = string + '**'
                document.querySelector('.display').value = string
                
                
            }
            else{
                string = string + e.target.innerHTML
                document.querySelector('.display').value = string
            }
        }
        catch(error)
        {   
            if(error instanceof TypeError)
            {
                document.querySelector('.display').value = 'Please use Clear'
            }
            else {
                document.querySelector('.display').value = 'Invalid Expression'
            }
                console.log(error)
                
           

        }
      
       

    })
})