// This works has largely been adapted from Eric Bidelman https://github.com/ebidel
// From the article Reading file in Javascript using the File APIs http://www.html5rocks.com/en/tutorials/file/dndfiles/#toc-reading-files
// Under a Creative Commons Attribution 3.0 licence http://creativecommons.org/licenses/by/3.0/
(function($) {
  var options;

  $.fn.filePreview = function(user_options) {
    var defaults = {
      previewElement: $(this).attr('id') + '_preview'
    };
    options = $.extend({}, defaults, user_options);

    document.getElementById($(this).attr('id')).addEventListener('change', handleFileSelect, false);
  }

  function handleFileSelect(evt) {

    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById(options.previewElement).insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

})(jQuery);

