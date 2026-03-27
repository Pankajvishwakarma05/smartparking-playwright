import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  reporter: [['html'], ['list']],

  use: {
    baseURL:
      process.env['BASE_URL'] ||
      'https://69c67a5731eae200082331fb--lighthearted-froyo-807dbc.netlify.app',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
