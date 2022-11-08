let taskbar = document.getElementsByClassName("taskbar")[0]
let  startmenu = document.getElementsByClassName("startmenu")[0]
let  tab1 = document.getElementsByClassName("tab1")[0]

taskbar.addEventListener("click", () =>{
     
      if(startmenu.style.bottom =="50px"){
          startmenu.style.bottom = "-800px"
      }
      else{
          startmenu.style.bottom = "50px"
    }
})
tab1.addEventListener("click", () =>{
     
    if(tab1.style.top =="0px"){
        tab1.style.top= "-1500px"
    }
    else{
        tab1.style.top= "0px"
  }
})
