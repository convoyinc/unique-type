// Appease TypeScript.
// Make sure that even if multiple copies of this module are loaded we guarantee
// globally unique values.
global.__unique_type_registry__ = global.__unique_type_registry__ || Object.create(null);
global.__unique_type_increment__ = global.__unique_type_increment__ || 0;

/**
 * Takes a mostly unique string and ensures that it is globally unique.
 */
function uniqueType(type:string):string {
  if (type in global.__unique_type_registry__) {
    return uniqueType(`${type}:${++global.__unique_type_increment__}`);
  }

  global.__unique_type_registry__[type] = true;
  return type;
}
module uniqueType {} // Allow import * as uniqueType from 'unique-type';
export = uniqueType;
