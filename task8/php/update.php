<?php
header("Content-Type:application/json;charset=utf-8");
require_once 'config.php';
$request = $_POST;
$returnWeb = array();

$conn = mysqli_connect(config::PATH,config::USER,config::PASSWORD,config::MYSQL);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$table;

switch ($request['newsTab']) {
	case '推荐':
		$table = 'newsTuijian';
		break;
	case '百家':
		$table = 'newsBaijia';
		break;
	case '本地':
		$table = 'newsBendi';
		break;
	case '图片':
		$table = 'newsTupian';
		break;
	case '娱乐':
		$table = 'newsYule';
		break;
	case '社会':
		$table = 'newsShehui';
		break;
	case '军事':
		$table = 'newsJunshi';
		break;
	case '女人':
		$table = 'newsNvren';
		break;
	case '搞笑':
		$table = 'newsGaoxiao';
		break;
	case '科技':
		$table = 'newsKeji';
		break;
	default:
		$table = 'none';
		break;
}

if(!$conn){
    die('connect error');
}

if($table == 'none'){//判断栏目是否存在
	$returnWeb['status'] = '栏目不存在';
	echo json_encode($returnWeb);
}else{
	//存在，则执行sql语句
	$sql = "UPDATE `$table` SET `newsTitle` = '".$request['newsTitle']."', `newsImg` = '".$request['newsImg']."',`newsTime` = '".$request['newsTime']."',`newsType` = '".$request['newsSign']."' WHERE `newsNo` = '".$request['newsNo']."';";

	mysqli_query($conn,$sql);
	$returnWeb['status'] = 'success';
	echo json_encode($returnWeb);
};
mysqli_close($conn);


?>