Source Database: 'blogback'
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `node_user`;
CREATE TABLE `node_user`(
    `id`
    int(11) NOT NULL AUTO_INCREMENT,
    `name`
    varchar(30) DEFAULT NULL,
    `age`
    int(8) DEFAULT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8;
INSERT INTO `node_user`
VALUES('1', 'admin', '32');
INSERT INTO `node_user`
VALUES('2', 'dans88', '45');
INSERT INTO `node_user`
VALUES('3', '张三', '35');
INSERT INTO `node_user`
VALUES('4', 'ABCDEF', '88');
INSERT INTO `node_user`
VALUES('5', '李小二', '65');
