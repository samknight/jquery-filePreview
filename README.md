File Preview - jQuery Plugin
======================

By Sam Knight
---------------------

This plugin will allow you to preview an image before uploading it

### Installation

Add in the following line to the page's head after loading jQuery.

  <script src="../filePreview.js" type="text/javascript" charset="utf-8"></script>
  
Then you need to initialise the File Preview plugin, defining which file input field you wish to preview

```javascript
  <script>
    $(document).ready(function(){
      $("#file_field").filePreview();
    });
  </script>
```
  
  You will also need to create a block element to show the file preview. By default this
  will be the id for file input field chosen with `_preview` appended i.e `file_field_preview`
  
```html
  <input id='file_field' type='file' />
  <div id='file_field_preview'></div>
```

### Customise

You can override the preview output element by defining an option

```javascript
  <script>
    $(document).ready(function(){
      $("#file_field").filePreview({ previewElement: 'custom_area' });
    });
  </script>
```

### Credits

This works has largely been adapted from Eric Bidelman https://github.com/ebidel
From the article Reading file in Javascript using the File APIs http://www.html5rocks.com/en/tutorials/file/dndfiles/#toc-reading-files
Under a Creative Commons Attribution 3.0 licence http://creativecommons.org/licenses/by/3.0/

