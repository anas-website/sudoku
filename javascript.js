
var LEVEL=0;

let params = new URL(window.location.href).searchParams;
// 

let parm= params.get('ab')
console.log(params)
LEVEL=parm


//################################
 let random3 = Math.floor(Math.random()*(3))
let indexInMat=[0,2,4]
let chooseMat =indexInMat[random3]
console.log(chooseMat)
//#################
var allMat=[[
[ 8,9,5,7,4,2,1,3,6 ],//mat1[0]
[ 2,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]],

[[ 8,9,5,7,4,2,1,3,6 ], //mat1[1]
[ 2,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]],

[[2,4,1,3,5,6,7,8,9], //mat2[2]
[3,5,7,1,8,9,2,4,6],
[6,8,9,4,7,2,1,3,5],
[1,2,3,5,6,8,9,7,4],
[5,7,8,9,1,4,6,2,3],
[9,6,4,7,2,3,5,1,8],
[8,9,2,6,3,1,4,5,7],
[4,1,5,8,9,7,3,6,2],
[7,3,6,2,4,5,8,9,1]],

[[2,4,1,3,5,6,7,8,9],//mat2[3]
 [3,5,7,1,8,9,2,4,6],
 [6,8,9,4,7,2,1,3,5],
 [1,2,3,5,6,8,9,7,4],
 [5,7,8,9,1,4,6,2,3],
 [9,6,4,7,2,3,5,1,8],
 [8,9,2,6,3,1,4,5,7],
 [4,1,5,8,9,7,3,6,2],
 [7,3,6,2,4,5,8,9,1]],

 [[2,9,1,3,4,5,7,6,8],//mat3[4]
  [3,4,5,6,8,7,1,2,9],
  [6,7,8,1,2,9,3,4,5],
  [1,2,4,7,9,3,5,8,6],
  [5,3,6,2,1,8,4,9,7],
  [7,8,9,5,6,4,2,3,1],
  [4,1,3,8,7,6,9,5,2],
  [9,6,7,4,5,2,8,1,3],
  [8,5,2,9,3,1,6,7,4]],

[[2,9,1,3,4,5,7,6,8],//mat3[5]
[3,4,5,6,8,7,1,2,9],
[6,7,8,1,2,9,3,4,5],
[1,2,4,7,9,3,5,8,6],
[5,3,6,2,1,8,4,9,7],
[7,8,9,5,6,4,2,3,1],
[4,1,3,8,7,6,9,5,2],
[9,6,7,4,5,2,8,1,3],
[8,5,2,9,3,1,6,7,4]
]]
/////////////////////////////////////////////////////////////
 


function checkInput(input) {
   



    if (input.value < '1' || input.value > '9')
     {

            input.value = '';
            alert("only numbers [1-9] are allowed!!");
            input.focus()
        
    }
}
 
writSudokuInHtml(randomMatrix(allMat[chooseMat]))  
function writSudokuInHtml(matForWrit){
let counter =0 
//YYYYYYYYYYYYYYYYY
for(let row1 = 0 ; row1 < matForWrit.length ; row1++){
        for(let col1 = 0 ; col1 < matForWrit[row1].length ; col1++){
             
           document.getElementById(counter).value= matForWrit[row1][col1]; 
           if(matForWrit[row1][col1]=='' ){document.getElementById(counter).disabled = false}
           counter++
        }
    }

//UUUUUUUUUUUUUUUUUUUU

}


 function check(){(ComparisionOfMatrix(allMat[chooseMat+1])) }

function ComparisionOfMatrix(matForComparision){

    let valed=true
    let counter=0
    for(let row = 0 ; row < matForComparision.length ; row++){
        for(let col = 0 ; col < matForComparision[row].length ; col++){
            let str;
            str =matForComparision[row][col] 
            
            let str2= str
          
            let doce=document.getElementById(counter).value
          if (doce==str2){
          
          if(document.getElementById(counter).disabled == false)  {document.getElementById(counter).style.backgroundColor='#2df006'}
          }
          else{document.getElementById(counter).style.backgroundColor='red'
       
     

          valed=false
       
        }
          counter++
        }
    }
if (valed)
{

  Swal.fire(
    'congratulations...',
    "you've won the game!!",
    'success')
}
else{

  document.getElementById('bb').disabled=true
document.getElementById('b2').disabled=true

setTimeout(() => {
  alert('you last the game :(')
  location.replace('level.html') 
 }, 500);



}

}



let num=4




//////////////////////////////////////////////////////////


function randomArr(matrixrow){

   let arrp=[]
 
while(arrp.length<LEVEL){
  

    let rnd = Math.floor(Math.random()*(9-0))
  

       
        let str = rnd.toString()
        
      
        if (arrp.indexOf(str)==-1) //ensure that the number is not repeted
        {
        arrp.push(str)} //create array with random values



    }
    
    // loob over tne array of random values

    for(i3=0; i3<LEVEL;i3++){
        matrixrow[arrp[i3]]=''  
    }
  return  matrixrow

}


//////////////////////////////////////////

function randomMatrix(amtrix){
// let sum = 0;
for(row3 = 0 ; row3 < amtrix.length ; row3++){
  
    randomArr(amtrix[row3]) 
    
}return amtrix}

let reload=()=>{location.reload()}



if (sessionStorage.getItem("refresh") == "true") { 
  sessionStorage.removeItem("refresh"); window.location.reload()
}