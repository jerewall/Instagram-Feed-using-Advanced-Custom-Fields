  <?php
//Web.com ACF CTA Blocks Page
//Version: 1.0

if( function_exists( 'acf_add_options_page' ) ) {

    acf_add_options_page( array(
        'page_title' => 'Instagram Feed',
        'menu_title' => 'Instagram Feed',
        'menu_slug' => 'Instagram-Feed-Options',
        'capability' => 'edit_posts',
        'redirect' => false,
        'icon_url' => false,
     ) );
 
}   
