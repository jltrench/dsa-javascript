function main() {
    // Create a hashtable (using Map)
    let hashtable = new Map();

    // Insert key-value pairs into the hashtable (O(1) on average)
    hashtable.set(1, "Apple");
    hashtable.set(2, "Banana");
    hashtable.set(3, "Cherry");
    console.log("Hashtable after insertions:", Object.fromEntries(hashtable));

    // Access an element by key (O(1) on average)
    if (hashtable.has(2)) {
        console.log("Value for key 2:", hashtable.get(2));
    }

    // Search for an element (O(1) on average)
    if ([...hashtable.values()].includes("Banana")) {
        console.log("Hashtable contains 'Banana'");
    } else {
        console.log("Hashtable does not contain 'Banana'");
    }

    // Delete an element by key (O(1) on average)
    hashtable.delete(3);
    console.log("Hashtable after deleting key 3:", Object.fromEntries(hashtable));
}

main();
