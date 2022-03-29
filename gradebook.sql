-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2022 at 03:49 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gradebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `gradebook`
--

CREATE TABLE `gradebook` (
  `course` varchar(50) NOT NULL,
  `grade` int(3) NOT NULL,
  `semester` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gradebook`
--

INSERT INTO `gradebook` (`course`, `grade`, `semester`) VALUES
('biomhxaniki', 6, 5),
('C', 10, 6),
('c++', 2, 10),
('diktia ypologiston', 6, 5),
('epixirisiaki ereuna', 9, 5),
('Istoria', 7, 1),
('kuklomata', 10, 5),
('kyklomata2', 1, 8),
('pasok', 5, 5),
('pediaA', 6, 4),
('pediaB', 10, 8),
('sae', 2, 5),
('she', 5, 9),
('sxedio', 10, 7),
('texnologia logismikou', 10, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gradebook`
--
ALTER TABLE `gradebook`
  ADD PRIMARY KEY (`course`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
