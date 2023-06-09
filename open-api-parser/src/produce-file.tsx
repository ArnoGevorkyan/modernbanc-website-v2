// import fs from 'fs';
// import { OpenAPIV3 } from 'openapi-types';
// import { format as prettyFormat, plugins } from 'pretty-format';
// import { OpenApiParser } from '.';
// import { extensions } from '../input/extensions';
// import document from '../input/openapi-json.json';

// const parser = new OpenApiParser(document as any as OpenAPIV3.Document, extensions, 3, { schemas: /.*\.DTO$/ });

// // 1. Generate new extended Open API document
// const extended_document = parser.getParsedDocument();

// // 2. Stringify and execute all found functions (inc. React) e.g () => <HeroIcon/>
// const stringified_obj = JSON.stringify(extended_document, replacer).replace(/\\/g, '');

// // 3. Replace <UNDEFINED><UNDEFINED/> (generated by prettyFormat) back into <> </>
// let cleaned_obj = stringified_obj.replaceAll('UNDEFINED', '').replaceAll('"%j', '').replaceAll('%j"', '');

// // 4. Replace all <ForwardRef(LibraryIcon)/> things (generated by prettyFormat) back into <LibraryIcon/>
// const regex = /(?<=ForwardRef\()(.*?)(?=\))/g;
// const matches = cleaned_obj.matchAll(regex);
// for (const match of matches) {
//   const text = match[0]; // E.g UserIcon
//   cleaned_obj = cleaned_obj.replace('ForwardRef(' + text + ')', text);
// }

// // 4. Add explanation
// const prefix = '//@ts-nocheck - this file is generated by `npm run produce-file`, now copy it everything from line below to use it.\n';
// const final_data = prefix + 'export const document = ' + cleaned_obj;
// fs.writeFileSync('./output/extended-open-api.tsx', final_data);

// // Utils function. Checks if value is a function. if yes, execute it and wrap back again to look as a function. (For now only functions returning React element are supported)
// function replacer(key: string, value: any) {
//   if (value !== undefined && value !== null) {
//     if (typeof value === 'function') {
//       const function_result = value();
//       return (
//         '%j() => ' +
//         prettyFormat(function_result, {
//           plugins: [plugins.ReactElement],
//           min: true,
//           escapeRegex: false,
//           escapeString: false,
//         }) +
//         '%j'
//       );
//     } else if (typeof value === 'string') {
//       if (value.length === 0) value = undefined;
//       // Let's also clean-up empty strings so they don't take file size.
//     }
//   }
//   return value;
// }

export {};
