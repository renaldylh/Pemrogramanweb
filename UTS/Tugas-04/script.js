let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = "new-id";

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen form, input, daftar belanja, dan tombol "Clear All"
  const itemForm = document.getElementById("item-form");
  const itemInput = document.getElementById("item-input");
  const itemList = document.getElementById("item-list");
  const clearButton = document.getElementById("clear");

  // Tambahkan item ke daftar belanja saat formulir dikirim
  itemForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah pengiriman formulir
    const newItemText = itemInput.value;

    if (newItemText.trim() !== "") {
      const newItem = document.createElement("li");
      newItem.textContent = newItemText;

      const removeButton = document.createElement("button");
      removeButton.className = "remove-item btn-link text-red";
      removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      removeButton.addEventListener("click", function () {
        newItem.remove(); // Menghapus item saat tombol di klik
      });

      newItem.appendChild(removeButton);
      itemList.appendChild(newItem);
      itemInput.value = ""; // Bersihkan input
    }
  });

  // Hapus semua item dari daftar belanja saat tombol "Clear All" diklik
  clearButton.addEventListener("click", function () {
    itemList.innerHTML = ""; // Menghapus semua elemen dalam daftar belanja
  });
});
