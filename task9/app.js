var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
	res.render('index.ejs')
});
app.get('/admin',function(req,res){
  res.render('admin.ejs')
});

  
var TEST_DATABASE = 'jikezy';  
var TEST_TABLE = 'news'; 

//创建连接  
var client = mysql.createConnection({  
  host     : '127.0.0.1',      
  user     : 'root',             
  password : '',      
  database: TEST_DATABASE
});  

client.connect();
client.query("use " + TEST_DATABASE);

/*client.query(
  'SELECT * FROM '+TEST_TABLE,  
  function selectCb(err, results, fields) {  
    if (err) {  
      throw err;  
    }  
      
      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
              console.log("%d\t%s\t%s", results[i].id, results[i].type, results[i].doTime,results[i].img);
          }
      }    
    // client.end();  
  }  
); */




// 数据接口  ：查找
app.post('/platform/get', function(req, res) {
  var type = req.body['type'];
  var  userGetSql = 'SELECT * FROM '+TEST_TABLE+' WHERE `type` = "'+type+'"';
  console.log(userGetSql);

  client.query(userGetSql,function (err, result) {
        if(err){
         console.log('[SELECT ERROR] - ',err.message);
         return;
        }
       console.log('-------SELECT----------');
       console.log('SELECT ID:',result);
       console.log('#######################'); 
       res.send(result);
  });
});

// 数据接口  ：添加
app.post('/platform/add', function(req, res) {
  var putData = req.body;
  var returnWeb = {},type;
  console.log(putData);
  if(putData.tab == '0'){type = 'none'}else{
    type = putData.tab;
  }
  
  if(type == 'none'){
    returnWeb.status = 'nosuccess';
    returnWeb.msg = '栏目不存在';
    res.json(returnWeb);
  }else{
    var  userAddSql = 'INSERT INTO '+TEST_TABLE+'(id,title,img,doTime,sign,type) VALUES(null,?,?,?,?,?)';
    var  userAddSql_Params = [putData.title, putData.img, putData.doTime, putData.sign, type];
    console.log(putData);
    client.query(userAddSql,userAddSql_Params,function (err, result) {
          if(err){
           console.log('[INSERT ERROR] - ',err.message);
           return;
          }       
         console.log('-------INSERT----------');
         console.log('INSERT ID:',result);
         console.log('#######################'); 
    });
    returnWeb.status = 'success';
    res.json(returnWeb);
  }
  
});

// 数据接口  ：更改
app.post('/platform/alter', function(req, res) {
  var putData = req.body;
  var returnWeb = {},type;

  console.log(putData);
  if(putData.tab == '0'){type = 'none'}else{
    type = putData.tab;
  }
  if(type == 'none'){
    returnWeb.status = 'nosuccess';
    returnWeb.msg = '栏目不存在';
    res.json(returnWeb);
  }else{
    var userAlterSql = 'UPDATE '+TEST_TABLE+' SET '+
    '`title`="'+putData.title+'",'+
    '`img`="'+putData.img+'",'+
    '`doTime`="'+putData.doTime+'",'+
    '`sign`="'+putData.sign+'",'+
    '`type`="'+type+'"'+
    ' WHERE `id`="'+putData.id+'"';
    console.log(userAlterSql);
    client.query(userAlterSql,function (err, result) {
          if(err){
           console.log('[ALTER ERROR] - ',err.message);
           return;
          }       
         console.log('-------ALTER----------');
         console.log('ALTER ID:',result);
         console.log('#######################'); 
    });


    returnWeb.status = 'success';
    res.json(returnWeb);
  }
});

// 数据接口  ：删除
app.post('/platform/del', function(req, res) {
  var id = req.body['id'];
  var userGetSql = 'DELETE FROM '+TEST_TABLE+' WHERE `id`="'+id+'"';
  var returnWeb = {};
  client.query(userGetSql,function (err, result) {
        if(err){
         console.log('[DELETE ERROR] - ',err.message);
         return;
        }       
       console.log('-------DELETE----------');
       console.log('DELETE ID:',result);
       console.log('#######################'); 
  });
  returnWeb.status = 'success';
  res.json(returnWeb);
});
  




app.listen(3000);