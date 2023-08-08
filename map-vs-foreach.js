// The following examples showcase the difference between map() vs forEach().
// The key difference being that whenever forEach is used it returns undefined.
// When map is used it does `not` change the original array, but rather creates a new array.

const testingForEachMutationExample = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(animals);

  const updatedAnimals = animals.forEach((animal) => {
    animal.category = "animal";
  });

  // We could also remove the 'const updatedAnimals =' statement and return animals; This function would then
  // return a mutated animals array with the new category value.

  console.log(animals);
  console.log(updatedAnimals);
};

// testingForEachMutationExample();

/* This returns the following which shows the original array is mutated, and the forEach output is undefined.
  
  [
    { type: 'dog', example: 'border collie' },
    { type: 'cat', example: 'maincoone' },
    { type: 'fish', example: 'koi' }
  ]
  [
    { type: 'dog', example: 'border collie', category: 'animal' },
    { type: 'cat', example: 'maincoone', category: 'animal' },
    { type: 'fish', example: 'koi', category: 'animal' }
  ]
  undefined
  
  */

const testingMapUnchangedExample = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(animals);

  const updatedAnimals = animals.map((animal) => {
    return {
      ...animal,
      category: "animal",
    };
  });

  console.log(animals);
  console.log(updatedAnimals);
};

// testingMapUnchangedExample();

/* This returns the following showcasing that the original animals array remains unchanged.
  
  [
    { type: 'dog', example: 'border collie' },
    { type: 'cat', example: 'maincoone' },
    { type: 'fish', example: 'koi' }
  ]
  [
    { type: 'dog', example: 'border collie' },
    { type: 'cat', example: 'maincoone' },
    { type: 'fish', example: 'koi' }
  ]
  [
    { type: 'dog', example: 'border collie', category: 'animal' },
    { type: 'cat', example: 'maincoone', category: 'animal' },
    { type: 'fish', example: 'koi', category: 'animal' }
  ]
  
  */

//_____________________________________________________________________
//Below this line are further tests to understand map() vs forEach()

const testingMap = () => {
  const animalsMap = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(
    animalsMap.map((animal) => {
      return { ...animal, category: "animal" };
    })
  );
};

const testingForEach = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(
    animals.forEach((animal) => {
      return { ...animal, category: "animal" };
    })
  );
};

// testingMap();
// testingForEach();

/* This will return

[
  { type: 'dog', example: 'border collie', category: 'animal' },
  { type: 'cat', example: 'maincoone', category: 'animal' },
  { type: 'fish', example: 'koi', category: 'animal' }
]
undefined

forEach returns undefined.

*/

const testingMapNewVariable = () => {
  const animalsMap = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  const updatedAnimals = animalsMap.map((animal) => {
    return { ...animal, category: "animal" };
  });

  console.log(animalsMap);
  console.log(updatedAnimals);
};

// testingMapNewVariable();

/* This will return the following. Note that map does not alter the original array
[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
[
  { type: 'dog', example: 'border collie', category: 'animal' },
  { type: 'cat', example: 'maincoone', category: 'animal' },
  { type: 'fish', example: 'koi', category: 'animal' }
]
*/

const testingForEachNewVariable = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  const updatedAnimals = animals.forEach((animal) => {
    return { ...animal, category: "animal" };
  });
  console.log(animals);
  console.log(updatedAnimals);
};

// testingForEachNewVariable();

/* This will return
  
[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
undefined
  
  */

const testingMapSameName = async () => {
  const animalsMap = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(animalsMap);

  animalsMap.map((animal) => {
    return { ...animal, category: "animal" };
  });

  console.log(animalsMap);
};

// testingMapSameName();

/* This will return the following. Note that map does not alter the original array.
You'd need to define a new variable for the new array to be assigned too.
[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
  */

const testingForEachSameName = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(animals);

  animals.forEach((animal) => {
    return { ...animal, category: "animal" };
  });
  console.log(animals);
};

// testingForEachSameName();

/* This will return the following as has unchanged the array
    
[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
    
*/

const testingMaptoNewArray = async () => {
  const animalsMap = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];
  let updatedAnimals = [];

  console.log(animalsMap);

  updatedAnimals = animalsMap.map((animal) => {
    return { ...animal, category: "animal" };
  });

  console.log(updatedAnimals);
};

//   testingMaptoNewArray();

/* This will return the following. Note that map does not alter the original array.
  But now can assign the new values to the newly defined updatedAnimals array.
 [
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
[
  { type: 'dog', example: 'border collie', category: 'animal' },
  { type: 'cat', example: 'maincoone', category: 'animal' },
  { type: 'fish', example: 'koi', category: 'animal' }
]
    */

const testingForEachtoNewArray = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];
  let updatedAnimals = [];

  console.log(animals);

  updatedAnimals = animals.forEach((animal) => {
    return { ...animal, category: "animal" };
  });
  console.log(updatedAnimals);
};

// testingForEachtoNewArray();

/* This will return the following as when forEach is used it will always return undefined.
      
 [
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
undefined
      
*/

const testingMapDontDoThis = () => {
  const animals = [
    { type: "dog", example: "border collie" },
    { type: "cat", example: "maincoone" },
    { type: "fish", example: "koi" },
  ];

  console.log(animals);

  animals.map((animal) => {
    animal.category = "animal";
  });

  console.log(animals);
};

testingMapDontDoThis();

/* This returns

[
  { type: 'dog', example: 'border collie' },
  { type: 'cat', example: 'maincoone' },
  { type: 'fish', example: 'koi' }
]
[
  { type: 'dog', example: 'border collie', category: 'animal' },
  { type: 'cat', example: 'maincoone', category: 'animal' },
  { type: 'fish', example: 'koi', category: 'animal' }
]

And it is not the recommended approach when using the map() method.

The map() method is typically used to transform each element of an array and return a new 
array with the transformed values. It is not intended to modify the existing elements of the 
array directly, as it goes against the principle of immutability.

While your code snippet modifies the category property of each animal object, it is not 
utilizing the full potential of the map() method. It would be more appropriate to use map() 
when you want to create a new array with modified objects, rather than directly modifying the existing objects.

Remember that if you want to modify the existing array directly, without creating a new array, you can use forEach() or a 
simple for loop, as shown in your previous example:

animals.forEach((animal) => {
  animal.category = "animal";
});

Using forEach() in this case is more appropriate because it indicates that you intend to perform side effects on the 
elements of the array without creating a new array.

*/