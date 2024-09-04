document.addEventListener("DOMContentLoaded",function(){
    let hob =0
    document.querySelector('button').onclick =function hobe(){
        hob++
        document.querySelector('#headHop').innerHTML =hob
        if(hob % 10 ===0){
            alert(`hob counter is ${hob}`);
        }
    }
})