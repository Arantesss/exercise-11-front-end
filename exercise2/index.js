//Body Mass Index
//Rumus BMI = Berat/(tinggi*Tinggi)

if(isNaN(berat) || berat <=0 || isNaN(tinggi) || tinggi <= 0) {
    return "Masukan input yang benar! = ";
}

function hitung BMI (berat, tinggi){
    tinggiMeter = tinggi/100;

    let BMI = berat/ (tinggiMeter*tinggiMeter);
    BMI = BMI.toFixed(1);

    return BMI;
}

let BMI = calculateBMI(berat, tinggi);
console.log("Hasil BMi :", BMI);