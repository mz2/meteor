Package.describe({
  summary: "A small, free JavaScript library for manipulating documents based on data."
});

Package.on_use(function (api)
{
  api.use(['jquery-ui', 'client']);
  api.use(['sizzle', 'client']);
  api.add_files('css/bootstrap.css', 'client');
  api.add_files('css/bootstrap-responsive.css', 'client');
  api.add_files('lib/colorbrewer/colorbrewer.css', 'client');
  api.add_files('lib/colorbrewer/colorbrewer.js', 'client');
  api.add_files('lib/science/science.min.js', 'client');
  api.add_files('lib/science/science.lin.min.js', 'client');
  api.add_files('lib/science/science.stats.min.js', 'client');
  api.add_files('js/d3.v2.min.js', 'client');
});
