const url = "https://crudcrud.com/api/0b223b32b465446d86fe231a46786e69/unicorns";
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

    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((dataTugas) => {
            alert('Berhasil yey!');
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



