const config = useRuntimeConfig();
const appConfig = useAppConfig()
const githubAPI: string = config.githubSecret
const githubURL: string = appConfig.githubURL
const selectedRepos: Array<string> = appConfig.githubRepos

const repoLanguageURLS = selectedRepos.map(
  (url) => `${githubURL}/${url}/languages`
)

const repoLanguagesList: Array<object> = []

interface data {
  [key: string]: number
}

repoLanguageURLS.forEach(async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubAPI}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    const data: data = await response.json()
    // add up the values of the languages
    const total = Object.values(data).reduce((a, b) => a + b, 0)

    // convert the values to percentages
    const percentages = Object.values(data).map((value) =>
      ((value / total) * 100).toFixed(2)
    )
    // convert the keys to an array
    const languages = Object.keys(data)
    // create an object with the keys and values
    const languagesObject = languages.map((language, index) => ({
      language,
      percentage: percentages[index],
    }))
    // add the object to the array
    repoLanguagesList.push(languagesObject)

  } catch (error) {
    console.log(error)
  }
}
)

export default defineEventHandler((event) => {

  return  repoLanguagesList

})
