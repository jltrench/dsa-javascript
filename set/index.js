function main() {
    // Create a Set (acts as a hash set)
    let hashSet = new Set();

    // Insert elements into the hash set (O(1) on average)
    hashSet.add("Apple");
    hashSet.add("Banana");
    hashSet.add("Cherry");
    console.log("HashSet after insertions:", Array.from(hashSet));

    // Search for an element (O(1) on average)
    if (hashSet.has("Banana")) {
        console.log("HashSet contains 'Banana'");
    } else {
        console.log("HashSet does not contain 'Banana'");
    }

    // Delete an element (O(1) on average)
    hashSet.delete("Cherry");
    console.log("HashSet after deletion of 'Cherry':", Array.from(hashSet));

    // Iterate over elements (O(n))
    console.log("Iterating over HashSet:");
    hashSet.forEach(item => {
        console.log(item);
    });
}

main();
