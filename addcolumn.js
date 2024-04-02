document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addColumnBtn").addEventListener("click", function() {
      addColumnsToTable();
    });
  });

  function addColumnsToTable() {
    let table = document.getElementById("dataTable");
    let numColumns = document.getElementById("numcolumns").value;
    console.log(numColumns);

    // Validate numColumns
    if (numColumns < 1) {
      alert("Please enter a valid number of columns (minimum 1).");
      return;
    }

    // Prompt user for column names and add columns to table
    for (let i = 0; i < numColumns; i++) {
      let columnName = prompt(`Enter column name for column ${i + 1}:`);
      if (!columnName) {
        alert("Column name cannot be empty. Skipping column.");
        continue;
      }

      // Add the new column headers to the table
      let existingColumns = table.rows[0].cells.length;
      let newPosition = existingColumns - 1;
      let th = document.createElement("th");
      th.textContent = columnName;
      table.rows[0].insertCell(newPosition).appendChild(th);

      // Add data to each row in the new column
      let rowCount = table.rows.length;
      for (let j = 1; j < rowCount; j++) {
        let td = document.createElement("td");
        table.rows[j].insertCell(newPosition).appendChild(td);
      }
    }
  }