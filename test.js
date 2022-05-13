import { compareVersionsRecursive, compareVersionsCycle } from './compare-versions.js';
import mockData from './mock-data.json' assert {type: "json"};


testFunction('recursive', compareVersionsRecursive, mockData);
testFunction('cycle', compareVersionsCycle, mockData);

function testFunction(label, func, mockData) {
   let result = 0;

   console.log(`\nStart testing "${label}"...`);
   console.time('Time spent');

   mockData.forEach(({id, version1, version2, expected}) => {
      result = func(version1, version2);

      if (result == expected) {
         console.log(`Test #${id} passed successfully`);
      } else {
         console.log(`Test #${id} failed with result "${result}", when expected "${expected}"`);
      }
   })

   console.log(`Finished`);
   console.timeEnd('Time spent');
   console.log();
}
