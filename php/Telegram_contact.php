<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$username = $_POST['username'];
$useremail = $_POST['useremail'];
$theme = $_POST['Theme'];
$text = $_POST['text'];

$token = "994885068:AAGz1i1uThHtLYyA6g67XisJoab5nDbj3gc";
$chat_id = "-499214792";
$arr = [
  'Имя: ' => $username,
  'Email: ' => $useremail,
  'Тематика: ' => $theme,
  'Сообщение: ' => $text,
];

$new_arr = array_diff($arr, array(''));

foreach($new_arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>