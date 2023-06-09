-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bookproject
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bookshare
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bookshare
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bookshare` DEFAULT CHARACTER SET utf8mb4 ;
USE `bookshare` ;

-- -----------------------------------------------------
-- Table `bookshare`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookshare`.`users` (
  `username` VARCHAR(100) NOT NULL,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  PRIMARY KEY (`username`))
ENGINE = InnoDB
AUTO_INCREMENT = 95
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bookshare`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookshare`.`books` (
  `idbook` INT NOT NULL AUTO_INCREMENT,
  `book_cover` VARCHAR(45) NULL DEFAULT NULL,
  `title` VARCHAR(100) NOT NULL,
  `type` VARCHAR(45) NULL,
  `writer` VARCHAR(45) NULL,
  `synopsis` VARCHAR(300) NULL,
  `username` VARCHAR(100) NULL,
  PRIMARY KEY (`idbook`),
  INDEX `fk_books_users_idx` (`username` ASC),
  CONSTRAINT `fk_books_users`
    FOREIGN KEY (`username`)
    REFERENCES `bookshare`.`users` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 104
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bookshare`.`user_has_wishes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookshare`.`user_has_wishes` (
  `username` VARCHAR(100) NOT NULL,
  `idbook` INT NOT NULL,
  PRIMARY KEY (`username`, `idbook`),
  INDEX `fk_users_has_books_books1_idx` (`idbook` ASC),
  INDEX `fk_users_has_books_users1_idx` (`username` ASC),
  CONSTRAINT `fk_users_has_books_users1`
    FOREIGN KEY (`username`)
    REFERENCES `bookshare`.`users` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_books_books1`
    FOREIGN KEY (`idbook`)
    REFERENCES `bookshare`.`books` (`idbook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


use bookshare;
select * from users;
select * from books;
