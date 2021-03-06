(function($) {
  
    var setting = {};
  
    $.fn.twellipsis = function(options){
         
      //options
      var defaults = {
        length: 14,
        length_front: 37,
        'tco-ellipsis': '...'
      };
      setting = $.extend(defaults, options);

      //run
      run(this);
      
      //
      return this;
    };
  
    var run = function(elements){
      $(elements).each(function(){
        if( $(this).prop("tagName") == 'A' ){
          _omit(this);
        }
      });
    };
  
    var _omit = function(a){
      text = $(a).text();
      var segments = _split(text);
      if( !segments ){ return; }
      
      $(a).empty();
      $(a).attr('data-expanted-url',text);
      
      var invisible = segments[1] + '://';
      var display = '';
      var ellipsis = '';
      if( segments[2].length > setting.length_front ){
        display += segments[2].slice(-setting.length_front) + '/';
        invisible += segments[2].slice(0,segments[2].length-setting.length_front);
        ellipsis = setting['tco-ellipsis'];
      }else{
        display += segments[2] + '/';
      }
      $(a).append(
        $('<span>').addClass('tco-ellipsis').text( ellipsis ),
        $('<span>').addClass('invisible').text( invisible )
      );
      
      invisible = '';
      ellipsis = '';
      if( segments[3].length > setting.length ){
        display += segments[3].slice(0,setting.length);
        invisible = segments[3].slice(setting.length);
        ellipsis = setting['tco-ellipsis'];
      }else{
        display += segments[3];
      }
      
      $(a).append(
        $('<span>').addClass('js-display-url').text( display ),
        $('<span>').addClass('invisible').text( invisible ),
        $('<span>').addClass('tco-ellipsis').append(
          $('<span>').addClass('invisible').html( ' ' ),
          ellipsis
        )
      );
      
    };
  
    var _split = function(url){
      var regex = /^(.+):\/\/(.+?)\/(.+)$/;
      var m = regex.exec(url);
      if( !m ){ return false; }
      return m;
    };
  
})(jQuery);
