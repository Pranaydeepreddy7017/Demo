const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ auth: "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" });

const tagName = "v" + require("../package.json").version;
const releaseName = "Release " + require("../package.json").version;

const createRelease = async () => {
	  const { data: release } = await octokit.repos.createRelease({
		      owner: "Pranaydeepreddy7017",
		      repo: "Demo",
		      tag_name: tagName,
		      name: releaseName,
		    });
	  console.log(`Created release ${releaseName} (${release.data.html_url})`);
};

createRelease();
