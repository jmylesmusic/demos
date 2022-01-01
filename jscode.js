function showChecked(){
  let i = 0;
  let checkedBoxes = document.querySelectorAll("input:checked").length
          document.getElementById("result").textContent = 
          "User Stories Completed = " 
          + checkedBoxes;
          if (checkedBoxes === 2) {
            (document.getElementById("result").textContent = "Ready to submit?"), 
            (document.getElementById("submission").style.visibility = "visible");
          }
          }
        document.querySelectorAll("input[name=check]").forEach(i=>{
         i.onclick = function(){
          showChecked();
         } 
        });