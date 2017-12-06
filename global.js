     Shadowbox.init();
    
     $('.photo-image a').live('click', function (e) {
         Shadowbox.setup(jQuery('.photo-image a'));
         Shadowbox.open(this);
         //Stops loading link
         e.preventDefault();
     });
     $(window).scroll(function () {
         if ($(window).scrollTop() + $(window).height() == $(document).height()) {
             // call feed.next() once the page reaches the bottom
             instaFeed.next();
         }
     });
     // create two separate instances of Instafeed
     var instaFeed = new Instafeed({
         //clientId: 'fa33366a210c48bc909a76e035774dd0',
         get: 'user'
         , userId: user_id
         , //userId: '145725121',
         //accessToken: '145725121.1677ed0.4ce68986ffdf454fbdeebcf65bbee446',
         accessToken: token
         , limit: limit
         , sortBy: sort_by
         , resolution: 'standard_resolution'
         , template: '<div class="photo-all"><div class="photo-image"><a href="{{model.images.standard_resolution.url}}" rel="shadowbox[gal]" title="{{caption}} <span>Username: {{model.user.username}}</span>"><div class="bgimg" style="background:url({{model.images.standard_resolution.url}}) no-repeat center center; background-size:cover;"></div></a></div><div class="photo-caption"><div class="photo-likes"><a href="{{link}}" target="_blank">{{likes}}</a></div><div class="ffix"></div></div><div class="instalogo"><a href="{{link}}" target="_blank"><span>{{model.user.username}}<img src="{{model.user.profile_picture}}" class="owner_profile_picture" /></span></a></div></div>'
     });
     instaFeed.run();
