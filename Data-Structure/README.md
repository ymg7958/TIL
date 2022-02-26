What are "Data Structures" ?

Data Structures aloow you to manage Data

Examples : Arrays, Objects, Maps, Sets
 ```js
   - [1, 2, 3]
   - { name: "MAX", age: 31 }
   - new Map()
     map.set('a','b')
   - new Set()
     set.add(1)
```
 
## Different Tasks Require Data Structures
  * Ordered List of Data, Duplicates Allowed : `Array`
  * Unordered List of Data, No Duplicates Wanted : `Set`
  * Key-Value Pairs of Unordered Data : `Object`
  * Key-Value Pairs of Ordered, Iterable Data : `Map`

### Array
    * Insertion order is kept
    * Element access via index
    * Iterable (= you can use the for-of loop)
    * Size (length) adjusts dynamically
    * Duplicate values are allowed
    * Deletion and finding elements can require "extra work"

### Sets