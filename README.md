# unique-type

Takes a mostly unique string and ensures that it is globally unique.

```
const uniqueType = require('unique-type');
uniqueType('foo'); // foo
uniqueType('foo'); // foo:1
```
