var app = new Framework7({
    // App root element
    el: "#app",
    // App Name
    name: "My App",
    // App id
    id: "com.myapp.test",
    // Enable swipe panel
    panel: {
        swipe: true,
    },

    // Add default routes
    routes: [
        {
            path: "/home/",
            pageName: "home",
            url: "./index.html",
        },
        {
            path: "/add_data_makanan/",
            url: "./pages/add_data_makanan.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    saveMakanan();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/edit_data_makanan/",
            url: "./pages/edit_makanan.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    editMakanan();
                    saveEditMakanan();
                    getDataMakanan();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/add_data_minuman/",
            url: "./pages/add_data_minuman.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    saveMinuman();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/edit_data_minuman/",
            url: "./pages/edit_minuman.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    editMinuman();
                    saveEditMinuman();
                    getDataMinuman();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/add_data_promo/",
            url: "./pages/add_data_promo.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    savePromo();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/edit_data_promo/",
            url: "./pages/edit_promo.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    editPromo();
                    saveEditPromo();
                    getDataPromo();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/menu/",
            url: "./pages/menu.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                    fetchDataMakanan();
                    fetchDataMinuman();
                },
            },
        },
        {
            path: "/makanan/",
            url: "./pages/makanan.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    menuMakanan();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/minuman/",
            url: "./pages/minuman.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    menuMinuman();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/admin/",
            url: "./pages/admin.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/loginAdmin/",
            url: "./pages/loginAdmin.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    cekLogin();
                    loginClick();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/dataMakanan/",
            url: "./pages/admin_makanan.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    getDataMakanan();
                    editMakanan();
                    deleteMakanan();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/dataMinuman/",
            url: "./pages/admin_minuman.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    getDataMinuman();
                    editMinuman();
                    deleteMinuman();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
        {
            path: "/dataPromo/",
            url: "./pages/admin_promo.html",
            on: {
                pageAfterIn: function test(e, page) {
                    // do something after page gets into the view
                    getDataPromo();
                    editPromo();
                    deletePromo();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            },
        },
    ],
});

var mainView = app.views.create('.view-main');

var $$ = Dom7;
fetchDataPromo();

// View Promo
function fetchDataPromo() {
    app.request.json( "http://localhost:85/testaplikasi/view_promo.php", function (data) {
            
        var results = data;

        let contentPromo = ``;

        for (i = 0; i < results.length; i++) {
            var titlePromo = results[i].titlePromo;
            var capPromo = results[i].capPromo;
            var skPromo = results[i].skPromo;
            var imgPromo = results[i].imgPromo;

            contentPromo += `
                <div class="card card-expandable">
                    <div class="card-content">
                    <div style="background: url(${imgPromo}) no-repeat center top; background-size: cover;height: 300px">
                        <div class="card-header text-color-black display-block">
                        ${titlePromo}
                        <br />
                        <small style="opacity: 0.7">${capPromo}</small>
                        </div>
                        <a class="link card-close card-opened-fade-in color-black"
                        style="position: absolute; right: 15px; top: 15px">
                        <i class="icon f7-icons">xmark_circle_fill</i>
                        </a>
                    </div>
                    <div class="card-content-padding">
                        <p>${skPromo}</p>
                        <p>
                        <a class="button button-fill button-round button-large card-close color-black text-color-white">Close</a>
                        </p>
                    </div>
                    </div>
                </div>
                `;
            }
                // Menambahkan elemen ke dalam elemen dengan id "content"
            $$('#viewPromo').append(contentPromo);
        }
    );
};


// View Makanan Menu
function fetchDataMakanan() {
    app.request.json( "http://localhost:85/testaplikasi/view_makanan.php", function (data) {
            
        var results = data;

        let contentMakanan = ``;

        for (i = 0; i < 2; i++) {
            var Img_Makanan = results[i].Img_Makanan;
            var Nama_Makanan = results[i].Nama_Makanan;
            var Harga_Makanan = results[i].Harga_Makanan;
            var Desk_Makanan = results[i].Desk_Makanan;

            contentMakanan += `
                <div class="card card-expandable">
                    <div class="card-content">
                        <div style="background: url(${Img_Makanan}) no-repeat center bottom; background-size: cover;background-position: center; height: 150px">
                        </div>
                        <a class="link card-close card-opened-fade-in color-white" style="position: absolute; right: 15px; top: 15px">
                            <i class="icon f7-icons">xmark_circle_fill</i>
                        </a>
                        <div class="card-header display-block" style="height: 60px">
                            ${Nama_Makanan}
                        </div>
                        <div class="card-content-padding">
                            <p>Harga :</p>
                            <p>${Harga_Makanan}</p>
                            <p>${Desk_Makanan}</p>
                            <p>
                                <a class="button button-fill button-round button-large card-close">Close</a>
                            </p>
                        </div>
                    </div>
                </div>
                `;
            }
                // Menambahkan elemen ke dalam elemen dengan id "content"
            $$('#viewMakanan').append(contentMakanan);
        }
    );
};

// View Minuman Menu
function fetchDataMinuman() {
    app.request.json( "http://localhost:85/testaplikasi/view_minuman.php", function (data) {
            
        var results = data;

        let contentMinuman = ``;

        for (i = 0; i < 2; i++) {
            var Img_Minuman = results[i].Img_Minuman;
            var Nama_Minuman = results[i].Nama_Minuman;
            var Harga_Minuman = results[i].Harga_Minuman;
            var Desk_Minuman = results[i].Desk_Minuman;

            contentMinuman += `
                <div class="card card-expandable">
                    <div class="card-content">
                        <div style="background: url(${Img_Minuman}) no-repeat center bottom; background-size: cover;background-position: center; height: 150px">
                        </div>
                        <a class="link card-close card-opened-fade-in color-white" style="position: absolute; right: 15px; top: 15px">
                            <i class="icon f7-icons">xmark_circle_fill</i>
                        </a>
                        <div class="card-header display-block" style="height: 60px">
                            ${Nama_Minuman}
                        </div>
                        <div class="card-content-padding">
                            <p>Harga :</p>
                            <p>${Harga_Minuman}</p>
                            <p>${Desk_Minuman}</p>
                            <p>
                                <a class="button button-fill button-round button-large card-close">Close</a>
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
            // Menambahkan elemen ke dalam elemen dengan id "content"
        $$('#viewMinuman').append(contentMinuman);
        }
    );
};

// View All Makanan
function menuMakanan() {
    app.request.json( "http://localhost:85/testaplikasi/view_makanan.php", function (data) {
            
        var results = data;

        let contentMakanan = ``;

        for (i = 0; i < results.length; i++) {
            var Img_Makanan = results[i].Img_Makanan;
            var Nama_Makanan = results[i].Nama_Makanan;
            var Harga_Makanan = results[i].Harga_Makanan;
            var Desk_Makanan = results[i].Desk_Makanan;

            contentMakanan += `
                <div class="card card-expandable">
                    <div class="card-content">
                        <div style="background: url(${Img_Makanan}) no-repeat center bottom; background-size: cover;background-position: center; height: 150px">
                        </div>
                        <a class="link card-close card-opened-fade-in color-white" style="position: absolute; right: 15px; top: 15px">
                            <i class="icon f7-icons">xmark_circle_fill</i>
                        </a>
                        <div class="card-header display-block" style="height: 60px">
                            ${Nama_Makanan}
                        </div>
                        <div class="card-content-padding">
                            <p>Harga :</p>
                            <p>${Harga_Makanan}</p>
                            <p>${Desk_Makanan}</p>
                            <p>
                                <a class="button button-fill button-round button-large card-close">Close</a>
                            </p>
                        </div>
                    </div>
                </div>
                `;
            }
            $$('#allMakanan').append(contentMakanan);
        }
    );
};

// View All Minuman
function menuMinuman() {
    app.request.json( "http://localhost:85/testaplikasi/view_minuman.php", function (data) {
            
        var results = data;

        let contentMinuman = ``;

        for (i = 0; i < results.length; i++) {
            var Img_Minuman = results[i].Img_Minuman;
            var Nama_Minuman = results[i].Nama_Minuman;
            var Harga_Minuman = results[i].Harga_Minuman;
            var Desk_Minuman = results[i].Desk_Minuman;

            contentMinuman += `
                <div class="card card-expandable">
                    <div class="card-content">
                        <div style="background: url(${Img_Minuman}) no-repeat center bottom; background-size: cover;background-position: center; height: 150px">
                        </div>
                        <a class="link card-close card-opened-fade-in color-white" style="position: absolute; right: 15px; top: 15px">
                            <i class="icon f7-icons">xmark_circle_fill</i>
                        </a>
                        <div class="card-header display-block" style="height: 60px">
                            ${Nama_Minuman}
                        </div>
                        <div class="card-content-padding">
                            <p>Harga :</p>
                            <p>${Harga_Minuman}</p>
                            <p>${Desk_Minuman}</p>
                            <p>
                                <a class="button button-fill button-round button-large card-close">Close</a>
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
            // Menambahkan elemen ke dalam elemen dengan id "content"
        $$('#allMinuman').append(contentMinuman);
        }
    );
};

//Login Admin
function cekLogin() {
    var status = localStorage.getItem("status");
    if(status == "login"){
    }
    else{
        app.views.main.router.navigate("/loginAdmin/");
    }
};
function loginClick(){
    $$("#masuk").click(function(){
        var Username = $$("#Username").val();
        var Password = $$("#Password").val();
        app.request({
            url: "http://localhost:85/testaplikasi/loginAdmin.php",
            type: "POST",
            data: {
                "Username" : Username,
                "Password" : Password,
            },
            dataType: 'json',
            success:function(data){
                console.log(data);
                if(data.error){
                    app.dialog.alert(data.pesan);
                }
                else{
                    $$("#Username").val("");
                    $$("#Password").val("");
                    localStorage.setItem("status","login")
                    localStorage.setItem("id",data.id_admin);
                    app.dialog.alert(data.pesan);
                    app.views.main.router.navigate("/admin/");
                }
            }
        });
    })
};


//Start Admin-Makanan
function saveMakanan(){
    $$("#saveMakanan").click(function () {
        var Nama_Makanan = $$("#nama-makanan").val();
        var Desk_Makanan = $$("#desk-makanan").val();
        var Harga_Makanan = $$("#harga-makanan").val();
        var Img_Makanan = $$("#foto-makanan")[0].files[0];

        var formData = new FormData();
        formData.append("Nama_Makanan", Nama_Makanan);
        formData.append("Desk_Makanan", Desk_Makanan);
        formData.append("Harga_Makanan", Harga_Makanan);
        formData.append("Img_Makanan", Img_Makanan);

        $.ajax({
            url: "http://localhost:85/testaplikasi/saveMakanan.php",
            method: "POST",
            data: formData,
            cache: false,
            mimeType: "multipart/form-data",
            processData: false,
            contentType: false,

            success: function (data) {
                app.dialog.alert("Menu Makanan Terupdate!");
                $$("#nama-makanan").val("");
                $$("#desk-makanan").val("");
                $$("#harga-makanan").val("");
                $$("#foto-makanan").val("");
                app.views.main.router.navigate("/dataMakanan/");
                getDataMakanan();
            },
        });
    });
};
function editMakanan(){
    $$("#dataMakanan").on("click", "#editMakanan", function () {
        var id = $$(this).data("editMakanan");
        app.request.json("http://localhost:85/testaplikasi/qid_Makanan.php", {Nama_Makanan:id}, function(data){
            $$('#eNama_Makanan').val(data[0].Nama_Makanan);
            $$('#eDesk_Makanan').val(data[0].Desk_Makanan);
            $$('#eHarga_Makanan').val(data[0].Harga_Makanan);
            $$('#eImg_Makanan').val(data[0].Img_Makanan);
        });
    });
};
function deleteMakanan(){
    $$("#dataMakanan").on("click", "#deleteMakanan", function () {
        var id = $$(this).data("deleteMakanan");
        app.request.post("http://localhost:85/testaplikasi/deleteMakanan.php", {Nama_Makanan:id}, function(data){
            app.dialog.alert("Menu Berhasil Dihapus!");
            getDataMakanan();
        });
    });
};
function saveEditMakanan(){
    $$('#saveEditMakanan').click(function(){
        var Nama_Makanan = $$('#eNama_Makanan').val();
        var Desk_Makanan = $$('#eDesk_Makanan').val();
        var Harga_Makanan = $$('#eHarga_Makanan').val();
        var Img_Makanan = $$('#eImg_Makanan').val();

        app.request({
            url: "http://localhost:85/testaplikasi/editMakanan.php",
            type:"POST",
            data:{
                'Nama_Makanan':Nama_Makanan,
                'Desk_Makanan':Desk_Makanan,
                'Harga_Makanan':Harga_Makanan,
                'Img_Makanan':Img_Makanan,
            },
            success:function(data){
                app.dialog.alert("Menu Berhasil Diubah!");
                $$("#eNama_Makanan").val("");
                $$("#eDesk_Makanan").val("");
                $$("#eHarga_Makanan").val("");
                $$("#eImg_Makanan").val("");
                app.views.main.router.navigate("/dataMakanan/");
                getDataMakanan();
            },
        });
    });
};
function getDataMakanan(){
    app.request.json("http://localhost:85/testaplikasi/view_makanan.php", function(data){
        var amount = data.length;
        var i = "";
        var tabelDataMakanan = "";
        for (i = 0; i <amount; i++){
            tabelDataMakanan +=
                "<tr>" +
                "<td class='label-cell'>" +data[i].Nama_Makanan +"</td>" +
                "<td class='label-cell'>" +data[i].Desk_Makanan +"</td>" +
                "<td class='label-cell'>" +data[i].Harga_Makanan +"</td>" +
                "<td class='label-cell'><img src= '" +data[i].Img_Makanan +"' height='100px' width='100px'></td>" +
                "<td class='label-cell'><a href='/edit_data_makanan/' id='editMakanan' data-editMakanan='"+data[i].Nama_Makanan+"'><i class='f7-icons'>pencil_circle_fill</i></a>&nbsp;"+"<a href='' id='deleteMakanan' data-deleteMakanan='"+data[i].Nama_Makanan+"'><i class='f7-icons'>trash_circle</i></a></td>"+
                "</tr>"
        }
        $$("#dataMakanan").html(tabelDataMakanan);
    });
};
//End Admin-Makanan

//Start Admin-Minuman
function saveMinuman() {
    $$("#saveMinuman").click(function () {
        var Nama_Minuman = $$("#nama-minuman").val();
        var Desk_Minuman = $$("#desk-minuman").val();
        var Harga_Minuman = $$("#harga-minuman").val();
        var Img_Minuman = $$("#foto-minuman")[0].files[0];

        var formData = new FormData();
        formData.append("Nama_Minuman", Nama_Minuman);
        formData.append("Desk_Minuman", Desk_Minuman);
        formData.append("Harga_Minuman", Harga_Minuman);
        formData.append("Img_Minuman", Img_Minuman);

        $.ajax({
            url: "http://localhost:85/testaplikasi/saveMinuman.php",
            method: "POST",
            data: formData,
            cache: false,
            mimeType: "multipart/form-data",
            processData: false,
            contentType: false,

            success: function (data) {
                app.dialog.alert("Menu Minuman Terupdate!");
                $$("#nama-minuman").val("");
                $$("#desk-minuman").val("");
                $$("#harga-minuman").val("");
                $$("#foto-minuman").val("");
                app.views.main.router.navigate("/dataMinuman/");
                getDataMinuman();
            },
        });
    });
};
function editMinuman(){
    $$("#dataMinuman").on("click", "#editMinuman", function () {
        var id = $$(this).data("editMinuman");
        app.request.json(
            "http://localhost:85/testaplikasi/qid_Minuman.php",
            { Nama_Minuman: id },
            function (data) {
                $$("#eNama_Minuman").val(data[0].Nama_Minuman);
                $$("#eDesk_Minuman").val(data[0].Desk_Minuman);
                $$("#eHarga_Minuman").val(data[0].Harga_Minuman);
                $$("#eImg_Minuman").val(data[0].Img_Minuman);
            }
        );
    });
};
function deleteMinuman(){
    $$("#dataMinuman").on("click", "#deleteMinuman", function () {
        var id = $$(this).data("deleteMinuman");
        app.request.post("http://localhost:85/testaplikasi/deleteMinuman.php", {Nama_Minuman:id}, function(data){
            app.dialog.alert("Menu Berhasil Dihapus!");
            getDataMinuman();
        });
    });
};
function saveEditMinuman() {
    $$("#saveEditMinuman").click(function () {
        var Nama_Minuman = $$("#eNama_Minuman").val();
        var Desk_Minuman = $$("#eDesk_Minuman").val();
        var Harga_Minuman = $$("#eHarga_Minuman").val();
        var Img_Minuman = $$("#eImg_Minuman").val();

        app.request({
            url: "http://localhost:85/testaplikasi/editMinuman.php",
            type: "POST",
            data: {
                Nama_Minuman: Nama_Minuman,
                Desk_Minuman: Desk_Minuman,
                Harga_Minuman: Harga_Minuman,
                Img_Minuman: Img_Minuman,
            },
            success: function (data) {
                app.dialog.alert("Menu Berhasil Diubah!");
                $$("#eNama_Minuman").val("");
                $$("#eDesk_Minuman").val("");
                $$("#eHarga_Minuman").val("");
                $$("#eImg_Minuman").val("");
                app.views.main.router.navigate("/dataMinuman/");
                getDataMinuman();
            },
        });
    });
};
function getDataMinuman(){
    app.request.json("http://localhost:85/testaplikasi/view_minuman.php", function(data){
        var amount = data.length;
        var i = "";
        var tabelDataMinuman = "";
        for (i = 0; i <amount; i++){
            tabelDataMinuman +=
                "<tr>" +
                "<td class='label-cell'>" +data[i].Nama_Minuman +"</td>" +
                "<td class='label-cell'>" +data[i].Desk_Minuman +"</td>" +
                "<td class='label-cell'>" +data[i].Harga_Minuman +"</td>" +
                "<td class='label-cell'><img src= '" +data[i].Img_Minuman +"' height='100px' width='100px'></td>" +
                "<td class='label-cell'><a href='/edit_data_minuman/' id='editMinuman' data-editMinuman='"+data[i].Nama_Minuman+"'><i class='f7-icons'>pencil_circle_fill</i></a>&nbsp;"+"<a href='' id='deleteMinuman' data-deleteMinuman='"+data[i].Nama_Minuman+"'><i class='f7-icons'>trash_circle</i></a></td>"+
                "</tr>"
        }
        $$("#dataMinuman").html(tabelDataMinuman);
    });
};
//End Admin-Minuman

//Start Admin-Promo
function savePromo() {
    $$("#savePromo").click(function () {
        var titlePromo = $$("#title-promo").val();
        var capPromo = $$("#cap-promo").val();
        var skPromo = $$("#sk-promo").val();
        var imgPromo = $$("#foto-promo")[0].files[0];

        var formData = new FormData();
        formData.append("titlePromo", titlePromo);
        formData.append("capPromo", capPromo);
        formData.append("skPromo", skPromo);
        formData.append("imgPromo", imgPromo);

        $.ajax({
            url: "http://localhost:85/testaplikasi/savePromo.php",
            method: "POST",
            data: formData,
            cache: false,
            mimeType: "multipart/form-data",
            processData: false,
            contentType: false,

            success: function (data) {
                app.dialog.alert("Menu Promo Terupdate!");
                $$("#title-promo").val("");
                $$("#cap-promo").val("");
                $$("#sk-promo").val("");
                $$("#foto-promo").val("");
                app.views.main.router.navigate("/dataPromo/");
                getDataPromo();
            },
        });
    });
};
function editPromo() {
    $$("#dataPromo").on("click", "#editPromo", function () {
        var id = $$(this).data("editPromo");
        app.request.json(
            "http://localhost:85/testaplikasi/qid_Promo.php",
            { titlePromo: id },
            function (data) {
                $$("#etitlePromo").val(data[0].titlePromo);
                $$("#ecapPromo").val(data[0].capPromo);
                $$("#eskPromo").val(data[0].skPromo);
                $$("#eimgPromo").val(data[0].imgPromo);
            }
        );
    });
};
function deletePromo(){
    $$("#dataPromo").on("click", "#deletePromo", function () {
        var id = $$(this).data("deletePromo");
        app.request.post("http://localhost:85/testaplikasi/deletePromo.php", {titlePromo:id}, function(data){
            app.dialog.alert("Menu Berhasil Dihapus!");
            getDataPromo();
        });
    });
};
function saveEditPromo() {
    $$("#saveEditPromo").click(function () {
        var titlePromo = $$("#etitlePromo").val();
        var capPromo = $$("#ecapPromo").val();
        var skPromo = $$("#eskPromo").val();
        var imgPromo = $$("#eimgPromo").val();

        app.request({
            url: "http://localhost:85/testaplikasi/editPromo.php",
            type: "POST",
            data: {
                titlePromo: titlePromo,
                capPromo: capPromo,
                skPromo: skPromo,
                imgPromo: imgPromo,
            },
            success: function (data) {
                app.dialog.alert("Menu Berhasil Diubah!");
                $$("#etitlePromo").val("");
                $$("#ecapPromo").val("");
                $$("#eskPromo").val("");
                $$("#eimgPromo").val("");
                app.views.main.router.navigate("/dataPromo/");
                getDataPromo();
            },
        });
    });
};
function getDataPromo(){
    app.request.json("http://localhost:85/testaplikasi/view_promo.php", function(data){
        var amount = data.length;
        var i = "";
        var tabelDataPromo = "";
        for (i = 0; i <amount; i++){
            tabelDataPromo +=
                "<tr>" +
                "<td class='label-cell'>" +data[i].titlePromo +"</td>" +
                "<td class='label-cell'>" +data[i].capPromo +"</td>" +
                "<td class='label-cell'>" +data[i].skPromo +"</td>" +
                "<td class='label-cell'><img src= '" +data[i].imgPromo +"' height='100px' width='100px'></td>" +
                "<td class='label-cell'><a href='/edit_data_promo/' id='editPromo' data-editPromo='"+data[i].titlePromo+"'><i class='f7-icons'>pencil_circle_fill</i></a>&nbsp;"+"<a href='' id='deletePromo' data-deletePromo='"+data[i].titlePromo+"'><i class='f7-icons'>trash_circle</i></a></td>"+
                "</tr>"
        }
        $$("#dataPromo").html(tabelDataPromo);
    });
};
//End Admin-Promo