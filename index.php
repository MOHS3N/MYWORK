<?php
include_once("./script/php/functions.php")
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Nixy Diynamic Image Gallery</title>
<link rel="stylesheet" href="script/style/style.css" type="text/css"/>
<script type="text/javascript" language="javascript" src="script/js/jquery.js"></script>
<script type="text/javascript" language="javascript" src="script/js/script.js"></script>
</head>

<body>
	<div class="cont">
    	<div class="bn">
        <ul>
        	<li class="back">Back</li>
            <li class="next">Next</li>
        </ul>
        </div>
    	<div class="banner">
        	<div class="scrool">
               <?php slide('./img');?>
            </div>
        </div>
       <div class="menu"></div>
    </div>

</body>
</html>