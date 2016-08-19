// 启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

// fis-optimizer-uglify-js 插件进行压缩，已内置
fis.match('index.js', {
  optimizer: fis.plugin('uglify-js')
});

// fis-optimizer-clean-css 插件进行压缩，已内置
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

// fis-optimizer-png-compressor 插件进行压缩，已内置
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

//FIS3 选择的是添加 MD5 戳，直接修改文件的 URL
fis.match('*.{js,css,png}', {
  useHash: true
});