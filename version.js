const fs = require('fs');
const { execSync } = require('child_process');
const path = './pxt.json';

const bumpType = process.argv[2] || 'patch';
const isHook = process.env.GIT_HOOK === 'true';

const json = JSON.parse(fs.readFileSync(path, 'utf8'));
let [major, minor, patch] = json.version.split('.').map(v => parseInt(v, 10));

if (bumpType === 'major') {
    major++; minor = 0; patch = 0;
} else if (bumpType === 'minor') {
    minor++; patch = 0;
} else {
    patch++;
}

json.version = `${major}.${minor}.${patch}`;
fs.writeFileSync(path, JSON.stringify(json, null, 4) + '\n');

console.log(`✅ Version bumped to ${json.version}`);

// Only tag/commit if not running inside Git hook
if (!isHook) {
    const tag = `v${json.version}`;
    execSync('git add pxt.json');
    execSync(`git commit -m "Release ${tag}"`);
    execSync(`git tag ${tag}`);
    console.log(`✅ Committed and tagged as ${tag}`);
}
