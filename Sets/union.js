

  function unionOfSets(setA, setB) {
    
   const set = new Set([...setA,...setB])
   return set;

  }
  const setA = new Set([1, 2, 3]);
  const setB = new Set([3, 4, 5]);
  console.log(unionOfSets(setA, setB)); // Output: Set(5) {1, 2, 3, 4, 5}
