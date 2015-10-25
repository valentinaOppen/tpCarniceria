<?php

	class producto
	{		
		public $nombreProd;
		public $precio;
		
		
		public static function traerTodos()
		{
			$objetoAcceso = accesoDatos::dameAcceso();
			$consulta = $objetoAcceso->retornarConsulta('CALL traerTodosProductos()');
			$consulta->execute();				
			return $consulta->fetchAll(PDO::FETCH_CLASS, "producto");	
		}

		public function insertarProducto()
		{
			$objetoAcceso = accesoDatos::dameAcceso();
			$consulta = $objetoAcceso->retornarConsulta("CALL insertarProducto('$this->nombreProd', '$this->precio')");			
			$consulta->execute();
		}
				

	}



?>