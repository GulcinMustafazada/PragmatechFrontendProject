// (function() {
//     let i = 0;
//     for (i = 0; i <= 100; i++) {
//         console.log(i)
//     }
// })()

(function(first, last) {
    if (first <= last) {
        console.log(first + " ");
        arguments.callee(first + 1, last)
    }

})(1, 100)