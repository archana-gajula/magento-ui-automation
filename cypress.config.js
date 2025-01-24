import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    stepDefinitions: '../support/step_definitions/*.js',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://magento.softwaretestingboard.com/',
  },
});