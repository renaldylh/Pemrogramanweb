let cart = [];

function addToCart(productName, price) {
  const existingItem = cart.find((item) => item.productName === productName);

  if (existingItem) {
    existingItem.quantity += 1; // Tambah jumlah produk jika sudah ada
  } else {
    cart.push({ productName, price, quantity: 1 }); // Tambah produk baru ke keranjang
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("total-price");
  let total = 0;
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.productName} - Rp. ${item.price} - Jumlah: ${item.quantity}
            <button onclick="updateItem(${index})">Ubah Produk</button>
            <button onclick="removeItem(${index})">Hapus</button>`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `Rp. ${total}`;
}

function updateItem(index) {
  const newProductName = prompt("Masukkan nama produk baru:");
  if (newProductName !== null && newProductName.trim() !== "") {
    cart[index].productName = newProductName;
    updateCart();
  }
}

function removeItem(index) {
  const confirmation = confirm(
    "Anda yakin ingin menghapus produk ini dari keranjang?"
  );
  if (confirmation) {
    cart.splice(index, 1);
    updateCart();
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Belum ada produk yang dipesan");
  } else {
    alert("Terima kasih telah melakukan pembelian!");
    cart = [];
    updateCart();
  }
}
