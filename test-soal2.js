function validate() {
    var re = /^[A-Za-z]+$/;

    if(re.test(document.getElementById("input").value))
        alert("Sistem memeriksa data anda valid, hello Welcome");
    else {
        alert("Sistem kami menolak untuk inputan berisi angka");
    }
}