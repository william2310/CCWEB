<?php
require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer();

$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = "ssl";
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = 'blackypunk23@gmail.com';
$mail->Password = 'sceptre23';

$mail->setFrom('blackypunk23@gmail.com', 'william');
$mail->addAddress('stinformatica@casacross.com.ni');
$mail->Subject = 'subject';
$mail->Body = 'message';

if ($mail->send())
    echo "Mail sent";
?>