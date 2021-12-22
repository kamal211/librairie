var selectedRow = null

function onFormSubmit() {
        var infoBook = readFormData();
        if (selectedRow == null){
            insertNewRecord(infoBook);
        }
        else
            updateRecord(infoBook);
        resetForm();
    console.log(onFormSubmit)
}
class Ouvrage
{
    constructor(titre,nomAuteur,prix,datePublication,langue,type,emailAuteur)
    {
        this.titre = titre;
        this.nomAuteur = nomAuteur;
        this.prix = prix;
        this.datePublication = datePublication;
        this.langue = langue;
        this.type = type;
        this.emailAuteur = emailAuteur;
    }
    DetailOuvrage()
    {
        return `L'ouvrage ${this.titre} est un ${this.type} en langue ${this.langue}, écrit par ${this.nomAuteur} et publié le ${this.datePublication}. Le prix de ${this.titre} est de ${this.prix} Dhs.`;

    }
}
function readFormData() {

  
    let infoBook =  {
        titre : document.getElementById("titre").value,
        auteur : document.getElementById("auteur").value,
        prix : document.getElementById("prix").value,
        datePub : document.getElementById("datePub").value,
        langue : document.getElementById("langue").value,
        type : document.querySelector('input[name="typee"]:checked').value,
        emailAuteur : document.getElementById("emailAuteur").value
    };
    let book2= new Ouvrage(infoBook.titre,infoBook.auteur,infoBook.prix,infoBook.datePub,infoBook.langue,infoBook.type)
    alert(book2.DetailOuvrage());

    return infoBook;

}
function insertNewRecord(infoBook) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = infoBook.titre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = infoBook.auteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = infoBook.prix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = infoBook.datePub;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = infoBook.langue;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = infoBook.type;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = infoBook.emailAuteur;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
                       
}
function resetForm() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("datePub").value = "";
    document.getElementById("langue").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("datePub").value = selectedRow.cells[3].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
  
    
    
                       console.log(selectedRow)
 
}
function updateRecord(infoBook) {
    selectedRow.cells[0].innerHTML = infoBook.titre;
    selectedRow.cells[1].innerHTML = infoBook.auteur;
    selectedRow.cells[2].innerHTML = infoBook.prix;
    selectedRow.cells[3].innerHTML = infoBook.datePub;
    selectedRow.cells[4].innerHTML = infoBook.langue;
    selectedRow.cells[5].innerHTML = infoBook.type;
    selectedRow.cells[6].innerHTML = infoBook.emailAuteur;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
// function validate() {
//    let titre = document.getElementById("formTitre").value;
//    let auteur = document.getElementById("formAuteur").value;
//    let prix =  document.getElementById("formPrix").value;
//    let date = document.getElementById("form-date-pub").value;
//    let langue = document.getElementById("formLangue").value;
//    let radioButn = document.getElementById("input2"); 
  
//    if (titre.value == "")
//    {
//     document.getElementById('noValid1').innerHTML="Veuillez entrez un nom valide"; 
//     titre.focus(); 
//     return false; 
//    }

//    if (auteur.value == ""  /*&& isNaN(prix.value)*/)
//    {
//     document.getElementById('noValid2').innerHTML="Veuillez entrez un nom valide"; 
//     auteur.focus(); 
//     return false; 
//    }
//    else
//    document.getElementById('noValid2').innerHTML="";

//    if (prix.value == "")
//    {
//     document.getElementById('noValid3').innerHTML="Veuillez entrez un nom valide"; 
//     prix.focus(); 
//     return false; 
//    }
//    else
//    document.getElementById('noValid3').innerHTML="";

//    if (date.value == "")
//    {
//     document.getElementById('noValid4').innerHTML="Veuillez entrez un nom valide"; 
//     date.focus(); 
//     return false; 
//    }
//    else
//    document.getElementById('noValid4').innerHTML="";

//    if (langue.value == "")
//    {
//     document.getElementById('noValid5').innerHTML="Veuillez entrez un nom valide"; 
//     langue.focus(); 
//     return false; 
//    }
//    else
//    document.getElementById('noValid5').innerHTML="";

//    console.log(validate)
// }
