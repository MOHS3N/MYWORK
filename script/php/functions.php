<?php
		function slide($dirc){	   
	$opendir = dir($dirc);
	
		$dir = $dirc;

		$type  = array('jpg','png','gif','jpeg' );

		while ($file = $opendir->read()) {

			$imgtype = end(explode('.', $file));

			if( !in_array( strtolower($imgtype),$type) ) continue;{

			echo "<div style='background-image:url(img/$file);'></div>";

			
		}
	}
		}
?>