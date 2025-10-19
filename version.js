// version.js
const fs = require('fs');
const path = './pxt.json';

const bumpType = process.argv[2] || 'patch'; // default: patch
const json = JSON.parse(fs.readFileSync(path, 'utf8'));
const [major, minor, patch] = json.version.split('.').map(Number);

if (bumpType === 'major') {
    json.version = `${major + 1}.0.0`;
} else if (bumpType === 'minor') {
    json.version = `${major}.${minor + 1}.0`;
} else {
    json.version = `${major}.${minor}.${patch + 1}`;
}

fs.writeFileSync(path, JSON.stringify(json, null, 4) + '\n');

console.log(`Version bumped to ${json.version}`);

const { execSync } = require('child_process');

const tag = `v${json.version}`;
execSync(`git add pxt.json`);
execSync(`git commit -m "Release ${tag}"`);
execSync(`git tag ${tag}`);

console.log(`Committed and tagged as ${tag}`);
