<!DOCTYPE html>
<html>
    <head>
        <title>TechWizard-Error</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php // include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

        <!--    LIBRESRIAS LOCALES  -->
        <link rel="stylesheet" href="../../css/error.css">
        <script src="../../js/error/error.js"></script>
        <!--    FIN LIBRERIAS LOCALES   -->
        <style type="text/css">
            html,body{  
                height: 100%;
            }
            #holder {   
                min-height: 100%;
                position:relative;
                /* Firefox */
                min-height: -moz-calc(100% - 30px);
                /* WebKit */
                min-height: -webkit-calc(100% - 30px);
                /* Opera */
                min-height: -o-calc(100% - 30px);
                /* Standard */
                min-height: calc(100% - 30px);
            }
            #footer{
                height:30px;
                margin: 0;
                clear: both;
                width:100%;
                position: relative;
            }
        </style>
    </head>
    
<body>
    <div id="nonFooter">header,middle,left,right,etc</div>
    <div id="footer">lalala</div>
</body>
</html>