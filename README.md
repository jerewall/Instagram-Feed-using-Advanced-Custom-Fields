# Instagram-Feed-using-Advanced-Custom-Fields
This lets you easily add an Intagram feed to any site without using plugins or code configuration. Its created using Advanced Custom Fields (ACF) and the main settings are done through the main panel using its own Instagram Feed tab. This script is based on Instafeed.js (https://github.com/stevenschobert/instafeed.js) by stevenschobert. 
 

## The Javascript
The javascript can be found within the global.js file. Add this to your websites global javascript/jQuery file or create your own. If you cannot create your own, you can add this to your websites head tag with a script tag using document ready but is not reccomended as the file is quite large. 


## The CSS
The scss file can be added to your site by moving the '_instafeed.scss' file to your /scss/ folder and importing it within your style.scss document.
EX: @import 'scss/instafeed'; 


## The HTML
The only thing you need to add to your HTML is this div: ```<div id="instafeed"></div>```


## Functions File (functions.php)
You need to add the following code to your functions file: ```if ( is_admin() ) include_once get_template_directory() . '/instagram-options.php';```


## Instagram Theme Option Panel
Just drop this file in the root of your wordpress theme. The name name is ```instagram-options.php```.


## The ACF Import File
Just upload the included JSON file using ACF. File name: ```instagram-acf-import.json```
