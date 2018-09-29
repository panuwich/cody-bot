<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

define('LINE_CHANNEL_ACCESS_TOKEN', '2lLwMrSFTxKHxt6QxcCqWTgymIEBNs+CDij7aN9NvoCZRliDZIqFcn3bwlQomMmSjVQi8qr/J6smCQ5f+
							/6EflKFiSF12O5+rFDNKMZ2TXLGRipa1QfmJMBk2n/2ggs9ANcg9sRGdC9u9uQI/dhXhgdB04t89/1O/w1cDnyilFU=');
define('LINE_MESSAGING_API', 'https://api.line.me/v2/bot/message/');
define('LINE_USER_ID', 'U11185fe687c3094fe47a159d664af4d1');


      reply();


function push() {
	$msg = 'Wad D Isas';
	// Msg payload
	$message = [
		'type' => 'text',
		'text' => $msg
	];
	// Body payload (replyToken => to)
	$body =[
		'to' => LINE_USER_ID,
		'messages' => [$message]
	];
	// Curl
	curl('push',$body);

	echo $msg;
}

function reply() {
	// get body from POST or PUT
	$jsonObj = file_get_contents('php://input');
	$events = json_decode($jsonObj,true);
	// convert to array

	// Validate parsed JSON data
	if (!is_null($events['events'])) {
		foreach ($events['events'] as $event) {
			
			// Reply only when message type is text
			if ($event['type'] == 'message' && $event['message']['type'] == 'text') {
					
				// Msg payload
				$message = [
					'type'=> 'sticker',
					'packageId'=> '1',
					'stickerId'=> '1'
				];
				// Body payload
				$body =[
					'replyToken' => $event['replyToken'],
					'messages' => [$message]
				];
				// Curl
				curl('reply',$body);
				
			}
		}
	}
}

function curl($apiType, $postFields) {
	$headers = array('Content-Type: application/json', 'Authorization: Bearer '.LINE_CHANNEL_ACCESS_TOKEN);
	$ch = curl_init(LINE_MESSAGING_API.$apiType);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postFields));
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_exec($ch);
	curl_close($ch);
}
?>