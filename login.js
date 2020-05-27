function login(){

let name=document.getElementById('text1').value
let pas=document.getElementById('pas').value
if(name=='abcd' && pas==1234){
   location.replace("level.html")
}

 if (!(name=='abcd')){
document.getElementById('noname').innerHTML='the name is incorrect !'}
if (!(pas==1234)){
document.getElementById('nopas').innerHTML='the password is incorrect !'}

   }
   function onchange1(){
      document.getElementById('nopas').innerHTML=''
      document.getElementById('noname').innerHTML=''
   }