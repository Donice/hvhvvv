(function() {
    let form = document.querySelector('#form')

    form.addEventListener('submit', function(disruptor){
        
        disruptor.preventDefault()

        const feedback = document.querySelector('#feedback')
        const input = document.querySelector('#input');
        let message = document.querySelector('.message')

        if (message.value === "") {
            feedback.classList.add('disclaimer')
            setTimeout(function(){
                feedback.classList.remove('disclaimer')
            }, 3000)
        } else {
            message.textContent = input.value
            input.value = ""
        }
        
    })
}) ()