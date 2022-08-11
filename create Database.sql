-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema viper
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema viper
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `viper` DEFAULT CHARACTER SET utf8 ;
USE `viper` ;

-- -----------------------------------------------------
-- Table `viper`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viper`.`product` (
  `id_product` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `viper`.`raw_material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viper`.`raw_material` (
  `id_raw_material` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `qtty` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_raw_material`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `viper`.`inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viper`.`inventory` (
  `id_product` VARCHAR(45) NOT NULL,
  `id_raw_material` VARCHAR(45) NOT NULL,
  `qtty` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_product`, `id_raw_material`),
  INDEX `fk_products_has_raw_materials_raw_materials_idx` (`id_raw_material` ASC) VISIBLE,
  INDEX `fk_products_has_raw_materials_products_idx` (`id_product` ASC) VISIBLE,
  CONSTRAINT `fk_products_has_raw_materials_products`
    FOREIGN KEY (`id_product`)
    REFERENCES `viper`.`product` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_raw_materials_raw_materials`
    FOREIGN KEY (`id_raw_material`)
    REFERENCES `viper`.`raw_material` (`id_raw_material`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
