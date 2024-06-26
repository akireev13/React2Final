import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
 overwrite: true,
    schema: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwue04wd02z008umie77j5nc/master',
 documents: "./src/graphql/**/*.graphql",
 generates: {
  './src/generated/graphql.ts': {
   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
   config: {
    rawRequest: true
   },
  },
 },
};

export default config;