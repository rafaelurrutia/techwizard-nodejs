<?php
    $source="../json/group/groupsAccess.json";
    $string = file_get_contents($source);
    $catgories=json_decode($string);

    foreach($catgories->categories as $index=>$level1) :
        $iClass=($level1->active==1 ? "icon-unlocked fg-green":"icon-locked fg-red");
        $marginLeft=($index>0 ? "margin-left:70px;":"");
        echo '<div style="width=350px!important; float:left; '.$marginLeft.'"><br>
            <span class="access" id="nivel1" data-active="'.$level1->active.'"><i class="'.$iClass.'"></i><strong><span style="display:none;"><em></em></span> '.$level1->name.'</strong></span>';
        if(isset($level1->subcategory)) :
            echo '<div id="nivel1Children">';
            foreach($level1->subcategory as $level2) :
                $iClass=($level2->active==1 ? "icon-unlocked":"icon-locked");
                $endLevel=(isset($level2->items)) ? '': '</br>';
                echo '<span class="access" id="nivel2" data-active="'.$level2->active.'">'.$level2->name.' <span style="display:none;"><em></em></span><i class="'.$iClass.'"></i></span>'.$endLevel;
                
                if(isset($level2->subcategory)) :
                    echo '<div id="nivel2Children">';
                    foreach($level2->subcategory as $level3) :
                        $iClass=($level3->active==1 ? "icon-unlocked":"icon-locked");
                        $endLevel=(isset($level3->items)) ? '': '</br>'; 
                        echo '<span class="access" id="nivel3" data-active="'.$level3->active.'">'.$level3->name.' <span style="display:none;"><em></em></span><i class="'.$iClass.'"></i></span>'.$endLevel;
                    
					
						if(isset($level3->subcategory)) :
		                    echo '<div id="nivel3Children">';
		                    foreach($level3->subcategory as $level4) :
		                        $iClass=($level4->active==1 ? "icon-unlocked":"icon-locked");
		                        $endLevel=(isset($level4->items)) ? '': '</br>'; 
		                        echo '<span class="access" id="nivel4" data-active="'.$level4->active.'">'.$level4->name.' <span style="display:none;"><em></em></span><i class="'.$iClass.'"></i></span>'.$endLevel;
		                    endforeach;
		                    echo '</div>';
		                endif;
					
					
					
					
                    endforeach;
                    echo '</div>';
                endif;
            endforeach;
        endif; echo '</div></div>';
    endforeach;
?>




