<?php

	require_once("clases/usuario.php");
	require_once("clases/accesoDatos.php");


	$queHago = $_POST['queHacer'];


	switch($queHago)
	{
		
		case 'NuevoProducto':
			include("partes/formNuevoProducto.php");
		break;

		case 'insertarProducto':

		/*	$prodNuevo = new producto();
			$prodNuevo->nombreProd = $_POST['nombreProd'];
			$prodNuevo->precio = $_POST['precioProd'];
			$prodNuevo->insertarProducto();*/

			echo "nexo";

		break;


		
	}

?>