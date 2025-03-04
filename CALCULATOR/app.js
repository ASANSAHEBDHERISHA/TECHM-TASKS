let inp1 = document.getElementById("in1");
 let inp2 = document.getElementById("in2");
 let final = document.getElementById("res");

 function add() {
     let inpu1 = parseInt(inp1.value);
     let inpu2 = parseInt(inp2.value);
     displayResult(inpu1 + inpu2);
 }

 function sub() {
     let inpu1 = parseInt(inp1.value) || 0;
     let inpu2 = parseInt(inp2.value) || 0;
     displayResult(inpu1 - inpu2);
 }

 function mul() {
     let inpu1 = parseInt(inp1.value) || 0;
     let inpu2 = parseInt(inp2.value) || 0;
     displayResult(inpu1 * inpu2);
 }

 function div() {
     let inpu1 = parseInt(inp1.value) || 0;
     let inpu2 = parseInt(inp2.value) || 0;
     let result = inpu2 === 0 ? "Cannot divide by zero" : inpu1 / inpu2;
     displayResult(result);
 }

 function displayResult(r) {
     final.innerHTML = ""; // Clear previous result
     let g = document.createElement("h2");
     g.textContent = "Result: " + r;
     final.appendChild(g);
     console.log(r);
 }