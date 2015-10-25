
	function insertarProductos()
	{		
		var nombreProd = $("#nombreProd").val();
		var precioProd = $("#precioProd").val();		

		var funcionAjax = $.ajax
		({
			url:"nexo.php",
			type:"post",
			data:
			{
				queHacer:"insertarProducto",
				nombreProd:nombreProd,
				precioProd:precioProd
			}
		});
		
		funcionAjax.done
				(
					function(retorno)
					{
						alert(retorno);
						verProductos();
					}
				);

		
	}




		


