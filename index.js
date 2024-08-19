const fs = require("fs");
const sampleFile = "./log-data.txt";

function parseLogFile(filePath) {
  const logData = fs.readFileSync(filePath, "utf8");
  const logLines = logData.split("\n");

  const ipMap = {};
  const urlMap = {};

  logLines.forEach((line) => {
    const regexMatch = line.match(/^(\S+).*"(GET|POST|PUT|DELETE)\s+(\S+)/);
    if (!regexMatch) return;

    const ipAddress = regexMatch?.[1];
    const url = regexMatch?.[3];

    ipMap[ipAddress] = (ipMap[ipAddress] || 0) + 1;
    urlMap[url] = (urlMap[url] || 0) + 1;
  });

  return {
    uniqueIps: Object.keys(ipMap).length,
    top3Urls: getTopNEntry(urlMap, 3),
    top3Ips: getTopNEntry(ipMap, 3),
  };
}

const getTopNEntry = (obj, n) => {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map((entry) => entry[0]);
};

if (require.main === module) {
    const result = parseLogFile(sampleFile);
    console.log("Number of unique IP addresses:", result.uniqueIps);
    console.log("Top 3 most visited URLs:", result.top3Urls);
    console.log("Top 3 most active IP addresses:", result.top3Ips);
  }

module.exports = {
  parseLogFile,
};
