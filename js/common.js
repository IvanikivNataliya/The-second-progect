function getEI(a){
         return document.getElementById(a); 
}    

function show(id){ 
    getEI(id).style.display = 'block';
}

function hide(id){ 
      getEI(id).style.display = 'none';
}

getEI("item1").onmouseover = function(){  
    getEI("item1").style.transform = "scale(1.1,1.1)";
    getEI("item1").style.boxShadow = "0px 0px 35px 0px rgba(2,3,3,0.5)";
    getEI("cont1").style.top = "70px";        
    getEI("h1").style.textDecoration = "underline #8dc63f";
    getEI("rm1").style.display = "block";
    getEI("more1").style.background = "none";
    getEI("bg_1").style.backgroundColor = "rgba(15, 91, 88, .8)";
}       
getEI("item1").onmouseout = function(){  
    getEI("item1").style.transform = "scale(1,1)";
    getEI("item1").style.boxShadow = "none";
    getEI("cont1").style.top = "110px";
    getEI("h1").style.textDecoration = "none";
    getEI("rm1").style.display = "none";
    getEI("more1").style.background = "#439c92";
    getEI("bg_1").style.backgroundColor = "rgba(65, 64, 66, .5)";
}

getEI("item2").onmouseover = function(){  
    getEI("item2").style.transform = "scale(1.1,1.1)";
    getEI("item2").style.boxShadow = "0px 0px 35px 0px rgba(2,3,3,0.5)";
    getEI("cont2").style.top = "70px";        
    getEI("h2").style.textDecoration = "underline #8dc63f";
    getEI("rm2").style.display = "block";
    getEI("more2").style.background = "none";
    getEI("bg_2").style.backgroundColor = "rgba(15, 91, 88, .8)";
}       
getEI("item2").onmouseout = function(){  
    getEI("item2").style.transform = "scale(1,1)";
    getEI("item2").style.boxShadow = "none";
    getEI("cont2").style.top = "110px";
    getEI("h2").style.textDecoration = "none";
    getEI("rm2").style.display = "none";
    getEI("more2").style.background = "#439c92";
    getEI("bg_2").style.backgroundColor = "rgba(65, 64, 66, .5)";
}

getEI("item3").onmouseover = function(){  
    getEI("item3").style.transform = "scale(1.1,1.1)";
    getEI("item3").style.boxShadow = "0px 0px 35px 0px rgba(2,3,3,0.5)";
    getEI("cont3").style.top = "50px";        
    getEI("h3").style.textDecoration = "underline #8dc63f";
    getEI("rm3").style.display = "block";
    getEI("more3").style.background = "none";
    getEI("bg_3").style.backgroundColor = "rgba(15, 91, 88, .8)";
}       
getEI("item3").onmouseout = function(){  
    getEI("item3").style.transform = "scale(1,1)";
    getEI("item3").style.boxShadow = "none";
    getEI("cont3").style.top = "110px";
    getEI("h3").style.textDecoration = "none";
    getEI("rm3").style.display = "none";
    getEI("more3").style.background = "#439c92";
    getEI("bg_3").style.backgroundColor = "rgba(65, 64, 66, .5)";
}

getEI("item4").onmouseover = function(){  
    getEI("item4").style.transform = "scale(1.1,1.1)";
    getEI("item4").style.boxShadow = "0px 0px 35px 0px rgba(2,3,3,0.5)";
    getEI("cont4").style.top = "70px";        
    getEI("h4").style.textDecoration = "underline #8dc63f";
    getEI("rm4").style.display = "block";
    getEI("more4").style.background = "none";
    getEI("bg_4").style.backgroundColor = "rgba(15, 91, 88, .8)";
}       
getEI("item4").onmouseout = function(){  
    getEI("item4").style.transform = "scale(1,1)";
    getEI("item4").style.boxShadow = "none";
    getEI("cont4").style.top = "110px";
    getEI("h4").style.textDecoration = "none";
    getEI("rm4").style.display = "none";
    getEI("more4").style.background = "#439c92";
    getEI("bg_4").style.backgroundColor = "rgba(65, 64, 66, .5)";
}



getEI("new_cont_1").onmouseover = function(){  
    getEI("new_cont_1").style.transform = "scale(1.1,1.1)";
    getEI("new_cont_h1").style.color = "#439c92";
}       
getEI("new_cont_1").onmouseout = function(){  
    getEI("new_cont_1").style.transform = "scale(1,1)";
    getEI("new_cont_h1").style.color = "#000";
}


getEI("new_cont_2").onmouseover = function(){  
    getEI("new_cont_2").style.transform = "scale(1.1,1.1)";
    getEI("new_cont_h2").style.color = "#439c92";
}       
getEI("new_cont_2").onmouseout = function(){  
    getEI("new_cont_2").style.transform = "scale(1,1)";
    getEI("new_cont_h2").style.color = "#000";
}

getEI("new_cont_3").onmouseover = function(){  
    getEI("new_cont_3").style.transform = "scale(1.1,1.1)";
    getEI("new_cont_h3").style.color = "#439c92";
}       
getEI("new_cont_3").onmouseout = function(){  
    getEI("new_cont_3").style.transform = "scale(1,1)";
    getEI("new_cont_h3").style.color = "#000";
}

//getEI('navbar_tg').onclick = function(){ 
//    hide('wrapper_1');
//    hide('wrapper_2');
//    hide('wrapper_3');
//    hide('wrapper_4');
//}

getEI("mySearch").onclick = function(){ 
    show("srch_input");
    show("close_srch");
}

getEI("close_srch").onclick = function(){ 
    hide("srch_input");
    hide("close_srch");
}
//
//getEI('navbar_tg').onclick = function(){
//   getEI('navigate').style.backgroundColor = "blue";
//}
//
//getEI('navbar_tg').onclick = function(){
//   var backcolor  = window.getComputedStyle(getEI('navigate')).backgroundColor;
//   var backimage  = window.getComputedStyle(getEI('navigate')).backgroundImage;
//   if(backcolor == 'none'){
//    getEI('navigate').style.backgroundColor = "rgba(4, 34, 32, .7)";
//    if (backimage == "none"){
//         getEI('navigate').style.backgroundImage = "url(../images/uzor.png)";
//    }
//}else{
//        getEI('navigate').style.backgroundColor = "none";
//        getEI('navigate').style.backgroundImage = "none";
//}
//}
//    
//getEI('navbar_tg').onclick = function(){
//   var seen3  = window.getComputedStyle(getEI('wrapper_3')).display;
//  
//   if(seen3 == 'block'){
//   getEI('wrapper_3').style.display = "none";
//}else{
//        getEI('wrapper_3').style.display = "block";
//}
//}
//
//getEI('navbar_tg').onclick = function(){
//   var seen4  = window.getComputedStyle(getEI('wrapper_4')).display;
//  
//   if(seen4 == 'block'){
//   getEI('wrapper_4').style.display = "none";
//}else{
//        getEI('wrapper_4').style.display = "block";
//}
//}
//
//FORM begin
//function valid(form){
//    var fail = false;
//    var name = form.children[0].children[2].value;
//    var email = form.children[1].children[2].value;
//    var message = form.children[2].children[2].value;
//    var adr = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
//
//    if (name  == "" || name == " "){
//        fail = "Ви не ввели ім'я";
//        getEI("name").style.border = "2px solid red";
//    } else if (email == "" || email == " "){
//        fail = "Ви не ввели email";
//        getEI("email").style.border = "2px solid red";
//    } else if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0){
//        fail = "Ви ввели email неправильно";
//        getEI("email").style.border = "2px solid red";
//    } else if (message == "" || message == " "){
//        fail = "Ви не ввели повідомлення"; 
//        getEI("message").style.border = "2px solid red";
//    }if (fail) {
//        alert(fail);
//        return false;
//    } else {
//        return true;
//    }
//    
//    $.ajax({
//        type: "POST",
//        url: "/ajax/feadback.php",
//        cache: false,
//        data: {'name': name, 'email': email, 'message': message},
//        dataType: 'html',
//        success: function (data)
//    });
//}
//
//$("form").


//    $(document).ready(function () {
//      $(".navbar-toggle").on("click", function () {
//        $(this).toggleClass("active");
//      });
//    });
//
//
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}
//
//function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    
//    if (n > slides.length) {
//       slideIndex = 1; 
//    }
//    if (n < 1) {
//        slideIndex=slides.length;
//    }
//    for (i = 0; i < slides.length; i++){
//        slides[i].style.display = "none";
//    }
//    slides[slideIndex-1].style.display = "block";
//}