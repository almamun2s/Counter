const count = document.getElementById('count');
let countValue = 0;

let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');


decrease.addEventListener( 'click', function(){
    // alert('clicked decrease');
    countValue--;
    changeValue();
})
reset.addEventListener( 'click', function(){
    // alert('clicked reset');
    countValue = 0;
    changeValue()
})
increase.addEventListener( 'click', function(){
    // alert('clicked increase');
    countValue++;
    changeValue();
})


function changeValue() {
    count.textContent = countValue;

    if(countValue > 0){
        count.style.color = 'green';
    }else if( countValue < 0){
        count.style.color = 'red';
    }else{
        count.style.color = 'black';
    }
    
}