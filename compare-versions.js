export function compareVersions(v1, v2) {
   const arr1 = v1.split('.');
   const arr2 = v2.split('.');

   return compare(arr1, arr2);
}

function compare(arr1, arr2) {
   const el1 = Number.parseInt(arr1.shift());
   const el2 = Number.parseInt(arr2.shift());

   if (el1 < el2) {
      return -1;
   } else if (el1 > el2) {
      return 1;
   } else if (arr1.length !== 0) {
      return compare(arr1, arr2);
   } else {
      return 0;
   }
}
