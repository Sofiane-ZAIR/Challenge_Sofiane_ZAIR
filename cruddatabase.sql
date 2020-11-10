-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 10 nov. 2020 à 17:41
-- Version du serveur :  5.5.32-log
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cruddatabase`
--

-- --------------------------------------------------------

--
-- Structure de la table `todoapp`
--

DROP TABLE IF EXISTS `todoapp`;
CREATE TABLE IF NOT EXISTS `todoapp` (
  `id` varchar(200) NOT NULL,
  `Title` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `todoapp`
--

INSERT INTO `todoapp` (`id`, `Title`) VALUES
('3bca49cb-b600-4d81-ad4f-ba5b7da6046a', 'todo'),
('52fd74e7-b598-4aef-94b4-bc5290c78633', 'App');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
