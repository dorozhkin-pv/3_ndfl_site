<?php
	include 'db.php';

	if (isset($_POST['name']) && isset($_POST['phone']))
	{
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$date = date('Y-m-d H:i:s');

		$link = mysqli_connect($server, $login, $pass, $db);

		if (!$link) { 
		   echo "Ошибка подключения к базе данных. Код ошибки: ".mysqli_connect_error(); 
		   exit; 
		}

		$res = mysqli_query($link, "INSERT INTO ".$db_table." (name, phone, date) VALUES ('$name','$phone', '$date')");

		if ($res == true) {
	    	echo $name;
	    }
	    else {
	    	echo "Информация не занесена в базу данных";
	    }


		mysqli_close($link); 
	}

	mail("dorozhkin.pv@yandex.ru", "Письмо", "$name\n $phone\n");

	


?>

