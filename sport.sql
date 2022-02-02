DROP TABLE IF EXISTS `sport`;
DROP TABLE IF EXISTS `announcement`;

CREATE TABLE `announcement` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `type` varchar(255) NOT NULL
);

CREATE TABLE `sport` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `contact` varchar(255) NOT NULL,
    `title` varchar(255) NOT NULL,
    `text` varchar(255) NOT NULL,
    `id_sport` INT NOT NULL, 
    FOREIGN KEY (id_sport) REFERENCES sport(id)
);