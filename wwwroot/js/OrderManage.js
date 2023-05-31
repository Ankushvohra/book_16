var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/OrdersManagement/GetAll",
        },
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "oderDate", "width": "20%" },
            { "data": "orderstatus", "width": "20%" },
            { "data": "phoneNumber", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="text-center">
                            <a class="btn btn-outline-primary" href="/Admin/OrdersManagement/Details/${data}">
                                Details
                            </a>
                        </div>
                    `;
                }
            }
        ]
    });
}

function loadPendingOrders() {
    dataTable.destroy();
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/OrdersManagement/GetP",
        },
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "oderDate", "width": "20%" },
            { "data": "orderstatus", "width": "20%" },
            { "data": "phoneNumber", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="text-center">
                            <a class="btn btn-outline-primary" href="/Admin/OrdersManagement/Details/${data}">
                                Details
                            </a>
                        </div>
                    `;
                }
            }
        ]
    });
}
function loadsuccedOrders() {
    dataTable.destroy();
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/OrdersManagement/GetS",
        },
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "oderDate", "width": "20%" },
            { "data": "orderstatus", "width": "20%" },
            { "data": "phoneNumber", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="text-center">
                            <a class="btn btn-outline-primary" href="/Admin/OrdersManagement/Details/${data}">
                                Details
                            </a>
                        </div>
                    `;
                }
            }
        ]
    });
}
function Dateandtime() {
    var fromDate = $('#fromDate').val();
    var toDate = $('#toDate').val();
    dataTable.destroy();
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/OrdersManagement/GetT",
            "data": {
                fromDate: fromDate,
                toDate: toDate
            }
        },
        "columns": [
            { "data": "name", "width": "10%" },
            { "data": "oderDate", "width": "30%" },
            { "data": "orderstatus", "width": "20%" },
            { "data": "phoneNumber", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="text-center">
                            <a class="btn btn-outline-primary" href="/Admin/OrdersManagement/Details/${data}">
                                Details
                            </a>
                        </div>
                    `;
                }
            }
        ]
    });
}
