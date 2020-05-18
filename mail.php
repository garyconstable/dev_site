<?php

//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

include "mail_conf.php";
include "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if( !isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])):
    header('Content-Type: application/json');
    echo  json_encode([
        'success' => false,
        'message' => 'Part One',
        'post' => $_POST
    ]);
    exit();
endif;


$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";

$mail->SMTPDebug  = false;
$mail->SMTPAuth   = true;
$mail->SMTPSecure = "tls";
$mail->Port       = 587;
$mail->Host       = $host;
$mail->Username   = $username;
$mail->Password   = $password;

$mail->IsHTML(true);

$mail->AddAddress("garyconstable80@gmail.com", "Gary Constable");
$mail->SetFrom("garyconstable80@gmail.com", "Gary Constable");
$mail->Subject = "Gary Constable Dev - Contact form Submission";

$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

$content = "";
$content .= "<p><b>Name:</b> $name</p>";
$content .= "<p><b>Email:</b> $email</p>";
$content .= "<p><b>Message:</b> </p>";
$content .= "<p>&nbsp;</p>";
$content .= $message;
$mail->MsgHTML($content);

header('Content-Type: application/json');

if($mail->Send()) {
    echo json_encode([
       'success' => true
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Part Two'
    ]);
}

exit();
