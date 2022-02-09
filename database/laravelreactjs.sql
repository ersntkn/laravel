-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 09 Şub 2022, 11:12:32
-- Sunucu sürümü: 5.7.36
-- PHP Sürümü: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `laravelreactjs`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(6, '2022_02_09_033208_create_news_table', 3);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(26, 'Polish LOT airplane carrying MEPs makes emergency landing due to loss of cabin pressure', 'Polish LOT plane carrying MEPs makes emergency landing in Germany', 'uploads/news/1644390319.jpg', '2022-02-09 04:05:19', '2022-02-09 04:05:19'),
(22, 'Poland abortion: Women \'scared to be pregnant\' a year after near-total ban came into force', 'One side says \"every life is precious\" while the other claims Poland\'s tighter abortion laws are putting women\'s health in danger.', 'uploads/news/1644390174.jpg', '2022-02-09 04:02:54', '2022-02-09 04:02:54'),
(23, 'Polish activists condemn abortion law after death of another pregnant woman', 'Polish activists condemn abortion law after death of another pregnant woman', 'uploads/news/1644390216.jpg', '2022-02-09 04:03:36', '2022-02-09 04:03:36'),
(24, 'Poland starts construction of €350 million border fence with Belarus', 'Poland starts construction of €350 million border fence with Belarus', 'uploads/news/1644390253.jpg', '2022-02-09 04:04:13', '2022-02-09 04:04:13'),
(25, 'Two more Poles identified as victims of hacking with spyware', 'An agrarian political leader at odds with Poland\'s right-wing government and the co-author of a book about the head of Poland\'s secret services were allegedly hacked.', 'uploads/news/1644390283.jpg', '2022-02-09 04:04:43', '2022-02-09 04:04:43'),
(27, 'Tourist arrested for giving Nazi salute outside gates of Auschwitz', 'Tourist arrested for giving Nazi salute outside gates of Auschwitz', 'uploads/news/1644390337.jpg', '2022-02-09 04:05:37', '2022-02-09 04:05:37'),
(28, 'COVID: Europe could be moving towards \'a kind of pandemic endgame\', says WHO', 'COVID: Europe could be moving towards \'a kind of pandemic endgame\', says WHO', 'uploads/news/1644390356.jpg', '2022-02-09 04:05:56', '2022-02-09 04:05:56'),
(29, 'Brave swimmers take part in Poland’s first underground relay', 'Brave swimmers take part in Poland’s first underground relay', 'uploads/news/1644390379.jpg', '2022-02-09 04:06:19', '2022-02-09 04:06:19'),
(30, 'Snowstorms bring traffic to a standstill between Poland and the Baltic states', 'Snowstorms bring traffic to a standstill between Poland and the Baltic states', 'uploads/news/1644390406.jpg', '2022-02-09 04:06:46', '2022-02-09 04:06:46'),
(31, 'Poland\'s former president and Solidarity leader Lech Walesa contracts COVID', 'Poland\'s former president and Solidarity leader Lech Walesa contracts COVID', 'uploads/news/1644390426.jpg', '2022-02-09 04:07:06', '2022-02-09 04:07:06'),
(21, 'Battle lines drawn: The two sides of Poland\'s abortion divide', 'One side says \"every life is precious\" while the other claims Poland\'s tighter abortion laws are putting women\'s health in danger.', 'uploads/news/1644390004.jpg', '2022-02-09 04:00:04', '2022-02-09 04:00:04');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
