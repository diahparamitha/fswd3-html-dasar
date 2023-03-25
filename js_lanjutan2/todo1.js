const baseUrl = "https://crudcrud.com/api/";
const apiKey = "ef225aebac2c40dcab949ce0d3cbab3e";
const url = baseUrl + apiKey;
const endpoint = `${url}/todos`;

let dataTugas = localStorage.getItem('dataTugas') ? JSON.parse(localStorage.getItem('dataTugas')) : [];

function showTugas(){
    var listTugas = document.getElementById("list-tugas");
    // clear list tugas
    listTugas.innerHTML = " ";

    // cetak semua tugas
        for(let i = 0; i < dataTugas.length; i++) {
        var btnEdit = "<a href='#' onclick='editTugas("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteTugas("+i+")'>Hapus</a>";

        listTugas.innerHTML += "<li>" + dataTugas[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
            }
        }      
    

function addTugas(){
    var input = document.querySelector("input[name=tugas]");
    dataTugas.push(input.value);
    localStorage.setItem('dataTugas', JSON.stringify(dataTugas));
    showTugas();

    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(dataTugas),
    })
        .then((result) => result.json())
        .then((dataTugas) => {
            console.log(dataTugas);
        })
}

function editTugas(id){
    var newTugas = prompt("Nama baru", dataTugas[id]);
    dataTugas[id] = newTugas;
    localStorage.setItem('dataTugas', JSON.stringify(dataTugas));
    showTugas();
}

function deleteTugas(id){
    dataTugas.splice(id, 1);
    localStorage.setItem('dataTugas', JSON.stringify(dataTugas));
    showTugas();
}

showTugas();



