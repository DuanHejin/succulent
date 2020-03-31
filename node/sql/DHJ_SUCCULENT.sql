/*
 Navicat MySQL Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : DHJ_SUCCULENT

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 27/03/2020 21:38:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for DHJ_IMG
-- ----------------------------
DROP TABLE IF EXISTS `DHJ_IMG`;
CREATE TABLE `DHJ_IMG` (
  `DHJ_ID` varchar(32) NOT NULL,
  `DHJ_NAME` varchar(32) NOT NULL,
  `DHJ_DATE` datetime NOT NULL,
  `DHJ_DESC` varchar(255) DEFAULT NULL,
  `DHJ_TAG` varchar(32) DEFAULT NULL,
  `DHJ_PATH` varchar(255) DEFAULT NULL,
  `DHJ_CREATED` datetime DEFAULT NULL,
  `DHJ_UPDATED` datetime DEFAULT NULL,
  `DHJ_CREATEDBY` varchar(32) NOT NULL,
  `DHJ_UPDATEDBY` varchar(32) NOT NULL,
  PRIMARY KEY (`DHJ_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DHJ_IMG
-- ----------------------------
BEGIN;
INSERT INTO `DHJ_IMG` VALUES ('1111', '恋爱循环', '2020-03-08 00:41:13', '手机拍的', '恋爱循环', 'images/恋爱循环/IMG_00.JPG', '2020-03-08 00:42:07', '2020-03-08 00:42:12', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1112', '恋爱循环', '2020-03-08 00:41:13', '电脑截图', '恋爱循环', 'images/恋爱循环/IMG_1.png', '2020-03-08 00:42:07', '2020-03-08 00:42:12', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1113', 'thumbs up', '2020-03-12 17:14:18', '电脑截图', 'thumbs up', 'images/thumbs up/IMG_2.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1114', 'thumbs up', '2020-03-12 17:14:18', '电脑截图', 'thumbs up', 'images/thumbs up/IMG_3.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1115', 'thumbs up', '2020-03-12 17:14:18', '电脑截图', 'thumbs up', 'images/thumbs up/IMG_4.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1116', 'thumbs up', '2020-03-12 17:14:18', '电脑截图', 'thumbs up', 'images/thumbs up/IMG_5.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1117', 'thumbs up', '2020-03-12 17:14:18', '电脑截图', 'thumbs up', 'images/thumbs up/IMG_1.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1118', '恋爱循环', '2020-03-12 17:14:19', '电脑截图', '恋爱循环', 'images/恋爱循环/IMG_2.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1119', '恋爱循环', '2020-03-12 17:14:19', '电脑截图', '恋爱循环', 'images/恋爱循环/IMG_3.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1120', '恋爱循环', '2020-03-12 17:14:19', '电脑截图', '恋爱循环', 'images/恋爱循环/IMG_4.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1121', '恋爱循环', '2020-03-12 17:14:19', '电脑截图', '恋爱循环', 'images/恋爱循环/IMG_5.png', '2020-03-12 17:10:32', '2020-03-12 17:10:40', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1122', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_1.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1123', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_2.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1124', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_3.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1125', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_4.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1126', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_5.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1127', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_6.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1128', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_7.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1129', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_8.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1130', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_9.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1131', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_10.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1132', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_11.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1133', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_12.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1134', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_13.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1135', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_14.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1136', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_15.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1137', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_16.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1138', '憨憨书记舞', '2020-03-16 22:55:01', '电脑截图', '憨憨书记舞', 'images/憨憨书记舞/IMG_17.png', '2020-03-16 22:55:01', '2020-03-16 22:55:01', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1139', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_1.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1140', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_2.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1141', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_3.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1142', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_4.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1143', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_5.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1144', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_6.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1145', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_7.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1146', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_8.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1147', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_9.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1148', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_10.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1149', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_11.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1150', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_12.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1151', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_13.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1152', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_14.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1153', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_15.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1154', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_16.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1155', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_17.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1156', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_18.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
INSERT INTO `DHJ_IMG` VALUES ('1157', '45s', '2020-03-16 22:56:35', '电脑截图', '45s', 'images/45s/IMG_19.png', '2020-03-16 22:56:35', '2020-03-16 22:56:35', '1000', '1000');
COMMIT;

-- ----------------------------
-- Table structure for DHJ_USER
-- ----------------------------
DROP TABLE IF EXISTS `DHJ_USER`;
CREATE TABLE `DHJ_USER` (
  `DHJ_ID` varchar(32) NOT NULL COMMENT '利用uuid4生成的32位随机数',
  `DHJ_NAME` varchar(32) NOT NULL,
  `DHJ_PASSWORD` varchar(20) DEFAULT NULL,
  `DHJ_ADMIN` int(1) NOT NULL DEFAULT '0' COMMENT '0:普通用户；1:管理员',
  `DHJ_CREATED` datetime DEFAULT NULL,
  `DHJ_UPDATED` datetime DEFAULT NULL,
  PRIMARY KEY (`DHJ_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DHJ_USER
-- ----------------------------
BEGIN;
INSERT INTO `DHJ_USER` VALUES ('1000', 'admin', 'admin', 1, '2020-03-02 22:08:38', '2020-03-02 22:08:43');
COMMIT;

-- ----------------------------
-- Table structure for DHJ_VARIABLE
-- ----------------------------
DROP TABLE IF EXISTS `DHJ_VARIABLE`;
CREATE TABLE `DHJ_VARIABLE` (
  `DHJ_KEY` varchar(32) NOT NULL,
  `DHJ_VALUE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DHJ_KEY`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DHJ_VARIABLE
-- ----------------------------
BEGIN;
INSERT INTO `DHJ_VARIABLE` VALUES ('DHJ_IMG_AB_PATH', 'xxxx');
COMMIT;

-- ----------------------------
-- Procedure structure for batchInsertIMG
-- ----------------------------
DROP PROCEDURE IF EXISTS `batchInsertIMG`;
delimiter ;;
CREATE PROCEDURE `DHJ_SUCCULENT`.`batchInsertIMG`(IN folderName VARCHAR(32), IN size INT)
BEGIN
	DECLARE i INT DEFAULT 1;
	DECLARE filePath VARCHAR(32);
	DECLARE id VARCHAR(32);
	DECLARE maxid VARCHAR(32);
	
	CALL getMaxId(maxid);
	
	WHILE i <= size DO
		set filePath = CONCAT('images/', folderName, '/IMG_', i, '.png');
		set id = maxId + i;
		
		INSERT INTO `DHJ_SUCCULENT`.`DHJ_IMG`(
		`DHJ_ID`, `DHJ_NAME`, `DHJ_DATE`, `DHJ_DESC`, `DHJ_TAG`, `DHJ_PATH`, `DHJ_CREATED`, `DHJ_UPDATED`, `DHJ_CREATEDBY`, `DHJ_UPDATEDBY`) VALUES (
		id, folderName, CURRENT_TIMESTAMP, '电脑截图', folderName, filePath, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1000', '1000');
		set i = i + 1;
	END WHILE;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getMaxId
-- ----------------------------
DROP PROCEDURE IF EXISTS `getMaxId`;
delimiter ;;
CREATE PROCEDURE `DHJ_SUCCULENT`.`getMaxId`(out maxId_out VARCHAR(32))
BEGIN
  SELECT MAX(DHJ_ID) into maxId_out FROM DHJ_IMG;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
