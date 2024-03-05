var convert = function (s, numRows) {
    if (numRows === 1) { return s }
    
    let string = '';
    let arr = [];
    let obj = {};
    let column = arr.length
    let counter = 0
    let pointer = numRows - 2

    for (let i = 0; i < s.length; i++) {
        if (counter === numRows) {
            arr.push(obj)
            obj = {}
            column++
            counter = 0
        }
        if (column === 0 || (column % (numRows - 1)) === 0) {
            obj[counter] = s[i]
            counter++
            pointer = numRows - 2
            if (i === s.length - 1) {
                arr.push(obj)
                obj.length = numRows
            }
        } else if (pointer > 0) {
            obj[pointer] = s[i]
            obj.length = numRows
            pointer--
            counter = numRows
            if (i === s.length - 1) {
                arr.push(obj)
            }
        }
    }

    let countt = 0

    while (countt < numRows) {
        const allArr = arr.map((item, i) => {
            if (item[countt] != undefined) {
                string += item[countt]
            }
        })

        countt++
    }

    console.log(string)
};


// -----------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------
// var convert = function (s, numRows) {

//     if (numRows === 1) { return (console.log(s)) }

//     let string = '';
//     let rowsArr = [];    
//     for (let i = 0; i < numRows; i++) rowsArr[i] = []
//     const distance = numRows - 2
//     let counter = 0;
//     let pointer = distance


//     for (let i = 0; i < s.length; i++) {

//         if (counter < numRows) {

//             rowsArr[counter].push(s[i])
//             counter++
//         } else {

//             rowsArr[pointer].push(s[i])
//             pointer--

//             if (numRows === 2) {
//                 counter--
//                 pointer = distance
//             }
//         }

//         if (pointer === 0 && numRows != 2) {
//             counter = 0
//             pointer = distance
//         }
//     }


//     // const merged = [].concat(...rowsArr)
//     const merged = rowsArr.reduce((a, b) => a.concat(b))
//     // console.log(merged)

//     for (let i = 0; i < merged.length; i++) {
//         string += merged[i]
//     }

//     console.log(string)
// };
// -----------------------------------------------------------------------------------




// PAHNAPLSIIGYIR
convert("PAYPALISHIRING", 3)

// PINALSIGYAHRPI
convert("PAYPALISHIRING", 4)

// A
convert("A", 1)

// ABDC
convert("ABCD", 3)

// ACB
convert("ABC", 2)






















//  Example 1 --------------------------------------
// 
//  Input: s = "PAYPALISHIRING", numRows = 3
//  Output: "PAHNAPLSIIGYIR"
// 
//      P     A     H     N
//      A  P  L  S  I  I  G
//      Y     I     R
// 
//  Example 2 -------------------------------------
// 
//  Input: s = "PAYPALISHIRING", numRows = 4
//  Output: "PINALSIGYAHRPI"
// 
//  Explanation:
// 
//     arr[i] [ P        I       N    ]
//            [ A     L  S    I  G    ]
//            [ Y  A     H  R         ]
//            [ P        I            ]
// 
//  Example 3 ------------------------------------
// 
//  Input: s = "A", numRows = 1
//  Output: "A"
// 
//  Example 4 ------------------------------------
// 
//  Input: s = "ABCD", numRows = 3
//  Output: "ABDC"
// 
// A   
// B D
// C
// 