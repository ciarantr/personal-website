const config = useRuntimeConfig();
const appConfig = useAppConfig()
const githubAPI = config.githubSecret
const selectedRepos = appConfig.githubRepos
const repoURLS = selectedRepos.map(
  (repo) => `https://api.github.com/repos/ciaran-io/${repo}`
)

type repoData = {
  name: string
  description: string
  language: string
  topics: Array<string>
  html_url: string
  homepage: string,
  languages: Object | null
}

  const repoDataList: Array<repoData> = []

  repoURLS.forEach(async (url) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${githubAPI}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  const data = await response.json()

  let { name, description, language, topics, homepage, html_url }: repoData = data

  name = name.replace(/-/g, " ")
  repoDataList.push({
    name,
    description,
    language,
    topics,
    homepage,
    html_url,
    languages: null
  })
})

export default defineEventHandler((event) => {
 // create a async promise that resolves after 5 seconds
 return  repoDataList

})
