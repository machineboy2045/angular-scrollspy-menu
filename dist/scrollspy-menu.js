/**
 * Angular Scrollspy Menu
 * https://github.com/machineboy2045/angular-scrollspy-menu
 **/

angular.module('scrollspy-menu', []).directive("scrollspy-menu", ['$timeout', function($timeout) {

  return {
    restrict : "AC",
    link: function(scope, element, attr){
      var menuItems = [];
      var config = {offset: 0, duration: 500};
      var userConfig = scope.$eval(attr.scrollspyMenu);
      angular.extend(config, userConfig);
      

      var scrollTo = function(event){
        event.preventDefault();
        var target = $(event.target.hash);

        $('body').animate({
          scrollTop: target.offset().top - Number(config.offset) + 1
        }, config.duration);
      }

      //bind click events of menu items
      var setup = function(){
        angular.forEach(element.find('a'), function(el){
          var self = $(el);
          var target = $(self.attr('href'));
          if(target.length){
            self.click(scrollTo);
            menuItems.push({self: self, target: target});
          }
        });
      }

      $timeout(setup, 0);

      // Bind to scroll
      $(window).scroll(function(){
        var winTop = $(self).scrollTop() + Number(config.offset);
        var current = menuItems[0];

        angular.forEach(menuItems, function(item){
          item.fromTop = item.target.offset().top - winTop;
          if(item.fromTop < 0)
            current = item;
        });

        angular.forEach(menuItems, function(item){
          if(item === current)
            item.self.addClass('active');
          else
            item.self.removeClass('active');
        });
        
      });

    }
  };
}]);
