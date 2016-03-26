// Appease TypeScript.
// Make sure that even if multiple copies of this module are loaded we guarantee
// globally unique values.
global.__unique_type_registry__ = global.__unique_type_registry__ || new Set();
global.__unique_type_increment__ = global.__unique_type_increment__ || 0;

/**
 * Takes a mostly unique string and ensures that it is globally unique.
 */
function uniqueType(type:string):string {
  if (global.__unique_type_registry__.has(type)) {
    return uniqueType(`${type}:${++global.__unique_type_increment__}`);
  }

  global.__unique_type_registry__.add(type);
  return type;
}
module uniqueType {} // Allow import * as uniqueType from 'unique-type';
export = uniqueType;
