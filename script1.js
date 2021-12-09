var selectedRow = null
let input2 = document.getElementById('input2')
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["formtitre"] = document.getElementById("formTitre").value;
    formData["formauteur"] = document.getElementById("formAuteur").value;
    formData["formprix"] = document.getElementById("formPrix").value;
    formData["formdate"] = document.getElementById("form-date-pub").value;
    formData["formlangue"] = document.getElementById("formLangue").value;
    formData["type"] = document.getElementsByName("type").value;
    formData['input2']= document.querySelector('input[name="typee"]:checked').value;

    console.log(formData)
    return formData;

}
// function displayRadioValue() {
//     var radioBtn = document.getElementsByName('type');
      
//     for(i = 0; i < radioBtn.length; i++) {
//         if(radioBtn[i].checked)
//         cell6.innerHTML = radioBtn[i].value;
//     }
// }

function insertNewRecord(data) {
    var table = document.getElementById("employeist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.formtitre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.formauteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.formprix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.formdate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.formlangue;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.input2;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
                       
}


function resetForm() {
    document.getElementById("formTitre").value = "";
    document.getElementById("formAuteur").value = "";
    document.getElementById("formPrix").value = "";
    document.getElementById("form-date-pub").value = "";
    document.getElementById("formLangue").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("formTitre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("formAuteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("formPrix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("form-date-pub").value = selectedRow.cells[3].innerHTML;
    document.getElementById("formLangue").value = selectedRow.cells[4].innerHTML;
    document.getElementById("input2").value = selectedRow.cells[5].innerHTML;
    
                       console.log(selectedRow)
 
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.formtitre;
    selectedRow.cells[1].innerHTML = formData.formauteur;
    selectedRow.cells[2].innerHTML = formData.formprix;
    selectedRow.cells[3].innerHTML = formData.formdate;
    selectedRow.cells[4].innerHTML = formData.formlangue;
    selectedRow.cells[5].innerHTML = formData.type;
    selectedRow.cells[5].innerHTML = formData.input2
  
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementsById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("formTitre").value == "") {
        isValid = false;
        document.getElementById("titreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titreValidationError").classList.contains("hide"))
            document.getElementById("titreValidationError").classList.add("hide");
    }
    return isValid;
}
