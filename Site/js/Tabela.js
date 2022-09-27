$(function () {
    var json = [ {
        "Loker": "Av Mutinga", "Cliente":"Jose", "Pedido": 7639141, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Shop Tiete", "Cliente":"Maria", "Pedido": 7639142, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Renato", "Pedido": 7639143, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Emerson", "Pedido": 7639144, "Telefone":"11-984524412", "Data de Criação":"24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Esdra", "Pedido": 7639145, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Av Mutinga", "Cliente":"Jose", "Pedido": 7639141, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Av Mutinga", "Cliente":"Jose", "Pedido": 7639141, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Shop Tiete", "Cliente":"Maria", "Pedido": 7639142, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Renato", "Pedido": 7639143, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Emerson", "Pedido": 7639144, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Esdra", "Pedido": 7639145, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Av Mutinga", "Cliente":"Jose", "Pedido": 7639141, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Emerson", "Pedido": 7639144, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Esdra", "Pedido": 7639145, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Av Mutinga", "Cliente":"Jose", "Pedido": 7639141, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Emerson", "Pedido": 7639144, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },{
        "Loker": "Shop Tiete", "Cliente":"Esdra", "Pedido": 7639145, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    }, {
        "Loker": "Av Mutinga", "Cliente":"Jose", "Pedido": 7639141, "Telefone":"11-984524412", "Data de Criação": "24/11/2020", "Status": "Depositado"
    },
    ];
    $('#example').DataTable({
        initComplete: function(){
            this.api().columns().every( function (){
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on('change', function(){
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
                        column
                        .search(val ? '^'+val+'$' : '', true, false )
                        .draw();
                    });
                    column.data().unique().sort().each(function (d, j){
                        select.append('<option value= "'+d+'">'+d+'</option>' )
                    });
            });
        },
        "aaData": json,
        "aoColumns": [
            { "mDataProp": "Loker" },
            { "mDataProp": "Cliente" },
            { "mDataProp": "Pedido" },
            { "mDataProp": "Telefone" },
            { "mDataProp": "Data de Criação" },
             { "mDataProp": "Status" }
        ],
    });
});