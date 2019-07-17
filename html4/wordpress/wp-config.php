<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'webshwang');

/** MySQL database username */
define('DB_USER', 'webshwang');

/** MySQL database password */
define('DB_PASSWORD', 'forever0');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+KtpZ6F96cgW_}6]*-cOVL+y2t`v=uLg]xigT!|0g4uUuI~4`]Lz7zDflA?`T,Lr');
define('SECURE_AUTH_KEY',  'v]a@[B=9mB1E#K~z]s1p{UxKQv)0-jgeaGyFMZ980H)T^`5>>V_^~$KQl/8d(y4q');
define('LOGGED_IN_KEY',    'g2a=E~NGp/-k]E-,EJ 79HXbfx:KFIj-<Ct7P(23oJl50! {3^E9RCiwDw7<r]_~');
define('NONCE_KEY',        'kY_jv~NSlmx_l9_u7H&oy,geur~I4dOW6,{v]~x1FQ6wd`qq?:Rq[uSAEwm;OW>0');
define('AUTH_SALT',        '8#@ZF:)t$WUn.9w6jm}hosLyo%O:XEa{{a<R(OAoIT2LtF&+a0xS6BbZgVL+/1/L');
define('SECURE_AUTH_SALT', '4M{}3BK,4r>.-QNhf(T].Y&N]ySxlEx1BbArt~I ;@#nL*mJQh1A&#>c6:=Q0a`G');
define('LOGGED_IN_SALT',   'cW%amIK6YI-nwdVU#BuW/ZGr:cJp>-oNT]CxPv8^M_dX=BRQ}>8^GSm/U-F@4$y7');
define('NONCE_SALT',       'YM]`s}06(aLD_eW8T)Asl0N|t]OH<n<~Sc_Uo}n@]8OKpW]%X}~M$/aR83JQY`f<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
