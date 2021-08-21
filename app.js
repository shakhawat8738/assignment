function totaling(){
    let var1 = document.getElementById("memory_cost").innerText;
    let var2 = document.getElementById("storage_cost").innerText;
    let var3 = document.getElementById("delivery_cost").innerText;
    total = 1299 + parseInt(var1) + parseInt(var2) + parseInt(var3);
    document.getElementById("cost").innerText = total;
    document.getElementById("footer_final").innerText = total;
}
// function ended

// again function start

function memoryFubction(value){
    if(value == 1){
        document.getElementById("memory_cost").innerText = 0;
        totaling();
    } else if(value == 2){
        document.getElementById("memory_cost").innerText = 180;
        totaling();
    } else {
        alert("Something Went Wrong")
    }
}
// function starts
function storageFubction(value){
    if(value == 1){
        document.getElementById("storage_cost").innerText = 0;
        totaling();
    } else if(value == 2){
        document.getElementById("storage_cost").innerText = 100;
        totaling();
    } else if(value == 3){
        document.getElementById("storage_cost").innerText = 180;
        totaling();
    } else {
        alert("Something Went Wrong")
    }
}
// function starts
function deliveryFubction(value){
    if(value == 1){
        document.getElementById("delivery_cost").innerText = 0;
        totaling();
    } else if(value == 2){
        document.getElementById("delivery_cost").innerText = 20;
        totaling();
    } else {
        alert("Something Went Wrong")
    }
}
// function of steevtakla
function steevtakla(){
    let promo = document.getElementById("input").value;
    if(promo == 'stevekaku'){
        let discount = document.getElementById("cost").innerText;
        let final = (20/100)*discount;
        discount = discount - final;
        document.getElementById("footer_final").innerText = discount;
    }
    document.getElementById("input").value = '';
}
// ended function
