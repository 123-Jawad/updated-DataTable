class Product {
  constructor(name,id,title,description,vendor,inStock,buyingPrice,salePrice,purchaseQuantity,type,shippingRates,refillLimit,locationAddress) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.description = description;
    this.vendor = vendor;
    this.inStock = inStock;
    this.buyingPrice = buyingPrice;
    this.salePrice = salePrice;
    this.purchaseQuantity = purchaseQuantity;
    this.type = type;
    this.shippingRates = shippingRates;
    this.refillLimit = refillLimit;
    this.locationAddress = locationAddress;
  }
}
class ProductManager {
  constructor() {
    this.productData = [];
    this.productName = document.querySelector("#product-name");
    this.productId = document.querySelector("#product-id");
    this.productTitle = document.querySelector("#product-title");
    this.productDescription = document.querySelector("#product-description");
    this.productVendor = document.querySelector("#product-vendor");
    this.productInStock = document.querySelector("#in-stock");
    this.productBuyingPrice = document.querySelector("#buying-price");
    this.productSalePrice = document.querySelector("#sale-price");
    this.productPurchaseQuantity = document.querySelector("#purchase-quantity");
    this.productType = document.querySelector("#product-type");
    this.productShippingRates = document.querySelector("#shipping-rates");
    this.productRefillLimit = document.querySelector("#refill-limit");
    this.productLocationAddress = document.querySelector("#product-location-address");
    this.addproduct = document.querySelector("#addproduct");
    this.updateproduct = document.querySelector("#updateproduct");
    this.datatable = document.querySelector("#tbody");
    this.addproduct.onclick = this.addNewProduct.bind(this);
    this.updateproduct.onclick = this.updateProduct.bind(this);

    if (localStorage.getItem("productData") != null) {
      this.productData = JSON.parse(localStorage.getItem("productData"));
    }
    this.getDataFromLocal();
  }
  // this method adds a new product to the productData array when the user clicks the "Add Product" button.
  addNewProduct() {
    const product = new Product(
      this.productName.value,
      this.productId.value,
      this.productTitle.value,
      this.productDescription.value,
      this.productVendor.value,
      this.productInStock.value,
      this.productBuyingPrice.value,
      this.productSalePrice.value,
      this.productPurchaseQuantity.value,
      this.productType.value,
      this.productShippingRates.value,
      this.productRefillLimit.value,
      this.productLocationAddress.value
    );

    this.productData.push(product);
    this.saveProductData();
    this.displayProducts();
  }
// update method
  updateProduct() {
    const index = this.updateproduct.getAttribute("data-index");
    if (index !== null) {
      this.productData[index] = new Product(
        this.productName.value,
        this.productId.value,
        this.productTitle.value,
        this.productDescription.value,
        this.productVendor.value,
        this.productInStock.value,
        this.productBuyingPrice.value,
        this.productSalePrice.value,
        this.productPurchaseQuantity.value,
        this.productType.value,
        this.productShippingRates.value,
        this.productRefillLimit.value,
        this.productLocationAddress.value
      );
      this.saveProductData();
      this.displayProducts();
    }
  }

// delete method
  deleteProduct(index) {
    this.productData.splice(index, 1);
    this.saveProductData();
    this.displayProducts();
  }

  getDataFromLocal() {
    this.displayProducts();
  }

  saveProductData() {
    localStorage.setItem("productData", JSON.stringify(this.productData));
  }

// This method dynamically creates HTML table rows to display products. 
  displayProducts() {
    this.datatable.innerHTML = "";
    this.productData.forEach((product, index) => {
      this.datatable.innerHTML += `<tr index=${index}>
        <td class="selectoption">
          <input type="checkbox" name="" id="check" />
        </td>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.vendor}</td>
        <td>${product.inStock}</td>
        <td>${product.buyingPrice}</td>
        <td>${product.salePrice}</td>
        <td>${product.purchaseQuantity}</td>
        <td>${product.type}</td>
        <td>${product.shippingRates}</td>
        <td>${product.refillLimit}</td>
        <td>${product.locationAddress}</td>
        <td class="actions">
            <button class="edit-btn" data-index="${index}"><i class="fa-solid fa-pencil"></i></button>
            <button class="del-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>`;
    });


// the delete method call here to delete the row 

    const allDelbtn = document.querySelectorAll(".del-btn");
    allDelbtn.forEach((btn) => {
      btn.onclick = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const index = btn.getAttribute("data-index");
            this.deleteProduct(index);
          }
        });
      };
    });
     
// the update method call here to edit the existing modal  

    const allDataEdit = document.querySelectorAll(".edit-btn");
    allDataEdit.forEach((btn) => {
      btn.onclick = () => {
        const index = btn.getAttribute("data-index");
        this.populateForm(index);
        // Get the modal element
        let modal = document.getElementById("myModal");

        // Get the close icon element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      };
    });
  }

//  this method populateForm get the value of existing modal and and update the value of modal 

  populateForm(index) {
    const product = this.productData[index];
    this.productName.value = product.name;
    this.productId.value = product.id;
    this.productTitle.value = product.title;
    this.productDescription.value = product.description;
    this.productVendor.value = product.vendor;
    this.productInStock.value = product.inStock;
    this.productBuyingPrice.value = product.buyingPrice;
    this.productSalePrice.value = product.salePrice;
    this.productPurchaseQuantity.value = product.purchaseQuantity;
    this.productType.value = product.type;
    this.productShippingRates.value = product.shippingRates;
    this.productRefillLimit.value = product.refillLimit;
    this.productLocationAddress.value = product.locationAddress;

    this.updateproduct.setAttribute("data-index", index);
    this.addproduct.disabled = true;
    this.updateproduct.disabled = false;
  }
}

const productManager = new ProductManager();
