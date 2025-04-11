// GANTI PAKE LINK FOTO QRIS LU
const qrisURL = "https://deposit.pictures/p/a5bc88dd532641c793aa4f94ea60cb61";

// GANTI PAKE LINK FOTO QRIS LU

const qrisURL1 = "https://deposit.pictures/p/babf35f5b5b7491eade25da2b4e22b85";

// GANTI PAKE FOTO BACKGROUND LU
const backgroundURL = "https://deposit.pictures/p/9e2c649302ce466baee6df74633286be";

// Data pembayaran yang bisa diubah
const paymentData = {
    Dana: "081232973559", // NOPE DANA LU
    Ovo: "0881012391309", // NOPE OVO LU
    Gopay: "0881012391309" // NOPE GOPAY LU
}; //NOTE UBAH TAPI JAN APUS TANDA " NYA

//MAU UBAH NAMA NAMA WEB NOMOR SAMA EMAIL DI BAGIAN HUBUNGI SAYA? KE FILE INDEX.HTML 

// Set background gambar
document.getElementById("background-container").style.backgroundImage = `url('${backgroundURL}')`;

// Set QRIS link
document.getElementById("qris-link").href = qrisURL;

// Set QRIS link
document.getElementById("qris-link1").href = qrisURL1;

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
