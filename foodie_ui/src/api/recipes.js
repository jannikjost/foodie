const basePath = '/api/recipes/'

async function getFilteredRecipes(filter) {
  if (!filter) {
    const rawResponse = await fetch(basePath)
    const content = await rawResponse.json()
    return content
  }
}

async function getRecipeById(id) {
  const rawResponse = await fetch(basePath + id)
  const content = await rawResponse.json()
  return content
}

async function createRecipe(recipe) {
  const rawResponse = await fetch(basePath, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
  const content = await rawResponse.json()
  return content
}

export default { getFilteredRecipes, getRecipeById, createRecipe }
