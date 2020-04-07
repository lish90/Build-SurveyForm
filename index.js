// this for the dropdown meun so the user can add reason. JQuery solution

{/* <script>
function toggleField(hideObj,showObj){
  hideObj.disabled=true;        
  hideObj.style.display='none';
  showObj.disabled=false;   
  showObj.style.display='inline';
  showObj.focus();
}
</script> */}

/* for the html -  under the form and action = post 

Browser: <select name="browser" 
          onchange="if(this.options[this.selectedIndex].value=='customOption'){
              toggleField(this,this.nextSibling);
              this.selectedIndex='0';
          }"></select> */

/* where the end of the Selection
<input name="browser" style="display:none;" disabled="disabled" 
            onblur="if(this.value==''){toggleField(this,this.previousSibling);}"> */