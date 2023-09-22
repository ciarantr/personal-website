const config = useRuntimeConfig()
const appConfig = useAppConfig()

const githubAPI = config.githubSecret
const selectedRepos = appConfig.githubRepos
const githubURL: string = appConfig.githubURL

const repoLanguageUrls = selectedRepos.map(
  (repo) => `${githubURL}/${repo}/languages`
)

const repoUrls = selectedRepos.map((repo) => `${githubURL}/${repo}`)

type repoData = {
  name: string
  description: string
  language: string
  html_url: string
  homepage: string
  languages?: Object | null
}

async function fetchUrls(urls: Array<string>) {
  try {
    const requests = urls.map((url) =>
      fetch(url, {
        headers: {
          Authorization: `Bearer ${githubAPI}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
    )
    const responses = await Promise.all(requests)
    const data: Array<Object> = await Promise.all(
      responses.map((response) => response.json())
    )
    return data
  } catch (error) {
    console.error(error, 'error loading github data from api')
  }

}

function extractKeyRepoData(data: Array<any>) {
  const repoData: Array<repoData> = []
  const languages: Array<Object> = []

  for (let { name, description, language, homepage, html_url} of data) {
    const imageUrl = name;
    name = name.replace(/-/g, " ")

    repoData.push({
      name,
      imageUrl,
      description,
      language,
      homepage,
      html_url,
      languages
    })
  }
  return repoData
}

function convertRepoLanguageData(repoLang: Object): Array<Object> {

  const total = Object.values(repoLang).reduce((a, b) => a + b, 0)

  // convert the values to percentages
  const percentages = Object.values(repoLang).map((value) =>
    ((value / total) * 100).toFixed(2)
  )
  // convert the keys to an array
  const languages = Object.keys(repoLang)

  // Return an array of objects with the keys and values (language and percentage)
  return languages.map((language, index) => ({
    language,
    percentage: percentages[index],
  }))
}

export default defineEventHandler( (event) => {


  async function githubRepoData() {
    const repoData = await fetchUrls(repoUrls).then((repoData) => {
      if (repoData) {
        return extractKeyRepoData(repoData)
      }
    })
    const repoLangData = await fetchUrls(repoLanguageUrls)

    // add the language data to the repoData
    if ( repoData && repoLangData) {
      repoData.forEach((repo, index) => {

        repo.languages = convertRepoLanguageData((repoLangData[index]))
      })
    }
    return repoData
  }

  return  githubRepoData()
})
