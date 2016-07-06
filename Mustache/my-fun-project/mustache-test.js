var mustache = require("mustache");
var result = mustache.render("Hi, {{first}} {{last}}!", {
	first: "Seydou",
	last: "Doumbia"
});
console.log(result);