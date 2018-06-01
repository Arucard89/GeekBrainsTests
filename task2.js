/* Task 2 */

/* Put your code here */
var str = process.argv[1];
var k = + process.argv[2];
console.log(str.replace(/[a-z]/gi, function (c, offset, s) {
    return String.fromCharCode(s.charCodeAt(offset) + k);
}));