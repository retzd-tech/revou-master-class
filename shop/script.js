const form = document.getElementById("form");
const namaInput = document.getElementById("nama");
const produkInput = document.getElementById("produk");
const output = document.getElementById("output");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Hindari reload

  const nama = namaInput.value.trim();
  const produk = produkInput.value;

  if (!nama || !produk) {
    output.innerHTML = `
    <strong>Semua field wajib diisi!</strong>
  `;
  output.style.display = "block";
    return;
  }

  // Tampilkan hasil
  output.innerHTML = `
    <strong>Terima kasih, ${nama}!</strong><br />
    Kamu telah memesan produk: <strong>${produk}</strong>.<br />
    Pesananmu sedang diproses... ⏳
  `;
  output.style.display = "block";

  // Kirim ke server dummy dengan error handling
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ nama, produk }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    if (!response.ok) {
      throw new Error("Gagal mengirim data ke server");
    }

    const data = await response.json();
    console.log("Data berhasil dikirim:", data);
  } catch (error) {
    output.innerHTML = `
    <strong>Terjadi kesalahan saat mengirim data. Coba lagi nanti.</strong>
  `;
    output.style.display = "block";
    console.error(error);
  }
});
