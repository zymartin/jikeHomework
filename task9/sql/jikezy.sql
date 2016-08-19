-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-07-16 15:49:31
-- 服务器版本： 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jikezy`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `title` text,
  `img` text,
  `doTime` varchar(30) DEFAULT NULL,
  `sign` text,
  `type` varchar(30) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `img`, `doTime`, `sign`, `type`) VALUES
(1, '习近平同普京举行会谈：深化中俄全面战略协作伙伴关系', 'img/news1.jpg', '2016-03-26', '置顶', 'tuijian'),
(2, '数百万英国人请求重新公投 专家称可能性不大', 'img/news2.jpg', '2016-03-26', '网易要闻', 'tuijian'),
(3, '十年老友！白百何唱歌祝福文章大受感动', 'img/news3.jpg', '2016-03-26', 'no', 'tuijian'),
(4, '你绝对想不到，麻省理工是这么看百度小米的', 'img/news4.jpg', '2016-03-26', 'no', 'tuijian'),
(5, '华生的两难及“独懂”制度对上市公司决策的扭曲', 'img/newsbaijia1.jpg', '2016-03-26', '华生', 'baijia'),
(6, '苹果的差分隐私对你的数据意味着什么？', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'baijia'),
(7, '外国人看中国移动端营销：本土化是必修课', 'img/newsbaijia3.jpg', '2016-03-26', '大数据', 'baijia'),
(8, '麦当劳中国业务竞标半路杀出个三胞集团', 'img/newsbaijia4.jpg', '2016-03-26', '麦当劳', 'baijia'),
(9, '张秉贵：心中“一团火”，温暖万人心', 'img/newsbendi1.jpg', '2016-03-26', 'no', 'bendi'),
(10, '郭声琨：凝聚全社会力量综合治理毒品问题 坚定不移久久为功打赢禁毒人民战争', 'img/newsbendi2.jpg', '2016-03-26', '毒品', 'bendi'),
(11, '斯杯11年后重回北京 男篮双星选秀后国内首秀', 'img/newsbendi3.jpg', '2016-03-26', '中国男篮', 'bendi'),
(12, '北京丰台举办“生态文明 绿色消费”主题活动', 'img/newsbendi4.jpg', '2016-03-26', 'no', 'bendi'),
(13, '这是标题这是标题这是标题', 'img/timg1.jpg', '2016-03-26', 'swiperPic', 'tuijian'),
(14, '这是标题这是标题这是标题', 'img/timg2.jpg', '2016-03-26', 'swiperPic', 'tuijian'),
(17, 'hhh ddsds', 'img/newsbendi3.jpg', '2016-06-09', '王国维', 'bendi'),
(19, '苹果的差分隐私对你的数据意味着什么？', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'tupian'),
(20, '苹果的差分隐私对你的数据意味', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'tupian'),
(22, '苹果的差分隐私对你的数据意味着什么？', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'tupian'),
(23, '苹果的差分隐私对你的', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'tupian'),
(24, '苹果的差分隐私对你的数据意味着什么？', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'tupian'),
(25, '苹果的差分隐asda发三个法宝', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'yule'),
(26, '苹果的差分隐asda发三个法宝', 'img/newsbaijia2.jpg', '2016-03-26', 'IOS', 'shehui'),
(27, 'hhhhh', 'img/news1.jpg', '2016-06-16', 'swiperPic', 'tupian'),
(28, 'women', '打算', '', '大飒飒', 'nvren'),
(29, '习近平同普京举行会谈：深化中俄全面战略协作伙伴关系', 'img/news1.jpg', '2016-03-26', '置顶', 'shehui'),
(30, 'false', '../imgs/newss1.jpg', '2016-07-08', 'no', 'yule'),
(31, 'false', '../img/news1.jpg', '', '王国维', 'junshi'),
(32, '的撒旦', '../news1.jpg', '2016-07-12', '大', 'gaoxiao'),
(33, 'script', 'news.jpg', '2016-07-13', 'das', 'junshi'),
(34, 'dsa', 'img.jpg', '2016-07-06', 'no', 'junshi'),
(35, '郭声琨：凝聚全社会力量综合治理毒品问题 坚定不移久久为功打赢禁毒人民战争', 'img/newsbendi2.jpg', '2016-03-26', '毒品', 'bendi'),
(36, 'ds', 'img/news1.jpg', '2016-07-14', 'ds', 'tuijian'),
(37, '郭声琨：凝聚全社会力量综合治理毒品问题 坚定不移久久为功打赢禁毒人民战争', 'img/newsbendi2.jpg', '2016-03-26', '毒品', 'keji');

-- --------------------------------------------------------

--
-- 表的结构 `news2`
--

CREATE TABLE IF NOT EXISTS `news2` (
  `title` text,
  `img` text,
  `doTime` varchar(30) DEFAULT NULL,
  `sign` text,
  `type` varchar(30) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news2`
--

INSERT INTO `news2` (`title`, `img`, `doTime`, `sign`, `type`, `id`) VALUES
('nodejs', '../img.jpg', '2016-07-08', 'dsdsfffffffff', 'tupian', 1),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'junshi', 3),
('nodejs', '../img1111111.jpg', '2016-07-08', 'dsdsssssssssss', 'bendi', 4),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 5),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'baijia', 6),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 8),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 9),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 10),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 11),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 12),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 13),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 14),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 15),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 16),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 17),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 18),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 19),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 20),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 21),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 22),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 23),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 24),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 25),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 26),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 27),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 28),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 29),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 30),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 31),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 33),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 34),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 35),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 36),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 37),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 38),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 39),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 40),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 41),
('nodejs', '../img.jpg', '2016-07-08', 'dsdsssssssssss', 'tuijian', 42),
('sd', 'img.jpg', '2016-07-21', 'ds', NULL, 43),
('sd', 'img.jpg', '2016-07-21', 'ds', NULL, 44),
('sd', 'img.jpg', '2016-07-21', 'ds', NULL, 45),
('sheshej', 'ds.jpg', '2016-07-21', 'ds', 'shehui', 46);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news2`
--
ALTER TABLE `news2`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `news2`
--
ALTER TABLE `news2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=47;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
