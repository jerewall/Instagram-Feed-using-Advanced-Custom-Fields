# Instagram Feed using Advanced Custom Fields
This lets you easily add an Intagram feed to any site without using plugins or code configuration. Its created using Advanced Custom Fields (ACF) and the main settings are done through the main panel using its own Instagram Feed tab. This script is based on Instafeed.js (https://github.com/stevenschobert/instafeed.js) by stevenschobert. You will need a User ID and Access Token. Instructions to get these can be found within the Instagram ACF panel.

The feed can load up to 60 images at a time, and will automatically load more images when you scroll to the bottom of the page. If you wish to disable this feature, simply remove the following code from global.js

```javascript
 $(window).scroll(function () {
         if ($(window).scrollTop() + $(window).height() == $(document).height()) {
             // call feed.next() once the page reaches the bottom
             instaFeed.next();
         }
     });
```
The images automatically link to a larger version of themselves using shadowbox with the original caption from Instagram. By default, this template will automatically pull the number of likes, users profie picture, and users images in most-recent order. 

This script is responsive so it is desktop, tablet, and mobile friendly out of the box. If you need to tweak image sizes based on breakpoints, you can do so within the ```_instafeed.scss``` file. 

### The Backend Preview:
<img src="https://image.ibb.co/d0Zi4b/instafeed_panel.png">

### The Front-End Preview
<img src="https://image.ibb.co/nDaUcw/preview.png">

### Full Demo 
A full demo of this script (tested) can be found here: http://jerewall.myregisteredwp.com/

## The Javascript
The javascript can be found within the global.js file. Add this to your websites global javascript/jQuery file or create your own. If you cannot create your own, you can add this to your websites head tag with a script tag using document ready but is not reccomended as the file is quite large. 


## The CSS
The scss file can be added to your site by moving the '_instafeed.scss' file to your /scss/ folder and importing it within your style.scss document.
EX: @import 'scss/instafeed'; 


## The HTML
The only 2 thing's you need to add to your HTML is this div: ```<div id="instafeed"></div>``` wherever you want the feed to display, and at the top of the page, right before the ```</head>``` tag paste :

``` javascript
       <script type="text/javascript">
       var token = '<?php echo get_field('access_token', 'option'); ?>'
       var user_id = '<?php echo get_field('user_id', 'option'); ?>'
       var limit = '<?php echo get_field('limit', 'option'); ?>'
       var sort_by = '<?php echo get_field('sort_by', 'option'); ?>'
    </script>
```

## The Functions
You need to add the following code to your functions (functions.php) file: ```if ( is_admin() ) include_once get_template_directory() . '/instagram-options.php';```


## Instagram Theme Option Panel
Just drop this file in the root of your wordpress theme. File Name: ```instagram-options.php```


## The ACF Import File
Just upload the included JSON file using ACF. File name: ```instagram-acf-import.json```

## The Images
Any images that are required can be found within the images folder, just move these to your images folder. They are used by shadowbox.
