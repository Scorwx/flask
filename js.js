        function verSu() {
        const suButonu = document.getElementById("su-butonu");
        const suButonuSure = document.getElementById("su-butonu-sure");
        suButonu.disabled = true;

        // Su verme işlemleri burada gerçekleşir.
        alert('Su veriliyor...');
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/su");
        xhr.send();

        let kalanSure = 10; // 10 saniye
        const interval = setInterval(() => {
            kalanSure--;
            suButonuSure.textContent = `(${kalanSure} saniye)`;

            if (kalanSure === 0) {
            clearInterval(interval);
            suButonu.disabled = false;
            suButonuSure.textContent = ""; // Kalan süre metnini temizle
            }
        }, 1000); // Her saniye güncelle
        }

        function verHava() {
        const havaButonu = document.getElementById("hava-butonu");
        const havaButonuSure = document.getElementById("hava-butonu-sure");
        havaButonu.disabled = true;

        // Hava verme işlemleri burada gerçekleşir.
        alert('Hava veriliyor...');
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/fan");
        xhr.send();

        let kalanSure = 10; // 10 saniye
        const interval = setInterval(() => {
            kalanSure--;
            havaButonuSure.textContent = `(${kalanSure} saniye)`;

            if (kalanSure === 0) {
            clearInterval(interval);
            havaButonu.disabled = false;
            havaButonuSure.textContent = ""; // Kalan süre metnini temizle
            }
        }, 1000); // Her saniye güncelle
        }



        function yenileFoto() {
    const photo = document.querySelector("#photo");
    const photoContainer = document.getElementById('photo-container');

    if (photo) {
        const newSrc = "/static/filename.png";
        photo.src = newSrc;
        photoContainer.style.visibility = '';
    } else {
        console.error("Photo element not found.");
    }
}
const photoContainer = document.getElementById('photo-container');
const photoContainer2 = document.getElementById('photo-container2');
const photo = document.querySelector("#photo");

if (photo) {
    photo.onload = function () {
    if (photoContainer2) {
        photoContainer2.style.visibility = 'hidden';

        // InnerHTML'i temizleyerek içindeki yazıları kaldır
        photoContainer2.innerHTML = '';
    }
};


const originalText = "<p>Bir Hata Oluştuğundan Dolayı Fotoğraf Yüklenemedi</p><p>Lütfen Daha Sonra Tekrar Deneyiniz</p>";

photo.onerror = function () {
    if (photoContainer) {
        photoContainer.style.visibility = 'hidden';

        photoContainer2.innerHTML = originalText;
    }
};
} else {
    console.error("Photo element not found.");
}