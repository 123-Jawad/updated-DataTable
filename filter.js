// filter code for each column


    document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductName");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[2].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });

      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductTitle");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[3].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductDescription");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[4].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductVendor");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[5].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductInstock");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[6].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductBuyingprice");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[7].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductSalesprice");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[8].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductQuantity");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[9].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductType");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[10].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductShippingrate");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[11].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductRefilllimit");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[12].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchProductLocation");
        const dataTable = document.getElementById("dataTable");
    
        searchInput.addEventListener("input", function() {
          const searchText = this.value.trim().toLowerCase();
          const rows = dataTable.getElementsByTagName("tr");
    
          for (let i = 1; i < rows.length; i++) {
            const cellValue = rows[i].cells[13].textContent.trim().toLowerCase(); // Index 2 for "product Title" column
            if (cellValue.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      });