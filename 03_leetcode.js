const s = "ab0c0ed"
// const isUnique = (s) => {
//     const set = new Set()

//     for (let i = 0; i < s.length; i++) {
//         if (set.has(s[i])) {
//             return false
//         }
//         set.add(s[i])
//     }
//     return true
// }


// map solution
var lengthOfLongestSubstring = function (s) {
    let max = 0
    let begin = 0
    let map = {}

    for (let j = 0; j < s.length; j++) {

        if (map[s[j]] !== undefined && map[s[j]] >= begin) {
            begin = map[s[j]] + 1
        }
        // const substring = s.substring(i, j + 1)

        // if (isUnique(substring)) {
        //     max = Math.max(max, substring.length);
        // }

        map[s[j]] = j
        max = Math.max(max, j - begin + 1)
 
    } 

    return max


};







// set solution
var lengthOfLongestSubstring = function (s) {
    let max = 0
    let begin = 0
    let set = new Set()


    for (let i = 0; i < s.length; i++) {

        while(set.has(s[i])) {
            set.delete(s[begin])
            begin = begin + 1
        }

        set.add(s[i])
        max = Math.max(max, i - begin + 1)

    }


    return max
};