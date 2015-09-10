<?php 

$source = "../json/extensorModel/extensorModel_Modal_ExtensorModel.json";

switch ($_SESSION['lang']) {
	case "es" :
		$source = "../json/extensorModel/extensorModel_Modal_ExtensorModel-es.json";
		break;
	case "en" :
		$source = "../json/extensorModel/extensorModel_Modal_ExtensorModel.json";
		break;
	case "pt_BR" :
		$source = "../json/extensorModel/extensorModel_Modal_ExtensorModel-pt_BR.json";
		break;
	default :
		$source = "../json/extensorModel/extensorModel_Modal_ExtensorModel.json";
		break;		
}

$string = file_get_contents($source);
$elementsHtml = json_decode($string);

for ($x = 0; $x < count($elementsHtml -> elements); $x++) {

	$maxlength = split('-', $elementsHtml -> elements[$x] -> dataRange);
	$maxlength[0];

	switch ($elementsHtml->elements[$x]->htmlFormElementType) {
		case 'text' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div class="input-control text" data-role="input-control">
                    <input type="text" name="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '" maxlength="' . $maxlength[1] . '" placeholder="' . $elementsHtml -> elements[$x] -> htmlPlaceholder . '" autocomplete="' . $elementsHtml -> elements[$x] -> htmlAutocomplete . '" ' . $elementsHtml -> elements[$x] -> htmlAutofocus . ' />
                    <button class="btn-clear"></button>
                </div>';
			break;
		case 'button' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div id="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '" style="float: inherit; margin-right: 5px;">
                    <button name="' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonActive[0] -> buttonElementName . '" type="button" class="mini" value="' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonActive[0] -> buttonValue . '" data-clicked="false" style="display:none; border-radius:15px; background-color:' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonActive[0] -> buttonColor . '; color:' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonActive[0] -> buttonColorText . ';"><i class="' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonActive[0] -> buttonIcon . '" style="margin-right:5px;"></i>' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonActive[0] -> buttonText . '</button>
                    <button name="' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonInactive[0] -> buttonElementName . '" type="button" class="mini" value="' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonInactive[0] -> buttonValue . '" data-clicked="true" style="border-radius:15px; background-color:' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonInactive[0] -> buttonColor . '; color:' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonInactive[0] -> buttonColorText . ';"><i class="' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonInactive[0] -> buttonIcon . '" style="margin-right:5px;"></i>' . $elementsHtml -> elements[$x] -> htmlFormElementTypeButtonInactive[0] -> buttonText . '</button> 
                </div>';
			break;
		case 'buttons' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div id="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '" style="float: inherit; margin-right: 5px;">
                    <button class="mini primary" value="0" data-clicked="false"><i class="icon-checkmark" style="display:none; margin-right:5px;"></i>QoE</button>
                    <button class="mini primary" value="1" data-clicked="false"><i class="icon-checkmark" style="display:none; margin-right:5px;"></i>Neutralidad</button>
                    <button class="mini primary" value="2" data-clicked="false"><i class="icon-checkmark" style="display:none; margin-right:5px;"></i>Mintic</button> 
                </div>';
			break;
		case 'tag' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div class="input-control">
                    <input id="tags_1" type="text" class="tags" maxlength="255" />
                    <input type="text" name="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '" maxlength="' . $maxlength[1] . '" placeholder="' . $elementsHtml -> elements[$x] -> htmlPlaceholder . '"/> 
                    <button class="btn-clear"></button>
                </div>';
			break;
		case 'select' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div class="input-control select">
                    <select name="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '">
                        <option value="">' . $elementsHtml -> elements[$x] -> htmlPlaceholder . '</option>
                    </select>
                </div>';
			break;
		case 'checkbox' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div class="input-control checkbox data-role="input-control">';
			if ($elementsHtml -> elements[$x] -> htmlFormElementTypeCheckboxStaticElements == 1) {
				for ($i = 0; $i < count($elementsHtml -> elements[$x] -> htmlFormElementTypeCheckbox); $i++) {
					$checked = ($elementsHtml -> elements[$x] -> htmlFormElementTypeCheckbox[$i] -> checkboxChecked == 1 ? 'checked' : ' ');
					$element[$x] .= '<label>
                            <input type="checkbox" name="' . $elementsHtml -> elements[$x] -> name . '[]"' . ' value="1"' . $checked . ' />
                            <span class="check"></span>
                            ' . $elementsHtml -> elements[$x] -> htmlFormElementTypeCheckbox[$i] -> checkboxName . '
                        </label>';
				}
			}
			$element[$x] .= '</div>';
			break;
		case 'radiobutton' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div class="input-control radio">
                    <label>
                        <input type="radio" name="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '"/>
                        <span class="check"></span>
                        Check me out
                    </label>
                </div>';
			break;
		case 'password' :
			$element[$x] = '<label data-element="' . $elementsHtml -> elements[$x] -> htmlFormElementType . '" data-required="' . $elementsHtml -> elements[$x] -> dataRequired . '" data-type="' . $elementsHtml -> elements[$x] -> dataTypeElementRequired . '" data-range="' . $elementsHtml -> elements[$x] -> dataRange . '" data-order="' . $elementsHtml -> elements[$x] -> dataOrder . '">' . $elementsHtml -> elements[$x] -> htmlLabel . '</label>
                <div class="input-control password" data-role="input-control">
                    <input type="password" name="' . $elementsHtml -> elements[$x] -> htmlFormElementName . '" maxlength="' . $maxlength[1] . '" placeholder="' . $elementsHtml -> elements[$x] -> htmlPlaceholder . '"/>
                    <button class="btn-reveal" tabindex="-1"></button>
                </div>';
			break;

		default :
			# code...
			break;
	}
}
?>

<!-- Modal ExtensorModel -->
<div id="ExtensorModelsModalExtensorModel" class="modalmask">
	<div class="modalbox movedown">
		<div class="modalBody">
			<div class="modalTop">
				<!--
				<h2>
					<i class="{{extensorModelModalAddExtensorModelIcon}}"></i>
					<span id="extensorModelTitle">{{extensorModelModalAddExtensorModelTitle}}</span>
					<img style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODALSTYLE']; ?>" src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODAL']; ?>" />
				</h2>
				-->
				<div style="line-height: 35px;">
					<strong>
						<i class="{{extensorModelModalAddExtensorModelIcon}}"></i>
						<span id="extensorModelTitle">{{extensorModelModalAddExtensorModelTitle}}</span>
					</strong>
				</div>
			</div>
			<form name="extensorModelModalExtensorModel" method="POST" data-op="0" >
				<div class="modalHead"></div>
				<div class="modalMessageError"></div>
				<div class="modalMain">
					<input type="hidden" name="modalExtensorModelInputHiddenIdExtensorModel">
					<?php for($x=0;$x<count($elementsHtml->elements);$x++){
					?>
					<div class="htmlElement">
						<?php echo $element[$x]; ?>
					</div>
					<?php } ?>
				</div>
				<div class="modalMessageRequired">{{extensorModelModalAddExtensorModelMessageRequired}}</div>
				<div class="modalFoot">
					<button type="submit" name="ExtensorModelsModalButtonAddExtensorModel">
						{{extensorModelModalAddExtensorModelButtonAdd}}
					</button>
					<button type="submit" name="ExtensorModelsModalButtonUpdateExtensorModel" style="display:none;">
						{{extensorModelModalUpdateExtensorModelButtonUpdate}}
					</button>
					<button type="button" name="ExtensorModelsModalButtonCleanExtensorModel">
						{{extensorModelModalAddExtensorModelButtonClean}}
					</button>
					<button type="button" name="ExtensorModelsModalButtonCloseModalExtensorModel">
						{{extensorModelModalAddExtensorModelButtonClose}}
					</button>
				</div>
			</form>
		</div>
		<div class="modalFooter"><img src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODAL']; ?>" style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODALSTYLE']; ?>" /></div>
	</div>
</div>
<!-- /Modal -->
