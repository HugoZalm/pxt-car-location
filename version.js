const fs = require('fs');
const path = './pxt.json';
const bumpType = process.argv[2] || 'patch'; // patch, minor, major

const json = JSON.parse(fs.readFileSync(path, 'utf8'));

// Convert version string to numbers
let [major, minor, patch] = json.version.split('.').map(v => parseInt(v, 10));

// Bump version correctly
if (bumpType === 'major') {
    major++;
    minor = 0;
    patch = 0;
} else if (bumpType === 'minor') {
    minor++;
    patch = 0;
} else {
    patch++;
}

json.version = `${major}.${minor}.${patch}`;
fs.writeFileSync(path, JSON.stringify(json, null, 4) + '\n');

// Commit and tag the version (optional)
const { execSync } = require('child_process');
const tag = `v${json.version}`;
execSync('git add pxt.json');
execSync(`git commit -m "Release ${tag}"`);
execSync(`git tag ${tag}`);

console.log(`✅ Version bumped to ${json.version} and tagged as ${tag}`);
