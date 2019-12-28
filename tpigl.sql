-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  sam. 23 nov. 2019 à 19:54
-- Version du serveur :  10.4.8-MariaDB
-- Version de PHP :  7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tpigl`
--

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `id` int(11) NOT NULL,
  `titre` varchar(30) NOT NULL,
  `id_prof` int(11) NOT NULL,
  `promo` varchar(4) NOT NULL,
  `date_h` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`id`, `titre`, `id_prof`, `promo`, `date_h`) VALUES
(1, 'THP', 1, '1CS', '2019-12-01 15:10:00'),
(2, 'ORGA', 2, '1CS', '2019-11-28 13:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

CREATE TABLE `eleve` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `dateNaiss` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_grp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `eleve`
--

INSERT INTO `eleve` (`id`, `nom`, `prenom`, `dateNaiss`, `email`, `id_grp`) VALUES
(170018, 'Amieur', 'Nardjes1999', '1999-01-01', 'hn_amieur', 301),
(170124, 'Bezza', 'Yousra', '1999-01-01', 'hy_bezza@esi.dz', 306),
(170147, 'Chikh', 'Yanis', '1999-06-11', 'hy_chikh@esi.dz', 306),
(170151, 'Idrissou', 'Dalia', '1999-12-24', 'hd_idrissou@esi.dz', 306),
(170163, 'Boudjelli', 'Ahmed Mehdi', '1999-01-01', 'ha_boudjelli@esi.dz', 306),
(170219, 'Khaber', 'Sarra', '1999-01-01', 'hs_khaber@esi.dz', 306);

-- --------------------------------------------------------

--
-- Structure de la table `groupe`
--

CREATE TABLE `groupe` (
  `id` int(11) NOT NULL,
  `Vgroupe` int(11) NOT NULL,
  `id section` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groupe`
--

INSERT INTO `groupe` (`id`, `Vgroupe`, `id section`) VALUES
(301, 1, 1),
(306, 6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `id` int(11) NOT NULL,
  `titre` varchar(20) NOT NULL,
  `promo` varchar(4) NOT NULL,
  `nbr-heure` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`id`, `titre`, `promo`, `nbr-heure`) VALUES
(1, 'THP', '1CS', 30),
(2, 'ORGA', '1CS', 20);

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `Note1` tinyint(4) NOT NULL,
  `id_etud` int(11) NOT NULL,
  `id_modu` int(11) NOT NULL,
  `abs` tinyint(4) NOT NULL COMMENT 'le nombre d''abscence d''un eleve dans un module',
  `note2` tinyint(4) DEFAULT NULL,
  `note3` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`id`, `Note1`, `id_etud`, `id_modu`, `abs`, `note2`, `note3`) VALUES
(1, 15, 170147, 1, 1, 14, 13),
(2, 14, 170151, 1, 1, 13, 12),
(3, 15, 170124, 1, 0, 14, 13),
(4, 17, 170163, 1, 0, 17, 16),
(5, 15, 170219, 1, 0, 15, 15);

-- --------------------------------------------------------

--
-- Structure de la table `prof`
--

CREATE TABLE `prof` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `prof`
--

INSERT INTO `prof` (`id`, `nom`, `prenom`, `email`) VALUES
(1, 'Tolba', 'Mouslim', 'm_tolba@esi.dz'),
(2, 'Bourai', 'Safia', 's_bourai@esi.dz');

-- --------------------------------------------------------

--
-- Structure de la table `pr_gr_mod`
--

CREATE TABLE `pr_gr_mod` (
  `id_prof` int(11) NOT NULL,
  `id_module` int(11) NOT NULL,
  `id_groupe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pr_gr_mod`
--

INSERT INTO `pr_gr_mod` (`id_prof`, `id_module`, `id_groupe`) VALUES
(1, 1, 306),
(2, 2, 301),
(2, 2, 306);

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `Vsection` varchar(1) NOT NULL,
  `promo` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `section`
--

INSERT INTO `section` (`id`, `Vsection`, `promo`) VALUES
(1, 'A', '1CS'),
(2, 'B', '1CS');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prof` (`id_prof`);

--
-- Index pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_grp` (`id_grp`);

--
-- Index pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id section` (`id section`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `prof`
--
ALTER TABLE `prof`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pr_gr_mod`
--
ALTER TABLE `pr_gr_mod`
  ADD UNIQUE KEY `prof_mod` (`id_prof`,`id_groupe`),
  ADD KEY `id_module` (`id_module`),
  ADD KEY `id_groupe` (`id_groupe`);

--
-- Index pour la table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cours`
--
ALTER TABLE `cours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `eleve`
--
ALTER TABLE `eleve`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170220;

--
-- AUTO_INCREMENT pour la table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT pour la table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `prof`
--
ALTER TABLE `prof`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cours`
--
ALTER TABLE `cours`
  ADD CONSTRAINT `cours_ibfk_1` FOREIGN KEY (`id_prof`) REFERENCES `prof` (`id`);

--
-- Contraintes pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`id_grp`) REFERENCES `groupe` (`id`);

--
-- Contraintes pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD CONSTRAINT `groupe_ibfk_1` FOREIGN KEY (`id section`) REFERENCES `section` (`id`);

--
-- Contraintes pour la table `pr_gr_mod`
--
ALTER TABLE `pr_gr_mod`
  ADD CONSTRAINT `pr_gr_mod_ibfk_1` FOREIGN KEY (`id_prof`) REFERENCES `prof` (`id`),
  ADD CONSTRAINT `pr_gr_mod_ibfk_2` FOREIGN KEY (`id_module`) REFERENCES `module` (`id`),
  ADD CONSTRAINT `pr_gr_mod_ibfk_3` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
