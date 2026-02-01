import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'libs/api-client/openapi.yaml',
  output: 'libs/api-client/src/generated',
});
