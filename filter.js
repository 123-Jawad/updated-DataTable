// filter code for each column


document.addEventListener("DOMContentLoaded", function() {
  const createSearchFunction = (inputId, columnIndex) => {
    const searchInput = document.getElementById(inputId);
    const dataTable = document.getElementById("dataTable");

    searchInput.addEventListener("input", function() {
      const searchText = this.value.trim().toLowerCase();
      const rows = dataTable.getElementsByTagName("tr");

      for (let i = 1; i < rows.length; i++) {
        const cellValue = rows[i].cells[columnIndex].textContent.trim().toLowerCase();
        rows[i].style.display = cellValue.includes(searchText) ? "" : "none";
      }
    });
  };

  createSearchFunction("searchProductName", 2); // Index 2 for "product Name" column
  createSearchFunction("searchProductTitle", 3); // Index 3 for "product Title" column
  createSearchFunction("searchProductDescription", 4); // Index 4 for "product Description" column
  createSearchFunction("searchProductVendor", 5); // Index 5 for "product Vendor" column
  createSearchFunction("searchProductInstock", 6); // Index 6 for "product Instock" column
  createSearchFunction("searchProductBuyingprice", 7); // Index 7 for "product Buyingprice" column
  createSearchFunction("searchProductSalesprice", 8); // Index 8 for "product Salesprice" column
  createSearchFunction("searchProductQuantity", 9); // Index 9 for "product quantity" column
  createSearchFunction("searchProductType", 10); // Index 10 for "product Type" column
  createSearchFunction("searchProductShippingrate", 11); // Index 11 for "product Shippingrate" column
  createSearchFunction("searchProductRefilllimit", 12); // Index 12 for "product refilllimit" column
  createSearchFunction("searchProductLocation", 13); // Index 13 for "product location" column
});
