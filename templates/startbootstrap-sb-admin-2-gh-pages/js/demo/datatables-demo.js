// Call the dataTables jQuery plugin
$(document).ready(function() {
  var table = $('#dataTable').DataTable({
  	searching: false,
  	select: true,
  	language: { 
	    "decimal":        "",
	    "emptyTable":     "Данные отсутствуют в таблице",
	    "info":           "Показаны записи с _START_ по _END_ из _TOTAL_",
	    "infoEmpty":      "Showing 0 to 0 of 0 entries",
	    "infoFiltered":   "(filtered from _MAX_ total entries)",
	    "infoPostFix":    "",
	    "thousands":      ",",
	    "lengthMenu":     "Показать _MENU_ записей",
	    "loadingRecords": "загрузка...",
	    "processing":     "Processing...",
	    "search":         "Search:",
	    "zeroRecords":    "По заданным условиям записей не найдено",
	    "paginate": {
	        "first":      "первый",
	        "last":       "последний",
	        "next":       "следующий",
	        "previous":   "предыдущий"
	    },
	    "aria": {
	        "sortAscending":  ": activate to sort column ascending",
	        "sortDescending": ": activate to sort column descending"
	    }
	}
  });

  $('#filtrs_tables').click(function(){

  		table.clear().draw();

    	$.ajax({
	    	url: "../welcome/tables_filtrs",
	    	cache: false,
	    	type: "POST",
	    	data: {
	    		'NumCode': $('#exampleSelect1').val(),
	    		'date1': $('#date1').val(),
	    		'date2': $('#date2').val(),
	    	},
	    	success: function(res){
	    		res = JSON.parse(res);
                if (res.length > 0) {
                    for (var i=0; i<res.length; i++) {
                    	table.row.add( [ res[i]['id'], res[i]['NumCode'], res[i]['CharCode'], res[i]['Nominal'], res[i]['Name'], res[i]['Value'], res[i]['Date'] ] ).draw();	
                    }
                } else {
	                console.log('Нет данных');
	            }
	    	}
	    });

  })


});
					