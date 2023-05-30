let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const weight = parseInt(document.getElementById('weight').value);
    var oper = document.getElementById('Minerals').value;
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(height_status ){
        if(oper === 'Gold')
        {
            const bmi = (weight*3).toFixed(2);
            result.innerHTML =  'You will get '+ bmi + 'GSP Coins from '+ weight+'kgs of Gold';
        }
                
        if(oper === 'Silver')
        {
            const bmi = (weight*1.5).toFixed(2);
            result.innerHTML = 'You will get '+ bmi + 'GSP Coins from '+ weight+'kgs of Silver';
        }
                
        if(oper === 'Platinum')
        {
            const bmi = (weight*2).toFixed(2);
            result.innerHTML =  'You will get '+ bmi + 'GSP Coins from '+ weight+'kgs of Platinum';
            
        }

    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});