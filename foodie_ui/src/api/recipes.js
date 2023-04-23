const basePath = '/api/recipes/'

async function getFilteredRecipes(filter) {
  if (!filter) {
    const rawResponse = await fetch(basePath)
    const content = await rawResponse.json()
    return content
  } else {
    const rawResponse = await fetch(basePath + 'filtered/' + filter)
    const content = await rawResponse.json()
    return content
  }
}

async function getRecipeById(id) {
  const rawResponse = await fetch(basePath + id)
  const content = await rawResponse.json()
  return content
}

async function getFavorites() {
  const rawResponse = await fetch(basePath + 'favorites')
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

async function updateRecipe(recipe) {
  await fetch(basePath + recipe.id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
}

async function deleteRecipe(id) {
  await fetch(basePath + id, {
    method: 'DELETE'
  })
}

export default {
  getFilteredRecipes,
  getRecipeById,
  getFavorites,
  createRecipe,
  updateRecipe,
  deleteRecipe
}
