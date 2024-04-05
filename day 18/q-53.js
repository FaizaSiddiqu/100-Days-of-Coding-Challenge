// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
//  programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific 
//  skills from this list and show them.
var developers = {
    languages: [" typescript", "javascript", "Python"],
    tools: ["vue", "angular", "React"],
    frameworks: ["git", "webpack", "Docker"]
};
var languages = developers.languages, tools = developers.tools, frameworks = developers.frameworks;
console.log("languages: ".concat(languages, " ,\n tools : ").concat(tools, " ,\n frameworks ").concat(frameworks));
