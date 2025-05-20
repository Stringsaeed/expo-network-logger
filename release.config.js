/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // determines version bump
    "@semantic-release/release-notes-generator", // generates changelog content
    "@semantic-release/changelog", // writes to CHANGELOG.md
    "@semantic-release/github", // creates GitHub release
    "@semantic-release/git", // commits changelog and version bump
  ],
  repositoryUrl: "https://github.com/Stringsaeed/expo-network-logger",
};
