var http = require("http");
var cheerio = require("cheerio");

function BaseCrawler (crawlName="") {
    this.timeout = 1000;
    this.crawlName = crawlName;
    this.dataUrls = [];

    this.crawledBaseUrls = [];
    this.crawledCrawlUrls = [];
    this.crawledDataUrls = [];

    this.baseUrl = "";
    this.seedUrls = [];
    this.crawlPaths = [];
    this.dataPath = "";

    this.crawledUrls = [];
    this.dataUrls = [];


}
// Downloads a url and invokes the callback function with the contents
BaseCrawler.prototype.downloadURL = function(url, callback) {
    http.get(url, function(res){
        var data = "";
        res.on('data', function (chunk) {
            data += chunk; 
        });
        res.on('end', function() {
            callback(data);
        });
    }).on('error', function(err){
        callback(null);
        console.log(err);
    });
}

// Setter methods
BaseCrawler.prototype.setBaseUrl = function(url) {
    this.baseUrl = url;
}

BaseCrawler.prototype.addSeedUrl = function(url) {
    this.seedUrls.push(url);
}

BaseCrawler.prototype.addCrawlPath = functiom(path) {
    this.crawlPaths.add(path);
}

BaseCrawler.prototype.setDataPath = function(path) {
   this.dataPath.add(path); 

module.export = BaseCrawler;
