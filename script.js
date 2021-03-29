// Tombol Kirim
const btnKirim = document.querySelector('#btnKirim');
const btnLoading = document.querySelector('#btnLoading');
btnKirim.addEventListener('click', function () {
    this.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
});