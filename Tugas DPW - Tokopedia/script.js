$(document).ready(function() {

    $("#nomor").change(function() {
        if ($("#nomor").val() > 1) {
            $("#pulsa-1").prop("disabled", false);
            $(".paket-1").prop("disabled", false);
        } else {
            $("#pulsa-1").prop("disabled", true);
            $(".paket-1").prop("disabled", true);
        }
    });

    $("#nomor").keypress(function(value) {
        if (value.which != 8 && value.which != 0 && (value.which < 48 || value.which > 57)) {
            return false;
        }
    });

    $("#pulsa-1").change(function() {
        $("#btn1").prop("disabled", false);
        $("#btn1").css('background-color', '#fa591d');
        $("#btn1").css('color', 'white');
    });

    $(".paket-1").change(function() {
        $(".btn2").prop("disabled", false);
        $(".btn2").css('background-color', '#fa591d');
        $(".btn2").css('color', 'white');
    });

    $("#kat-pulsa").click(function() {
        $("#kat-pulsa").css("border-bottom", "2px solid #03ac0e");
        $("#kat-pulsa").css("color", "#03ac0e");
        $("#kat-paket-data").css("color", "#929292");
        $("#kat-paket-data").css("border-bottom", "2px solid transparent");
        $(".paket-1").prop("hidden", true);
        $("#pulsa-1").prop("hidden", false);
        $("#btn1").prop("hidden", false);
        $(".btn2").prop("hidden", true);
        $("#nomor").val("");
        $("#pulsa-1").val("");
        $("#btn1").prop("disabled", true);
        $("#btn1").css("background-color", "#4950572e");
        $("#btn1").css("color", "#929292");
        $("#pulsa-1").prop("disabled", true);
    })

    $("#kat-paket-data").click(function() {
        $("#kat-paket-data").css("border-bottom", "2px solid #03ac0e");
        $("#kat-paket-data").css("color", "#03ac0e");
        $("#kat-pulsa").css("color", "#929292");
        $("#kat-pulsa").css("border-bottom", "2px solid transparent");
        $("#pulsa-1").prop("hidden", true);
        $(".paket-1").prop("hidden", false);
        $("#btn1").prop("hidden", true);
        $(".btn2").prop("hidden", false);
        $('#nomor').val('');
        $(".paket-1").val("");
        $(".btn2").prop("disabled", true);
        $(".btn2").css("background-color", "#4950572e");
        $(".btn2").css("color", "#929292");
        $(".paket-1").prop("disabled", true);
    })

    $("#btn1").click(function() {
        var value = $("#pulsa-1").val();
        var convert = parseInt(value);
        if (value == "0") {
            alert("Pilihan error karna pilihan tidak sesuai! Coba diubah kembali!");
        }else if (convert < 10) {
            convert += 3000;
        } else if (convert >= 10){
            convert += 2000 ;
        }
        if (value != "0") {
            const verif = confirm("Pembelian pulsa sebesar Rp. " + value.substring(0, value.length - 3) + "." + value.substring(value.length - 3) + " ke nomor " + $("#nomor").val());
            if (verif) 
            alert("Selamat anda telah membeli pulsa sebesar Rp. " + convert);
        } else {

        }
        $("#nomor").val("");
        $("#pulsa-1").val("");
        $("#btn1").prop("disabled", true);
        $("#btn1").css("background-color", "#4950572e");
        $("#btn1").css("color", "#929292");
    });

    $(".btn2").click(function() {
        const pilihanItem = $(".paket-1").children("option:selected").text();
        if (pilihanItem === "Pilih") {
            alert("Pilihan error karna pilihan tidak sesuai! Coba diubah kembali!");
        } else {
            let harga = pilihanItem.substring(pilihanItem.length - 10);
            let verif = confirm("Pembelian paket data " + pilihanItem + " ke nomor " + $("#nomor").val());
            if (verif) {
                alert("Total harga paket data " + harga + ",- ke nomor " + $("#nomor").val() + " sedang di proses. Terima kasih :)");
            } else {

            }
        }
        $('#nomor').val('');
        $(".paket-1").val("");
        $(".btn2").prop("disabled", true);
        $(".btn2").css("background-color", "#4950572e");
        $(".btn2").css("color", "#929292");
    });

});
