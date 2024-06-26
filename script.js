const listContainer = document.getElementById("list-container");
const print= document.getElementById('print');
let sub=1;
function add() {
    let li = document.createElement("li");
    li.innerHTML = ` <h5>Enter the Credit Points of subject ${sub}:</h5>
                        <input type="number" class="credit-pts" placeholder="Credit points">
                        <h5>Enter the Grade Points of subject :${sub}</h5>
                        <input type="number" class="grade-pts" placeholder="Grade points">`;
    listContainer.appendChild(li);
    sub=sub+1;

}

function calculateCgpa()
{
    let creditPoint=document.querySelectorAll('.credit-pts');
    let gradePoint=document.querySelectorAll('.grade-pts');
    let totalCredit=0;
    let weightedGrades=0;
   

    for(let i=0;i<creditPoint.length;i++)
        {
            let creditPts=parseFloat(creditPoint[i].value) || 0;
            let gradePts=parseFloat(gradePoint[i].value) || 0;
            totalCredit=totalCredit+creditPts;
            weightedGrades=weightedGrades+ (creditPts*gradePts);
          
        }
        let cgpa=(weightedGrades/totalCredit).toFixed(2);
        let result=document.getElementById("cgpa");
        result.innerText=cgpa;
    
}

document.addEventListener("keydown", (event)=>{
if(event.key=='Enter')
    {
        calculateCgpa();
    }
});

print.addEventListener('click',function(){
    console.log("print");
  window.print();
});

