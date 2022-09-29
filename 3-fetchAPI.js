// 4. Mengambil data API menggunakan fetch() 
// Mengambil data secara keseluruhan
async function getUsers() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Mengambil hanya data namanya saja
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = user.name;
        html += htmlSegment + ` `;
    });
    console.log(html);
}

renderUsers();