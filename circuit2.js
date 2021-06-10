const first = document.querySelector("#R1");
const man = document.querySelector("#man");
const third = document.querySelector("#R3");
const fourth = document.querySelector("#R4");
const ee = document.querySelector("#torith");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const percent = document.querySelector("#percent");

btn.addEventListener("click", function(){
    var first1 = parseFloat(first.value);
    // var second1= parseFloat(second.value);
    var third1 = parseFloat(third.value);
    var fourth1 = parseFloat(fourth.value);
    var ee1 = parseFloat(ee.value);
    var percent1 = parseFloat(percent.value);
    console.log(percent1)
    //clear input
    first.value = ""
    // second.value = ""
    third.value = ""
    fourth.value = ""
    ee.value = ""
   percent.value = ""
    let math1 = (third1+fourth1)
    let math2 = ((ee1*math1)*(100/percent1) - (ee1*first1) - (ee1 * math1)) / ee1
    console.log(math2)
    man.innerHTML=math2 + " ohm"

    
})