<?php 

$routeImgDir="../img/baking/favicon.ico";
$routeCssDir="../css/".$_SERVER["SERVER_NAME"]."/style.css";

?>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="author" content="BakingSoftware">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<script>
	var language='<?php  echo $_SESSION['lang']; ?>';
	var FORMAT0001='<?php  echo $_SESSION['FORMAT0001']; ?>';
	var FORMAT0002='<?php  echo $_SESSION['FORMAT0002']; ?>';
</script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="../js/lib/jquery-1.11.1.min.js" type="text/javascript"><\/script>')</script>
<script src="../js/lib/jquery.widget.min.js"></script>
<script src="../js/lib/angular-1.0.7.min.js"></script>
<script src="../js/default/default.js"></script>
<script src="../lib/metro/min/metro.min.js"></script>

<link rel="shortcut icon" href="<?php echo $routeImgDir; ?>" type="image/x-icon" />
    
<link rel="stylesheet" href="../lib/metro/min/iconFont.min.css">
<link rel="stylesheet" href="../lib/metro/min/metro-bootstrap.min.css">
<link rel="stylesheet" href="../lib/metro/min/metro-bootstrap-responsive.min.css">
<link rel="stylesheet" href="<?php echo $routeCssDir; ?>">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
<?php include'../settings/companies.php'; ?>