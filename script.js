document.getElementById("pesanBtn").addEventListener("click", function () {
  const nama = document.getElementById("nama").value.trim();
  const produk = document.getElementById("produk").value;
  const output = document.getElementById("output");

  if (!nama) {
    alert("Nama wajib diisi!");
    return;
  }

  output.innerHTML = `
    <strong>Terima kasih, ${nama}!</strong><br />
    Kamu telah memesan produk: <strong>${produk}</strong>.<br />
    Pesananmu sedang diproses... ⏳
  `;

  output.style.display = "block"; // 👉 Tampilkan output box

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ nama, produk }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data berhasil dikirim ke server simulasi:", data);
    });
});
