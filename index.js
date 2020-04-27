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
            onblur="if(this.value==''){toggleField(this,this.previousSibling);}"> 
            
************************************
     endpointd       
If you want to filter the /api/v1/states/daily.json to show a specific state use /api/v1/states/NY/daily.json 
to only show cases in New York. Or /api/v1/states/NY/20200316.json to show the result of a specific date.
Or to access the most recent value /api/v1/states/NY/current.json.
            
            
            
            */

/******************
* Practice making API request 
*/




const results = document.querySelector("#description");
const url = "https://covidtracking.com/api/v1/states/NY/20200316.json"

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.forEach((result) => {
      const state = `<li class="list-inline-item">
        <img src="${result.Poster}" alt="">
        <p>${result.Title}</p>
      </li>`;
      results.insertAdjacentHTML("beforeend", state);
    });
  });

  // Object.keys();
  

  // JSON.parse(state)[0].state;
