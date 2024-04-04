// //  SORTING CODE 

document.addEventListener("DOMContentLoaded", () => {
  const getCellValue = (row, index) => row.children[index].textContent.trim();
  const compareCells = (cellValue1, cellValue2, isNumeric = false) =>
    isNumeric
      ? parseFloat(cellValue1) - parseFloat(cellValue2)
      : cellValue1.localeCompare(cellValue2);
  const sortTable = (columnIndex, isNumeric = false) => {
    const tbody = document.querySelector("table tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    rows.sort((rowA, rowB) => compareCells(getCellValue(rowA, columnIndex), getCellValue(rowB, columnIndex), isNumeric));
    tbody.innerHTML = "";
    rows.forEach(row => tbody.appendChild(row));
  };
  const makeSortable = () => {
    const headers = document.querySelectorAll("th");
    headers.forEach((header, index) => header.addEventListener("click", () => sortTable(index, index === 1 || index >= 6)));
  };
  makeSortable();
});
