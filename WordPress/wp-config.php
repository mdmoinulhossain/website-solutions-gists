<?php
# Disable the PHP Error Messages In WordPress

# First commented this line
// define( 'WP_DEBUG', false );
# Then Paste It.
ini_set('display_errors','Off');
ini_set('error_reporting', E_ALL );
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);





# Re-enabling PHP Error Messages In WordPress

define('WP_DEBUG', true);
define('WP_DEBUG_DISPLAY', true);


?>