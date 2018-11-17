document.getElementById("input_button").addEventListener("click", function(){
    var equation = document.getElementById("function_textfield").value;
    var xInit = Number(document.getElementById("xInit_textfield").value);
    var yInit = Number(document.getElementById("yInit_textfield").value);
    var xFin = Number(document.getElementById("xFin_textfield").value);
    var stepNum = Number(document.getElementById("stepNum_textfield").value);
    var stepSize = (xFin-xInit)/stepNum;
    
    var answer = euler(xInit, yInit, xFin, stepNum, stepSize, equation);
    document.getElementById("output_text").innerHTML = answer;
    
    console.log("button was pressed");
    console.log(xInit);
});

function euler(x, y, xFin, stepNum, stepSize, equation){
    for(var i = 0; i < stepNum; i++){
        var slope = eval(equation);
        y += stepSize*slope;
        x += stepSize;
        console.log("x: " + x + ", y: " + y);
    }
    return y;
}