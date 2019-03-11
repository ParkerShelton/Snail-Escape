

//Gets the form data, converts it to individual variables then sends it to fetch function
function GetFormData() {
  let form = document.forms.snailForm;
  let formData = new FormData(form);

  let h = formData.get('wellHeight');
  let u = formData.get('climbDist');
  let d = formData.get('fallDist');
  let f = formData.get('fatiguePerc');

  //Validation for the well height
  if(h == "") {
    alert("You must specify the height of the well!");
    return false;

  } else if(h <= 0 || h > 100) {
    alert("You have to pick a number between 1 and 100!");
    return false;

  } else if(h % 1 != 0) {
    alert("Make sure to only use whole numbers!");
    return false;
  }

  //Validation for the climb distance
  if(u == "") {
    alert("You must specify the climb distance!");
    return false;

  } else if(u <= 0 || u > 100) {
    alert("You have to pick a number between 1 and 100!");
    return false;

  } else if(u % 1 != 0) {
    alert("Make sure to only use whole numbers!");
    return false;
  }

  //Validation for the fall distance
  if(d == "") {
    alert("You must specify the fall distance!");
    return false;

  } else if(d <= 0 || d > 100) {
    alert("You have to pick a number between 1 and 100!");
    return false;

  } else if(d % 1 != 0) {
    alert("Make sure to only use whole numbers!");
    return false;
  }

  //Validation for the fatigue percentage
  if(f == "") {
    alert("You must specify the fatigue percentage!");
    return false;

  } else if(f <= 0 || f > 100) {
    alert("You have to pick a number between 1 and 100!");
    return false;

  } else if(f % 1 != 0) {
    alert("Make sure to only use whole numbers!");
    return false;
  }

  FetchResults(h, u, d, f);
}




//Receives the form data, sends it to the server, then returns the results
function FetchResults(h, u, d, f) {
  let header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  });

  let url = 'http://192.168.64.2/snail/server.php/';

  let formData = {
    h : h,
    u : u,
    d : d,
    f : f
  }

  let sendData = {
    method:'POST',
    mode: 'cors',
    header: header,
    body: JSON.stringify(formData)
  };

  //Takes what the server sends back, if theres no problems it converts the data back to a json object to render
  fetch(url, sendData)
    .then((response) => response.json())
    .then((data) => {
      AddRow("resultTable", data);
    })
    .catch((error) => console.log(`ERROR: ${error}`));

}





//Adds a new row to the results table and fills the row with the correct data
function AddRow(tableId, returnData) {
  let resultTable = document.getElementById(tableId);
  let newRow = resultTable.insertRow(-1);

  //Add h variable to the new row
  let hCell = newRow.insertCell(0);
  let hText = document.createTextNode(returnData.hudf[0]);
  hCell.appendChild(hText);

  //Add u variable to the new row
  let uCell = newRow.insertCell(1);
  let uText = document.createTextNode(returnData.hudf[1]);
  uCell.appendChild(uText);

  //Add d variable to the new row
  let dCell = newRow.insertCell(2);
  let dText = document.createTextNode(returnData.hudf[2]);
  dCell.appendChild(dText);

  //Add f variable to the new row
  let fCell = newRow.insertCell(3);
  let fText = document.createTextNode(returnData.hudf[3]);
  fCell.appendChild(fText);

  //Add result variable to the new row
  let resultCell = newRow.insertCell(4);
  let resultText;

  if(returnData.succeeded == true) {
    resultText = document.createTextNode(`The snail succeeded on day ${returnData.finalDay}!`);
  } else {
    resultText = document.createTextNode(`The snail failed on day ${returnData.finalDay}!`);
  }

  resultCell.appendChild(resultText);
}


function RandomScenario() {
  let wellHeight = document.getElementById("wellHeight");
  let climbDist = document.getElementById("climbDist");
  let fallDist = document.getElementById("fallDist");
  let fatiguePerc = document.getElementById("fatiguePerc");

  let wellNum = Math.floor(Math.random() * 100) + 1;
  let climbNum = Math.floor(Math.random() * 100) + 1;
  let fallNum = Math.floor(Math.random() * 100) + 1;
  let fatigueNum = Math.floor(Math.random() * 100) + 1;

  wellHeight.value = wellNum;
  climbDist.value = climbNum;
  fallDist.value = fallNum;
  fatiguePerc.value = fatigueNum;
}