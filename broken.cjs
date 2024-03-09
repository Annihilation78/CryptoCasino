const blc = require('broken-link-checker');

let htmlChecker = new blc.HtmlChecker({}, {
    onEnd: () => {
        console.log("Checking finished!");
    }
});

htmlChecker.scan("https://www.google.com", 'GET');

