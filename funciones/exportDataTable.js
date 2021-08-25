// 2 PASOS

// PASO 1
// en el archivo HTML, al boton de exportar agregar un <script>:
document.getElementById("btn-exportar").addEventListener("click", exportTableToExcel);

// PASO 2
// Definir la funcion para exportar datos
function exportTableToExcel(filename = ''){

  let downloadLink;
  const dataType = 'application/vnd.ms-excel';
  const tableSelect = document.getElementById('myTable'); // nombre de la tabla
  const tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

  // Specify file name
  filename = 'tecnicos'+'.xls'; 
  
  // Create download link element
  downloadLink = document.createElement("a");
  
  document.body.appendChild(downloadLink);
  
  if(navigator.msSaveOrOpenBlob){
      let blob = new Blob(['\ufeff', tableHTML], {
          type: dataType
      });
      navigator.msSaveOrOpenBlob( blob, filename);
  }
  else{
      // Create a link to the file
      downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
  
      // Setting the file name
      downloadLink.download = filename;
      
      //triggering the function
      downloadLink.click();
  }
}
