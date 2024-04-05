// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
//  programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific 
//  skills from this list and show them.

let developers = {
    languages: [" typescript" , "javascript" , "Python"],
    tools: ["vue", "angular" , "React"],
    frameworks:["git", "webpack" , "Docker"]
}

let {languages , tools , frameworks} = developers

console.log(`languages: ${languages} ,\n tools : ${tools} ,\n frameworks ${frameworks}`);