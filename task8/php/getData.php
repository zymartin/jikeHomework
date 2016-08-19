<?php 

/*向客户端返回当前用户的所有订单，以JSON形式,字符编码为utf8*/
header("Content-Type:application/json;charset=utf-8");
require_once 'config.php';
$request = $_REQUEST['table'];

$conn = mysqli_connect(config::PATH,config::USER,config::PASSWORD,config::MYSQL);
if(!$conn){
    die('connect error');
}

$sql='SET NAMES UTF8';
mysqli_query($conn,$sql);

$sql = "SELECT * FROM $request";
$result = mysqli_query($conn,$sql);
$data = [];
/*遍历取数据*/
while($row=mysqli_fetch_assoc($result)){
	$data[] = $row;
};
if($request == 'newsTuijian'){
	$pic = Array();
	$sql = "SELECT * FROM newsswiperpictuijian";
    $result = mysqli_query($conn,$sql);
    while($row=mysqli_fetch_assoc($result)){
    	$pic['swiper'][] = $row;
    };

    array_push($data,$pic);
}
/*json编码向前端输出*/
echo json_encode($data);
mysqli_close($conn);

?>