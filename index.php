<?php
/**
 * Plugin Name:  Lazy Blocks: Custom Rich Text
 * Description:  Adds custom rich text editor
 * Plugin URI:   https://github.com/LiamMartens/lazy-blocks-custom-rich-text
 * Version:      1.0.1
 * Author:       Liam Martens
 * Author URI:   https://liammartens.com
 * License:      MIT
 * License URI:  https://opensource.org/licenses/MIT
 * Text Domain:  lazy-blocks-custom-rich-text
 *
 * @package lazy-blocks-custom-rich-text
 */
if (!defined('ABSPATH')) {
  exit;
}

add_action('init', function() {
  if (!class_exists('LazyBlocks')) {
    return;
  }

  load_plugin_textdomain('lazy-blocks-custom-rich-text', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
  include_once plugin_dir_path(__FILE__) . '/lzb-custom-rich-text.php';
}, 11);
