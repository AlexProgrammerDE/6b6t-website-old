<?php
    if (isset($_COOKIE["galleryaccepted"]) && $_COOKIE["galleryaccepted"] == true) {
    // Include the UberGallery class
    include('resources-gallery/UberGallery.php');

    // Initialize the UberGallery object
    $gallery = new UberGallery();

    // Initialize the gallery array
    $galleryArray = $gallery->readImageDirectory('gallery-images');

    // Define theme path
    if (!defined('THEMEPATH')) {
        define('THEMEPATH', $gallery->getThemePath());
    }

    // Set path to theme index
    $themeIndex = $gallery->getThemePath(true) . '/index.php';

    // Initialize the theme
    if (file_exists($themeIndex)) {
        include($themeIndex);
    } else {
        die('ERROR: Failed to initialize theme');
    }
    } else {
        if ($stream = fopen('accept.html', 'r')) {
            echo stream_get_contents($stream);
            fclose($stream);
        }
    }
