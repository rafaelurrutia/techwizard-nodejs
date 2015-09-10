<?php

switch($_SESSION['lang']) {
	case 'es':
		$source="../json/default/sidebar-es.json";
		break;
	case 'en':
		$source="../json/default/sidebar.json";
		break;
	case 'pt_BR':
		$source="../json/default/sidebar-pt_BR.json";
		break;	
	default:   	
}

$string = file_get_contents($source);
$elementsHtml=json_decode($string);

unset($elementsHtml->data[$sidebar]);

if($sidebar==0){	//	Administracion
	$permiso = split ("\|", $_SESSION['access']);
	
	$p1=split ("\,", $permiso[4]);
	$p2=split ("\,", $permiso[5]);
	$p3=split ("\,", $permiso[6]);
	$p4=split ("\,", $permiso[7]);
	$p5=split ("\,", $permiso[8]);
	$p6=split ("\,", $permiso[9]);
	$p7=split ("\,", $permiso[10]);
	
	if($p1[1]==0 && $p2[1]==0 && $p3[1]==0 && $p4[1]==0 && $p5[1]==0 && $p6[1]==0 && $p7[1]==0){
		$accessGraphics="0";
	}else{
		$accessGraphics="1";
	}
	
	$permiso[2]=split ("\,", $permiso[2]);
	$permiso[3]=split ("\,", $permiso[3]);
	
	$permiso[4]=split ("\,", $permiso[4]);
	$permiso[5]=split ("\,", $permiso[5]);
	$permiso[6]=split ("\,", $permiso[6]);
	$permiso[7]=split ("\,", $permiso[7]);
	$permiso[8]=split ("\,", $permiso[8]);
	$permiso[9]=split ("\,", $permiso[9]);
	$permiso[10]=split ("\,", $permiso[10]);
	
	$arrayAccessL1=array($permiso[2][1],$permiso[3][1],$accessGraphics);
	$arrayAccessL2=array($permiso[4][1],$permiso[5][1],$permiso[6][1],$permiso[7][1],$permiso[8][1],$permiso[9][1],$permiso[10][1]);

}else if($sidebar==1){	//	Reportes
	$permiso = split ("\|", $_SESSION['access']);
	
	$p1=split ("\,", $permiso[11]);
	$p2=split ("\,", $permiso[12]);
	$p3=split ("\,", $permiso[13]);
	$p4=split ("\,", $permiso[14]);
	
	if($p1[1]==0 && $p2[1]==0 && $p3[1]==0 && $p4[1]==0){
		$accessGraphics="0";
	}else{
		$accessGraphics="1";
	}
	
	$permiso[0]=split ("\,", $permiso[0]);
	$permiso[1]=split ("\,", $permiso[1]);
	
//	$permiso[11]=split ("\,", $permiso[11]);
	$permiso[11]=0;
	
	$permiso[12]=split ("\,", $permiso[12]);
//	$permiso[13]=split ("\,", $permiso[13]);
	$permiso[13]=0;
	$permiso[14]=split ("\,", $permiso[14]);
	
		
	$arrayAccessL1=array($permiso[0][1],$permiso[1][1],$accessGraphics);	
	$arrayAccessL2=array($permiso[11][1],$permiso[12][1],$permiso[13][1],$permiso[14][1]);

}

// 11 y 13

foreach($elementsHtml->data as $level1) :
    
    echo '
    <nav class="sidebar">
        <ul>     
            <li class="title"><i class="'.$level1->sidebarIcon.'"></i> '.$level1->sidebarTitle.'</li>
    ';

    if(isset($level1->sidebarSubcategory)) :
        $i=0;
        foreach($level1->sidebarSubcategory as $level2) :
			
			if($arrayAccessL1[$i]==1){
				
	            $class=(isset($level2->sidebarItems)) ? 'class="dropdown-toggle"': '';
				$active=($_SESSION['place']==$level2->sidebarNumber) ? 'active': '';
				
	            $endLevel=(isset($level2->sidebarItems)) ? '': '</li>';
	            echo '<li class="'.$active.'"><a '.$class.' href="'.$level2->sidebarHref.'"><i class="'.$level2->sidebarIcon.'"></i> '.$level2->sidebarName.'</a>'.$endLevel;;
	            if(isset($level2->sidebarItems)) :
	                echo '<ul id="childShow" class="dropdown-menu" data-role="dropdown">';
					
					$x=0;
	                foreach($level2->sidebarItems as $level3) : 
						if($arrayAccessL2[$x]==1){
	                    	echo '<li><a style="background-color:#E5E5E5; color:#3D3D3D;" href="'.$level3->itemHref.'">'.$level3->itemName.'</a></li>';
	                    }
						$x++;
	                endforeach;
	                echo '</ul>
	            </li> ';
	            endif;
			}
			
			$i++;
        endforeach;
    endif; echo '</ul>
    </nav>'; break;
endforeach;

?>




