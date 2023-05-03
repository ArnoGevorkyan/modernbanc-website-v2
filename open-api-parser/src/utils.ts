import { isArray } from 'lodash';
import { Exclusions } from '.';

export const getSchemaTitle = ($ref: string): string => {
  const ref_components = $ref?.split('/');
  const schema_title = isArray(ref_components) ? ref_components[ref_components?.length - 1] : '';
  return schema_title;
};

// export const exclude(exclusions:Exclusions, document) {
//   if (this.exclusions) {
//     if (this.exclusions.paths) this.document.paths = omit(this.document.paths, this.exclusions.paths);

//     if (this.exclusions.schemas && this.document.components?.schemas) {
//       const is_regex = !Array.isArray(this.exclusions.schemas);
//       if (is_regex) {
//         const regex = this.exclusions.schemas as RegExp;
//         const schemas_to_remove = Object.keys(this.document.components?.schemas).filter((title) => title.match(regex));
//         this.document.components.schemas = omit(this.document.components.schemas, schemas_to_remove);
//       } else {
//         for (const title of this.exclusions.schemas as string[]) {
//           delete this.document.components?.schemas[title];
//         }
//       }
//     }

//     if (this.exclusions.operations) {
//       for (const { path, method } of this.exclusions.operations) {
//         delete this.document.paths?.[path]?.[method];
//       }
//     }
//   }
// }
