// GANTI PAKE LINK FOTO QRIS LU
const qrisURL = "https://telegra.ph/file/fd7653b053f71617fcb84.jpg";

// GANTI PAKE LINK FOTO QRIS LU

const qrisURL2 = "https://telegra.ph/file/fd7653b053f71617fcb84.jpg";

// GANTI PAKE FOTO BACKGROUND LU
const backgroundURL = "https://telegra.ph/file/ddd83c5a9e501cf97fb18.jpg";

// Data pembayaran yang bisa diubah
const paymentData = {
    Dana: "0881012391309", // NOPE DANA LU
    Ovo: "0881012391309", // NOPE OVO LU
    Gopay: "0881012391309" // NOPE GOPAY LU
}; //NOTE UBAH TAPI JAN APUS TANDA " NYA

//MAU UBAH NAMA NAMA WEB NOMOR SAMA EMAIL DI BAGIAN HUBUNGI SAYA? KE FILE INDEX.HTML 

// Set background gambar
document.getElementById("background-container").style.backgroundImage = `url('${backgroundURL}')`;

// Set QRIS link
document.getElementById("qris-link").href = qrisURL;

// Fungsi untuk menyalin nomor saat tombol ditekan
function copyToClipboard(paymentType) {
    if (paymentData[paymentType]) {
        navigator.clipboard.writeText(paymentData[paymentType]).then(() => {
            alert(paymentType + " nomor telah disalin: " + paymentData[paymentType]);
        }).catch(err => {
            console.error('Gagal menyalin:', err);
        });
    } else {
        alert("Nomor tidak ditemukan!");
    }
}
