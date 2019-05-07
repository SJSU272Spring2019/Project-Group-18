<?php

$request = new HttpRequest();
$request->setUrl('https://us-south.ml.cloud.ibm.com/v3/wml_instances/ecd408d9-f769-456d-9dd3-e90da87aaeeb/deployments/6f355de3-b9e1-4e33-aedc-65f039a1a338/online');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'postman-token' => 'bdf67f3b-5c11-e3f5-88f0-4200faf71027',
  'cache-control' => 'no-cache',
  'content-type' => 'application/json',
  'authorization' => 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImVjZDQwOGQ5LWY3NjktNDU2ZC05ZGQzLWU5MGRhODdhYWVlYiIsImluc3RhbmNlSWQiOiJlY2Q0MDhkOS1mNzY5LTQ1NmQtOWRkMy1lOTBkYTg3YWFlZWIiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjI5YzQzYTdkLWVkNDItNDE2YS04N2M5LWM4YTY5ZWYwNjRmNiIsImlzcyI6Imh0dHBzOi8vdXMtc291dGgubWwuY2xvdWQuaWJtLmNvbS92My9pZGVudGl0eSIsImlhdCI6MTU1NjE3NjEwOCwiZXhwIjoxNTU2MjA0OTA4LCJjcmVhdGVkVGltZSI6MTU1NjE3NjEwOH0.ThNzLZ5HHfftUdkODgJY7O7H2PcLa_kxoOsXWwqKcc27tWY0oR-gW0NHbHEmsfJyAbGZ_4qpHkYcbH-moxRoDXCHLfjsDwRA0m9eBSKwauY9ciDY4dsQfbThkWMU0CaZ4EgFUwgR1GZhZbl1JnXnzEAaZx6Kubbzw3FEWZ2oPDJhM7vYgJNg8xFDofCjco6Bd2fe4gUMwsb-wwvXRINUXCpFwnfP8KgImeT7uOtTTZcOSKCO6WQdfNuSyUKwCemxiaAEkQ-BPgP0JRYCnn4GORuY7Eh6aENH2K4QUeNqnFoKuP8xJmWNKrelw1AFExVYo2KPhBMs4WRLeJ3E8bkdeA'
));

$request->setBody('{
	"fields":["age","sex","cp","trestbps","fbs","restecg","thalach","exang","oldpeak","slope","ca","thal","num"],
	"values":[[88,0,null,null,null,null,null,null,null,null,null,null,null]]
	
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}