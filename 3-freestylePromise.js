// 3. Mengaplikasikan promise dengan bebas
// 1. Mengecek ketersediaan hp di storage
const availableHP = (availability) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const listHP = ['asus', 'xiaomi', 'iphone', 'sony']
            let cek = listHP.find((item) => {
                return item === availability;
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error({
                    date: new Date(2022, 09, 30),
                    location: 'online'
                }))
            }
        }, 3000)
    });
}

availableHP('xiaomi')
    .then((check) => {
        const textOutput = `HP merk ${check} tersedia, silakan langsung order`
        console.log(textOutput);
    })
    .catch((err) => {
        const {
            date,
            location
        } = err.message;
        console.log(`Maaf hp belum tersedia, sila tunggu restock pada tanggal ${date} di ${location}`);
    })

// 2. Mencari tahu apakah jadi pergi ke bioskop atau tidak

const watchingMovie = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const isMovieDisplayed = false;
            if (isMovieDisplayed) {
                return resolve({
                    place: XXI,
                    time: 'malam ini'
                })
            }
            return reject(
                new Error(`Gajadi pergi soalnya filmnya belum keluar`));
        }, 3000)
    });
}

watchingMovie()
    .then((check) => {
        const {
            place,
            time
        } = check;
        const textOutput = `Yuk nonton film di ${place} buat ${time}`
        console.log(textOutput);
    })
    .catch((err) => {
        console.log(err.message);
    })

// async function nonton() {
//     try {
//         const {
//             place,
//             time
//         } = dest;
//         console.log(`Yuk nonton di ${place} waktunya ${time} 😎`);
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// nonton()