function calc(){
let a=parseFloat(document.getElementById('a').value)||0;
let b=parseFloat(document.getElementById('b').value)||0;
let c=parseFloat(document.getElementById('c').value)||0;

// generic psychology score
let score = (a * 0.4 + b * 0.3 + c * 0.3);

let level = score < 30 ? "Low cognitive load ✅" :
            score < 70 ? "Moderate load ⚖️" :
            "High cognitive load ⚠️";

let insights = "";
if(a > 7) insights += "Too many options (Hick's Law). Reduce choices.<br>";
if(b > 50) insights += "Interaction cost too high (Fitts' Law). Improve accessibility.<br>";
if(c > 60) insights += "High complexity. Simplify UI and hierarchy.<br>";

document.getElementById('result').innerHTML =
"UX Psychology Score: " + score.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
