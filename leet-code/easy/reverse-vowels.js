// Problem: Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    const chars = s.split('');

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }

        while (left < right && !vowels.has(chars[right])) {
            right--;
        }

        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
};

console.log(reverseVowels('IceCreAm')) // 'holle'