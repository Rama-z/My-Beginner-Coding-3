// 1. Mempraktekan penggunaan handling then-and-catch dan try-and-catch
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error(`Hari ini bukan hari kerja`))
            }
        }, 3000)
    });
}

// Pertama adalah penggunaan then-and-catch
// then and catch lebih fokus ke then sebagai handler dan melempar sisanya kepada catch
// Jangan cuma console.log
cekHariKerja('selasa')
    .then((dayDate) => {
        const textOutput = `Hari ini adalah hari ${dayDate} yang merupakan hari kerja, selamat bekerja!`;
        console.log(textOutput);
    })
    .catch((err) => {
        console.log(err.message);
    })
    .finally(() => {
        console.log('Loading selesai');
    })

// Kedua adalah penggunaan try-and-catch
// try and catch lebih ke analisis terhadap error  
// Jangan cuma console.log
async function cobaAsync() {
    try {
        const coba = await cekHariKerja('senin');
        console.log(coba);
    } catch (err) {
        console.log(err.message);
    }
}

cobaAsync()