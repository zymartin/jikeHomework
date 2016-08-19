
DROP DATABASE IF EXISTS jikezy;

CREATE DATABASE jikezy CHARSET=UTF8;

USE jikezy;

DROP TABLE IF EXISTS news;


CREATE TABLE news(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title TEXT,
	img TEXT,
	doTime VARCHAR(30),
	sign TEXT,
	type VARCHAR(30)
);


INSERT INTO news(id,title,img,doTime,sign,type)
	  VALUES
	  (NULL,'习近平同普京举行会谈：深化中俄全面战略协作伙伴关系','img/news1.jpg','2016-03-26','置顶','tuijian'),
	  (NULL,'数百万英国人请求重新公投 专家称可能性不大','img/news2.jpg','2016-03-26','网易要闻','tuijian'),
	  (NULL,'十年老友！白百何唱歌祝福文章大受感动','img/news3.jpg','2016-03-26','no','tuijian'),
	  (NULL,'你绝对想不到，麻省理工是这么看百度小米的','img/news4.jpg','2016-03-26','no','tuijian'),

	  (NULL,'华生的两难及“独懂”制度对上市公司决策的扭曲','img/newsbaijia1.jpg','2016-03-26','华生','baijia'),
	  (NULL,'苹果的差分隐私对你的数据意味着什么？','img/newsbaijia2.jpg','2016-03-26','IOS','baijia'),
      (NULL,'外国人看中国移动端营销：本土化是必修课','img/newsbaijia3.jpg','2016-03-26','大数据','baijia'),
      (NULL,'麦当劳中国业务竞标半路杀出个三胞集团','img/newsbaijia4.jpg','2016-03-26','麦当劳','baijia'),

      (NULL,'张秉贵：心中“一团火”，温暖万人心','img/newsbendi1.jpg','2016-03-26','no','bendi'),
      (NULL,'郭声琨：凝聚全社会力量综合治理毒品问题 坚定不移久久为功打赢禁毒人民战争','img/newsbendi2.jpg','2016-03-26','毒品','bendi'),
      (NULL,'斯杯11年后重回北京 男篮双星选秀后国内首秀','img/newsbendi3.jpg','2016-03-26','中国男篮','bendi'),
      (NULL,'北京丰台举办“生态文明 绿色消费”主题活动','img/newsbendi4.jpg','2016-03-26','no','bendi');





SELECT id,title,img,dotime,type FROM news;