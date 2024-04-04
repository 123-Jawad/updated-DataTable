
  // jquery code for selected column
$(document).ready(() => {
  const headers = $("#dataTable th").not(":first").map((_, el) => $(el).text().trim().split("Filter")[0]).get();
  const form = $("#columnSelectionForm");
  headers.forEach((header, index) => {
    if (index < 8 || index === headers.length - 1) { // Check the last column too
      form.append(`<div class="form-check"><input class="form-check-input" type="checkbox" value="${index + 2}" id="column${index + 1}" checked disabled><label class="form-check-label" for="column${index + 1}">${header}</label></div>`);
    } else {
      form.append(`<div class="form-check"><input class="form-check-input" type="checkbox" value="${index + 2}" id="column${index + 1}"><label class="form-check-label" for="column${index + 1}">${header}</label></div>`);
    }
  });
});

const selectColumns = () => {
  const selectedColumns = $("#columnSelectionForm input:checked").map((_, el) => $(el).val()).get();
  $("#dataTable th, #dataTable td").hide();
  $("#dataTable th:nth-child(1), #dataTable td:nth-child(1)").show();
  $("#dataTable th:last-child, #dataTable td:last-child").show(); // Show the last action column
  selectedColumns.forEach(colIndex => $(`#dataTable th:nth-child(${colIndex}), #dataTable td:nth-child(${colIndex})`).show());
}

