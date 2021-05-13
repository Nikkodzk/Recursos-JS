// input
// agregar id='myInput'
<input type="text" id="myInput">

// tabla
// agregar al tbody el id='myTable'
<tbody id="myTable"></tbody>

// JS
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
    
