

 function wellcome(){
  alert('Well Come ');
 }

// login page code start frome line 7 to 115
 // check Username
 function check(data){
    var check=document.getElementById('uname');
    var data=check.value
    if(isNaN('data')){
       document.getElementById('error').innerHTML='';
    }
    else{
       document.getElementById('error').innerHTML='Numbers are not allowed';

    }

 }
//   end

// Check Password
// var password=document.getElementById('pass');

//  function checkPass(data){

//     var eightChar=new RegExp('(?=.*[8,])');
//     var upperCase=new RegExp('(?=.*[A-Z])');
//     var lowerCase=new RegExp('(?=.*[a-z])');
//     var number=new RegExp('(?=.*[0-9])');
//     var spacialChar=new RegExp('(?=.*[@#&*%$!^])');


//     if(eightChar.test(data) && upperCase.test(data) && lowerCase.test(data) && number.test(data) && spacialChar.test(data)){
//         document.getElementById('error').innerHTML='';
//     }
//    else{
//     document.getElementById('error').innerHTML='Enter strong pasword';
//    }

//    if(upperCase.test(data)){
//     document.getElementById('error').innerHTML='';
//    }
//    else{
//     document.getElementById('error').innerHTML='Atleast one capital latter';
//    }

//     if(eightChar.test(data)){
//         document.getElementById('error').innerHTML='';
//     }
//     else{
//         document.getElementById('error').innerHTML='Password must be eight digits';
//     }
//  }
//   var data=password.value;
//   try{
//   if(isNaN('data')){
//     throw 'Only Numbers Accepted';
//   }
//   else{
//    if(length.data<8){
//        throw 'Password must be Eight digits';
 
//    }
//    else{
//        throw '';

//    }
//   }
// } catch(error){
//    document.getElementById('error').innerHTML=error;
// }




   //    Hide-Show-password-code-start     
   var flag1=document.getElementById('pass');
   function ShowPass(){
     var type=flag1.getAttribute('type');
     if(type=='password'){
       flag1.setAttribute('type','text');

     }
     else{
       flag1.setAttribute('type','password');
     }
   }

   var flag2=document.getElementById('confirmPass');
   function ShowConfirmPass(){
       var type=flag2.getAttribute('type');
     if(type=='password'){
       flag2.setAttribute('type','text');

     }
     else{
       flag2.setAttribute('type','password');
     }
   }

   // Hide-show-code end



   // Login

   function login(){
       var uname=document.getElementById('uname').value;
       var pass=document.getElementById('pass').value;
       var confirmPass=document.getElementById('confirmPass').value;
       if(uname=='' && pass=='' && confirmPass==''){
        document.getElementById('error').innerHTML='Empty User Name and Password';

       }
       else if(uname=='' && pass==''){
        document.getElementById('error').innerHTML='Empty User Name and Password';
       }
       else if(uname=='' && confirmPass==''){
        document.getElementById('error').innerHTML='Empty User Name and Confirm Password';
       }
       else if(uname==''){
           document.getElementById('error').innerHTML='Empty User Name';
       }
       else if(pass==''){
           document.getElementById('error').innerHTML='Empty Password';

       }
       else if(confirmPass==''){
        document.getElementById('error').innerHTML='Empty Confirm Password';
       }
       else{
           if(uname=='iftikhar' && pass=='1122' && confirmPass=='1122'){
           window.open('index.html');
       }
       else{

            
           if(uname!='iftikhar' && pass!='1122' || uname!='iftikhar' && confirmPass!='1122'  ){
               document.getElementById('error').innerHTML=' Invalid User Name and Password ';
           }
           else if(uname!='iftikhar'){
               document.getElementById('error').innerHTML='Invalid User Name ';
           }
           else{
               document.getElementById('error').innerHTML='Password does not match ';
           }
           
       }
       }
      
   }


//     login page code end



// logout

function logout(){
    var a=confirm('Do you want to LogOut');
    if(a=='ok'){
    window.open('LoginPage1.html');
    }
    else{

    }
}



function changeBackground(val){
    if(val.value==1){
        document.body.style.backgroundColor='white' , 
        document.body.style.color='black';
    }
    else if(val.value==2){
     
        document.body.style.backgroundColor='black',
    document.body.style.color='white';
    // document.getElementById('header-section').style.backgroundColor='black',
    // document.getElementById('txt').style.Color='white';
   

    // var footer=document.getElementsByClassName("footer-section");
    // footer.style.backgroundColor='black';
    // footer.style.color='white';

    
    }
}
function change(a){
    var img=document.getElementById("img");
    if(a.value==1){
      img.src="./images/carousel-1.jpg";
    }
    else if(a.value==2){
        img.src="./images/course-4.jpg"
    }
    else if(a.value==3){
        img.src="./images/course-6.jpg"
    }

}


function close(){
    var btn=document.getElementById("btn");
    var nav=document.getElementById("nav");
    nav.style.backgroundColor='white';

}