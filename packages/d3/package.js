Package.describe({
  summary: "A small, free JavaScript library for manipulating documents based on data."
});

Package.on_use(function (api)
{
  api.use('jquery-ui', 'client');
  api.use('sizzle', 'client');
  api.add_files('img/glyphicons-halflings-white.png', 'client');
  api.add_files('img/glyphicons-halflings.png', 'client');
  api.add_files('lib/colorbrewer/colorbrewer.css', 'client');
  api.add_files('lib/colorbrewer/colorbrewer.js', 'client');
  api.add_files('lib/science/science.js', 'client');
  api.add_files('lib/science/science.lin.js', 'client');
  api.add_files('lib/science/science.stats.js', 'client');
  api.add_files('js/d3.v2.js', 'client');
});
