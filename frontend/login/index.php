<?php

$url = "http://" . $_SERVER['SERVER_NAME'];

if($url=="http://tw.iblau.cl"){
	$url="http://tw.iblau.cl:81";
}

?>
<!DOCTYPE html>
<html class="loading">

    <head>
        <title>TechWizard</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

       <!--    LIBRESRIAS LOCALES  -->      
<!--		<script src="../js/default/detectBrowser.js"></script> -->
        <script>
        	var language="<?php echo $company[$_SERVER["SERVER_NAME"]]['LANGUAGE']; ?>";
        </script>
        <script src="../js/login/jquery/load.js"></script>
        <script src="../js/login/jquery/login.js"></script>
        <script src="../js/login/angular/app.js"></script>
        <script src="../js/login/jquery/keypress.js"></script>
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/login.css"; ?>">
        
<!--		<link rel="stylesheet" href="style.css">	-->
        <!--    FIN LIBRERIAS LOCALES   -->

    </head>
    
<body class="metro" ng-app ng-controller="mainController">

	<div id="wrapper">
<!--		<div id="header">hola1</div>	-->
		<div id="content">
			<div id="distance"></div>
		
			<div class="login">
				
				<div class="loginTop">
				<!--
					<h2>
						<i class=""></i>Login<img style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODALSTYLE']; ?>" src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODAL']; ?>" />
					</h2>
				-->
					<div style="line-height: 35px;">
					<i class="icon-key"></i><strong> {{login_text1}}</strong>
					<!--
					<img style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODALSTYLE']; ?>" src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODAL']; ?>" />
					-->
					</div>	
					
					
				</div>
		        
		        <div class="loginBody">
		        	<form id="login_formLogin" name="login" action="../ajax/login/accessLogin.php" autocomplete="off" method="POST">		
			        	<div class="loginHead">
			        		<div class="loginMessageDescription">
			        			<strong>{{login_text2}}</strong>
			        		</div>
			        		<div class="loginMessageError">
			        			<strong></strong>
			        		</div>
			        	</div>		        	
			        	<div class="loginMain">
			        		<div class="input-control text"> 
			                    <input type="text" name="inputLoginUser" maxlength="10" placeholder="{{login_text5}}" autocomplete="off" autofocus/>
			                    <button class="btn-clear"></button>
			                </div>
			             	<div class="input-control password" data-role="input-control">
			                    <input type="password" name="inputLoginPassword" maxlength="10" placeholder="{{login_text6}}">
			                    <button class="btn-reveal" tabindex="-1"></button>
			                </div>
			                
			                <div class="radiobuttonSet" style="line-height: 5px;">
								<label style="float: left; font-size: 13px; margin-right: 10px;"><strong>{{login_text7}}:</strong></label>
								<button style="vertical-align: middle; float: left; margin-right: 10px;" name="buttonLoginLanguage" class="radiobuttonButton mini" type="button" value="es">
									<i class="icon-checkmark" style="display: none"></i>
									 {{login_text8}}
								</button>
								
								<button style="vertical-align: middle; float: left; margin-right: 10px;" name="buttonLoginLanguage" class="radiobuttonButton mini" type="button" value="en">
									<i class="icon-checkmark" style="display: none"></i>
									 {{login_text9}}
								</button>
								
								<button style="vertical-align: middle; float: left; margin-right: 10px;" name="buttonLoginLanguage" class="radiobuttonButton mini" type="button" value="pt_BR">
									<i class="icon-checkmark" style="display: none"></i>
									{{login_text11}}
								</button>
								
							</div>
							
			        	</div>
			        	<div class="loginFoot">
			        		<div class="loginMessageRequired">
			        			<strong>{{login_text3}}</strong>
			        		</div>
			        		<div class="loginButtons">
			        			<button type="submit" class="" name="loginButtonLogin">{{login_text4}}</button>	
			        		</div>
			        		
		                </div>
		        	</form>	
		        </div>  
	        
	        	<div class="loginFooter">
	        		<!--
	        		<img src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODAL']; ?>" style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODALSTYLE']; ?>" />
	        		-->
	        	</div>
	        	
			</div>	

		</div>
		
		
		<footer>
        	<?php include'../includes/footer.php'; ?>
    	</footer>
	</div>

</body>
</html>
