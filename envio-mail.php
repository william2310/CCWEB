<?php
   
// ----------------------------- DATOS DE SMTP Y CUENTA DE ENVÍO -------------------------------

  // primero hay que incluir la clase phpmailer para poder instanciar
  //un objeto de la misma
  //require ("includes/class.phpmailer.php");
  require 'mailphp/phpmailer/PHPMailerAutoload.php';

  //instanciamos un objeto de la clase phpmailer al que llamamos 
  //por ejemplo mail
  $mail=new phpmailer();

  //Definimos las propiedades y llamamos a los métodos 
  //correspondientes del objeto mail

  //Con PluginDir le indicamos a la clase phpmailer donde se 
  //encuentra la clase smtp que como he comentado al principio de 
  //este ejemplo va a estar en el subdirectorio includes
  $mail->PluginDir = "includes/";

  //Con la propiedad Mailer le indicamos que vamos a usar un 
  //servidor smtp
  $mail->Mailer = "smtp";

  //Asignamos a Host el nombre de nuestro servidor smtp
  $mail->Host = "smtp.gmail.com";

  //Le indicamos que el servidor smtp requiere autenticación
  $mail->SMTPAuth = true;

  //Le decimos cual es nuestro nombre de usuario y password
  $mail->Username = "blackypunk23@gmail.com"; 
  $mail->Password = "sceptre23";

  //Indicamos cual es nuestra dirección de correo y el nombre que 
  //queremos que vea el usuario que lee nuestro correo
  $mail->From = "blackypunk23@gmail.com";
  $mail->FromName = "AREA 10";

  //el valor por defecto 10 de Timeout es un poco escaso dado que voy a usar 
  //una cuenta gratuita, por tanto lo pongo a 30  
  $mail->Timeout=30;

// ----------------------------- DATOS DEL MENSAJE -------------------------------

  //Indicamos cual es la dirección de destino del correo
  $mail->AddAddress($_POST['stinformatica@casacross.com.ni'], $_POST['nombre']);

  //Asignamos asunto y cuerpo del mensaje
  //El cuerpo del mensaje lo ponemos en formato html, haciendo 
  //que se vea en negrita
  $mail->Subject = "Prueba de PHPMailer";
  $mail->Body = $_POST['comentario'];

  //Definimos AltBody por si el destinatario del correo no admite email con formato html 
  $mail->AltBody = "Hola". $_POST['nombre'];
  
  //Decimos que el email va a ser tipo HTML
  $mail->IsHTML(true); 

 // ------------------------- DATOS DEL FICHERO ----------------------------------

  if ($_FILES['fichero']) {
		$mail->AddAttachment($_FILES['fichero']['tmp_name'], $_FILES['fichero']['name']);
   } 

  //se envia el mensaje, si no ha habido problemas 
  //la variable $exito tendra el valor true

  if ($mail->Send()) {
  	echo "Envío correcto";
  }else {
  	echo "Error".$mail->ErrorInfo;  // La propiedad errorinfo contiene el error
  }
   
?>