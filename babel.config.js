odule.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: '14.19.13'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: { }
      }],
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ],
    ignore: [
      '**/*.spec.ts',
      '**/*.test.ts',
      'test/**/*.spec.ts'
    ]
  }