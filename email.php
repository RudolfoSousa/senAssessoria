<?php
	$para= "snassessoriacontabil2016@gmail.com";
	$nome= $_POST['nome'];
	$mail= $_POST['email'];
	$assunto= $_POST['servico'];
	$msg= $_POST['mensagem'];

    $corpo = "<strong>Mensagem de Contato pelo site</strog> <br><br>";
    $corpo .= "<strong>Nome: </stron> $nome";
    $corpo .= "<br><stromg>Email: </strong> $mail";
    $corpo .="<br><strong>Mensagem: </strong> $msg";

	$header.= "Content_type: text/html; charset= utf-8\n";
	$header= "From: $mail Reply-to: $mail\n";
	

	mail($para,$assunto,$corpo,$header);

	header("location: index.php?msg=enviado");

?>