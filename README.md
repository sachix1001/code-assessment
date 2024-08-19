# Log File Parser

## Description

This project parses a log file containing HTTP requests and reports on:
- The number of unique IP addresses.
- The top 3 most visited URLs.
- The top 3 most active IP addresses.

## Instructions

1. Place your log file in the project directory.
2. Run `npm install`
3. Run the script using `npm run start`.

## Tests

To run tests, execute `npm run test`.

## Assumptions

- The log file is in a consistent format.
- Only well-formed entries are processed.

## Project Structure

- **index.js**: The main script that contains the function for parsing the log file. If the file is run directly, it will also log results using the sample log-data.txt.
- **test.js**: Contains tests for verifying the functionality of the log file parser. this uses the [Node.js test runner](https://nodejs.org/api/test.html).
- **log-data.txt**: Sample log file used for parsing and generating reports.
