// 2. Menampilkan data bulan menggunakan method map() 
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "July", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000);
}

const showMonth = (type, element) => {
    if (element.length !== 0) {
        return element.map(function (el) {
            console.log(el);
        })
    }
    console.log(type.message);
}

getMonth(showMonth);