export function compareVersionsRecursive(v1, v2) {
   const arr1 = v1.split('.');
   const arr2 = v2.split('.');

   return compare(arr1, arr2);
}

function compare(arr1, arr2) {
   const el1 = +arr1.shift() || 0;
   const el2 = +arr2.shift() || 0;

   if (el1 < el2) {
      return -1;
   } else if (el1 > el2) {
      return 1;
   } else if (!arr1[0] && !arr2[0]) {
      return 0;
   } else {
      return compare(arr1, arr2);
   }
}

export function compareVersionsCycle(v1, v2) {
   const arr1 = v1.split('.');
   const arr2 = v2.split('.');

   let el1 = 0, el2 = 0;

   while (true) {
      el1 = +arr1.shift() || 0;
      el2 = +arr2.shift() || 0;

      if (el1 < el2) {
         return -1;
      } else if (el1 > el2) {
         return 1;
      } else if (!arr1[0] && !arr2[0]) {
         return 0;
      }
   }
}
