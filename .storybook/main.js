module.exports = {
  "stories": [
    "../src/app/shared/components/**/*.stories.mdx",
    "../src/app/shared/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    'storybook-addon-designs'
  ],
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true,
  },
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ['../src/assets'],
}