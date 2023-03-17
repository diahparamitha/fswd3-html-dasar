let dataTugas = localStorage.getItem('dataTugas') ? JSON.parse(localStorage.getItem('dataTugas')) : [];

function showTugas(){
    var listTugas = document.getElementById("list-tugas");
    // clear list tugas
    listTugas.innerHTML = " ";

    // cetak semua tugas
    for(let i = 0; i < dataTugas.length; i++){
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



