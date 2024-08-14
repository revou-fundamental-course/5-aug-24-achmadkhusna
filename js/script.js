const button = document.getElementById('btn'); 

button.addEventListener('click', (ev) => {
    ev.preventDefault();
    
    // Ambil nilai input (umur, berat badan, tinggi badan, dan gender) serta elemen hasil, dan inisialisasi status validitas
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const result = document.getElementById('result-bmi');
    let age_status = false;
    let weight_status = false;
    let height_status = false;

    // Cek validitas umur
    if (isNaN(age) || age <= 0) {
        document.getElementById('age_error').innerHTML = "Lebih Teliti lagi ya, angka yang dimasukan tidak Valid";
    } else {
        document.getElementById('age_error').innerHTML = '';
        age_status = true;
    }

    // Cek validitas berat badan
    if (isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').innerHTML = "Lebih Teliti lagi ya, angka yang dimasukan tidak Valid";
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    // Cek validitas tinggi badan
    if (isNaN(height) || height <= 0) {
        document.getElementById('height_error').innerHTML = "Lebih Teliti lagi ya, angka yang dimasukan tidak Valid";
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    // Perhitungan BMI jika semua input valid
    if (age_status && weight_status && height_status) {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let genderText = gender === "Pria" ? "Mas," : "Mbak,";

        if (bmi < 18.6) {
            result.innerHTML = `${genderText} Indeks Masa Tubuh Kamu ${bmi}, itu berarti kamu terlalu kurus. Tetap Semangat ya ${genderText} !`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `${genderText} Indeks Masa Tubuh Kamu ${bmi}, itu berarti berat badanmu Normal ${genderText}`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = `${genderText} Indeks Masa Tubuh Kamu ${bmi}, itu berarti kamu Kelebihan berat badan. semangat ya ${genderText}`;
        } else {
            result.innerHTML = `${genderText} Indeks Masa Tubuh Kamu ${bmi}, itu berarti kamu Obesitas.dikontrol pola makannya ya ${genderText}`;
        }
    } else {
        alert("Mohon Maaf, sepertinya form yang anda masukan salah atau kosong");
        result.innerHTML = '';
    }

    const resetButton = document.querySelector('.btn-reset');

    resetButton.addEventListener('click', () => {
        document.getElementById('result-bmi').innerHTML = '';
    })

});
