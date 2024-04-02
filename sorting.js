// //  SORTING CODE 

document.addEventListener("DOMContentLoaded", () => {
    const getCellValue = (row, index) => {
      return row.children[index].textContent.trim();
    }; 
    const compareCells = (cellValue1, cellValue2, isNumeric = false) => {
      if (isNumeric) {
        return parseFloat(cellValue1) - parseFloat(cellValue2);
      } else {
        return cellValue1.localeCompare(cellValue2);
      }
    };

    const sortTable = (columnIndex, isNumeric = false) => {
      const tbody = document.querySelector("table tbody");
      const rows = Array.from(tbody.querySelectorAll("tr"));

      rows.sort((rowA, rowB) => {
        const cellValueA = getCellValue(rowA, columnIndex);
        const cellValueB = getCellValue(rowB, columnIndex);
        return compareCells(cellValueA, cellValueB, isNumeric);
      });

      tbody.innerHTML = "";
      rows.forEach(row => tbody.appendChild(row));
    }; 
    const makeSortable = () => {
      const headers = document.querySelectorAll("th");
      headers.forEach((header, index) => {
        header.addEventListener("click", () => {
          const isNumeric = index === 1 || index >= 6; // Adjust column indices for numeric sorting
          sortTable(index, isNumeric);
        });
      });
    };
    makeSortable();
  });

//   sorting code end
