const { parseLogFile } = require("./index.js");
const test = require("node:test");
const assert = require("node:assert");

const sampleFilePath = "./log-data.txt";

test("Correctly return unique IP addresses", (t) => {
  const result1 = parseLogFile(sampleFilePath);

  const expectedUniqueIps = 11;
  assert.strictEqual(result1.uniqueIps, expectedUniqueIps);
});

test("Correctly return the top 3 most visited URLs", (t) => {
  const result1 = parseLogFile(sampleFilePath);

  const expectedTop3Urls = [
    "/docs/manage-websites/",
    "/intranet-analytics/",
    "http://example.net/faq/",
  ];
  assert.deepStrictEqual(result1.top3Urls, expectedTop3Urls);
});

test("Correctly return the top 3 most active IP addresses", (t) => {
  const result1 = parseLogFile(sampleFilePath);

  const expectedTop3Ips = ["168.41.191.40", "177.71.128.21", "50.112.00.11"];
  assert.deepStrictEqual(result1.top3Ips, expectedTop3Ips);
});
