<?php

$sourceJsonFile="../../json/cpeModel/cpeModel.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string,true);

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $groupDefault=$_POST["groupDefault"];
    $count = count($groupDefault);
}    
*/

$var1=count($elementsHtml['data'])+1;
$var2=$_POST["name"];
$var3=$_POST["cpeType"];
/*
$var1=count($elementsHtml['data'])+1;
$var2=$_POST[""];
$var3=$_POST[""];
$var4=$_POST[""];
$var5=$_POST[""];
*/


$data= array('id' => $var1, 'name' => $var2, 'cpeType' => $var3);
array_push($elementsHtml['data'],$data);
$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Modelo CPE';
$data["content"] = "Información ingresada satisfactoriamente";

echo json_encode($data);
//echo json_encode(array('status'=>true));




/*		MODIFICAR ARCHIVO

$sourceJsonFile="../json/groups.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string,true);

$elementsHtml['data'][0]['id']=99;
$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

*/


/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $groupDefault=$_POST["groupDefault"];
    $count = count($groupDefault);
    
    for ($i = 0; $i < $count; $i++) {
        echo $groupDefault[$i];
    }
    
    
    $data =$_POST["modalAddGroupInputNameGroup"].' '.$groupDefault[0];
    echo json_encode($data);
    
}    
*/


/*
$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';

	if (empty($_POST['email']))
		$errors['email'] = 'Email is required.';

	if (empty($_POST['superheroAlias']))
		$errors['superheroAlias'] = 'Superhero alias is required.';

// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		// if there are no errors process our form, then return a message

		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Success!';
	}

	// return all our data to an AJAX call
	echo json_encode($data);
*/

?>