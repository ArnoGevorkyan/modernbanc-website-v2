import open_api_test_data from './inputs/small-test-file.json';
// import original_open_api from './inputs/original-open-api.json';
import short_pet_store from './inputs/short-pet-store.json';
import { OpenApiParser } from '../src/index';
import { OpenAPIV3 } from 'openapi-types';

type SchemaExtension = {
  title?: string;
  description?: string;
  test_key?: string;
};
test.only('Get schema properly', () => {
  const parser = new OpenApiParser<SchemaExtension>(open_api_test_data as OpenAPIV3.Document, {
    schemas: {
      User: {
        title: 'User',
        description: 'Lorem ipsum dolor sit amet',
        properties: {
          id: { description: 'Test account id description' },
          name: { test_key: 'Test value' },
        },
      },
    },
  });
  const result = parser.getSchema('User');
  expect(result).toBeTruthy();
  expect(result.extension?.description).toEqual('Lorem ipsum dolor sit amet');

  const is_ref = '$ref' in result;
  expect(is_ref).toEqual(false);

  if (!is_ref) {
    // expect(result.properties?.['id']?.extension?.description).toEqual('Test account id description');
    // expect(result.properties?.['name']?.extension?.test_key).toEqual('Test value');
  }
});

test('Checks if paths, schemas and operations are excluded correctly', () => {
  const schema_to_exclude = 'Account';
  const path_to_exclude = '/v1/entities';
  const operation_to_exclude = { method: OpenAPIV3.HttpMethods.POST, path: '/v1/accounts' };

  const parser = new OpenApiParser<SchemaExtension, any, any>(
    open_api_test_data as OpenAPIV3.Document,
    {
      schemas: {
        Account: {
          description: 'dsadsa',
          properties: {
            environment: {
              description: 'Environment this account is in.',
            },
          },
        },
        Environment: {
          description: 'This is where your accounts are',
        },
      },
    },
    2,
    {
      schemas: [schema_to_exclude],
      paths: [path_to_exclude],
      operations: [operation_to_exclude],
    },
  );
  expect(parser.original_document?.components?.schemas?.[schema_to_exclude]).toBeTruthy();
  expect(() => parser.getSchema(schema_to_exclude)).toThrow();

  expect(parser.original_document?.paths?.[path_to_exclude]).toBeTruthy();
  expect(() => parser.getPath(path_to_exclude)).toThrow();

  expect(parser.original_document?.paths?.[operation_to_exclude.path]?.[operation_to_exclude.method]).toBeTruthy();
  expect(() => parser.getOperation(operation_to_exclude.path, operation_to_exclude.method)).toThrow();
});

test('Checks that it resolves circular dependencies up until level..', () => {
  const parser = new OpenApiParser<SchemaExtension, any, any>(short_pet_store as OpenAPIV3.Document, undefined, 6);
  const schema = parser.getSchema('CircleNodeA');
  console.log(JSON.stringify(schema, undefined, 3));
});

test.only('Test', () => {
  const parser = new OpenApiParser<SchemaExtension, any, any>(open_api_test_data as OpenAPIV3.Document, undefined, 2);
  const schema = parser.getSchema('Workspace');
  console.log(JSON.stringify(schema, undefined, 3));
});
