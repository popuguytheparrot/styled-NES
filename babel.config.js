module.exports = api => {
  api.cache(false);
  const presets = [
    ['@babel/preset-env', { loose: true, modules: false }],
    ['@babel/preset-react']
  ];
  const plugins = [
    [
      'transform-react-remove-prop-types',
      {
        removeImport: true
      }
    ]
  ];

  return {
    presets,
    plugins,
    ignore: ['/node_modules/']
  };
};
