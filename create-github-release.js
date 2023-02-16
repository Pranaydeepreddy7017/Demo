const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ auth: "GITHUB_ACCESS_TOKEN" });

const tagName = "v" + require("../package.json").version;
const releaseName = "Release " + require("../package.json").version;

const createRelease = async () => {
	  const { data: release } = await octokit.repos.createRelease({
		      owner: "GITHUB_USERNAME",
		      repo: "GITHUB_REPOSITORY",
		      tag_name: tagName,
		      name: releaseName,
		    });
	  console.log(`Created release ${releaseName} (${release.data.html_url})`);
};

createRelease();
