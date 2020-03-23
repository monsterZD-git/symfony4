<?
	header("Pragma: public");
	header("Content-Type: application/json; charset=utf-8");
	header("Content-Disposition: attachment; charset=utf-8; filename=\"export.json\"");
	header("Content-Transfer-Encoding: binary"); 

	echo $json;
?>