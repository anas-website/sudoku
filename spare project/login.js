function login(){
//     if(document.getElementById('text1').value==123) { console.info('pass') 
//   location.replace("index.html");
// console.log('bbbb')}
//     else{ window.location.replace("login.html");}


// if((document.getElementById('text1').value==123) && (document.getElementById('pas').value==123))
let name=document.getElementById('text1').value
let pas=document.getElementById('pas').value
if(name=='abcd' && pas==1234){
   location.replace("level.html")
}
// console.log('anasss')
 if (!(name=='abcd')){
document.getElementById('noname').innerHTML='the name is incorrect !'}
if (!(pas==1234)){
document.getElementById('nopas').innerHTML='the password is incorrect !'}
// location.replace('index.html?='+name);
// alert('the passwor is not coract')
// alert('the name is not coract')
   }
   function onchange1(){
      document.getElementById('nopas').innerHTML=''
      document.getElementById('noname').innerHTML=''
   }