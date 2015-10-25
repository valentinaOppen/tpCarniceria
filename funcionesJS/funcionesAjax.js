

	function nuevoProducto()
	{

		var funcionAjax=$.ajax
		({
			url:"nexo.php",
			type:"post",
			data:{queHacer:"NuevoProducto"}
		});

		funcionAjax.done
		(
			function(retorno)
			{
				$("#principal").html(retorno);				
			}
		);

	}

	function verProductos()
	{
		alert("productos");
	}

	function verPedidos()
	{
		alert("pedidos");
	}

	function verClientes()
	{
		alert("clientes");
	}

/*function NuevoUsuario()
	{
		var funcionAjax = $.ajax
		({
			url:"nexo.php",
			type:"post",
			data:
			{
				queHacer:"nuevoUsuario"
			}
		});

		funcionAjax.done
		(
			function(retorno)
			{
				$("#principal").html(retorno);
				$("#informe").html("Correcto");
			}
		);

	}

	
	*/