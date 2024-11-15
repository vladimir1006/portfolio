<?php require_once "config/config.php"; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/films.css">
    <link rel="stylesheet" href="style/index.css">
    <link rel="icon" type="image/x-icon" href="images/pirate.ico">
    <title>galerie</title>
</head>
<body>
    <?php require_once "resources/iframe.html";?>
<div id="body">
       
    <table>
        <?php
        for($i = 0; $i < sizeof($ARRAY_IMG) ; $i++){
            echo "<tr>";
            foreach( $ARRAY_IMG[$i] as &$img ){
                echo '<th><img src="' . $DIR_IMG . $img . '" alt=" ' . $img . '" class="image" ></th>'; 
            }
            echo "</tr>";
        }
        ?>
        </tr>
    </table>

</div>

</body>
</html>
