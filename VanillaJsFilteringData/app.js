sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen. Since then, you gradually realize that you have put too much effort into one thing: modifying the application. Even when implementing a simple task, it also requires understanding the whole system. You can’t blame them for changes or new features since they are inevitable parts of software development. So, what is the main problem here?
The obvious answer could be derived from the application’s design. Keeping the system design as clean and scalable as possible is one of the critical things that any professional developer should dedicate their time to. And that’s where SOLID design principles come into play. It helps developers eliminate design smells and build the best designs for a set of features.
Although the SOLID design principles were first introduced by the famous Computer Scientist Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, its acronym was introduced later by Michael Feathers. Uncle Bob is also the author of best-selling books Clean Code, Clean Architecture, Agile Software Development: Principles, Patterns, and Practices.`
    // 1-ci text tapsirigi funskya yaradildi ve bu return yeni deyer  qaytaran bir funksiyadir 
    // function GetTextLength() {
    //     let textlength = sampleNews.length;
    //     return textlength;
    // }
    // console.log(GetTextLength());

//2-ci tapsiriq yazildi
// function GetSpacesCount() {
//     let count = sampleNews.split(' ').length - 1;
//     return count;

// }
// console.log(GetSpacesCount())

// 3-cu tapsirigi yazildi

// function GetSentenceCount() {
//     let sentencecount = sampleNews.split('.' || '?').length - 4;
//     return sentencecount;
// }
// console.log(GetSentenceCount())

//4-cu Text tapsirigi
// function GetWordsCount() {
//     let wordcount = sampleNews.split(' ').length;
//     return wordcount;
// }
// console.log(GetWordsCount())

//5-ci tapsiriq yarisi alqoritmi yazildi
// function GetLetterCount() {
//     count = 0;
//     for (let i in sampleNews) {
//         if (i == " ") {
//             count++;
//         }
//     }
//     return count;

// }
// console.log(GetLetterCount());
//6-ci tapsiriq