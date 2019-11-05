var minVolume = 0;

const maxVolume = 100;

console.log(maxVolume);

function perkalian(angka1, angka2, angka3, angka4) {
    // const angka1 = 4;
    // const angka2 = 8;

    const hasilperkalian = (angka1 * angka2) + angka3 + angka4;

    console.log("hasil perkalian", hasilperkalian);
}

perkalian(8,9,12,2)

const kardus = ["apel","jeruk","buku"]

for (let i = 0; i < kardus.length; i++) {
    console.log(kardus[i])
}

var toggle = true;

if (toggle) {
    console.log("menu terbuka")
} else {
    console.log("menu tertutup")
}

const nama ="ikram";

switch (nama) {
    case "aan": {
        console.log ("aan")
        break;
    }
    case "ikram": {
        console.log ("ikram")
        break;
    }
    default: {
        console.log ("tidak ada yang sama")
        break;
    }
}