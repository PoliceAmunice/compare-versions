import { compareVersions } from './compare-versions.js';
import mockData from './mock-data.json' assert {type: "json"};


testFunction(compareVersions, mockData);

function testFunction(func, mockData) {
   let result = 0;

   console.log('\nStart testing...');

   mockData.forEach(({id, version1, version2, expected}) => {
      result = func(version1, version2);

      if (result == expected) {
         console.log(`Test #${id} passed successfully`);
      } else {
         console.log(`Test #${id} failed with result "${result}", when expected "${expected}"`);
      }
   })

   console.log('Finished.\n');
}
