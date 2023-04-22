async function getFilteredRecipes(filter) {
  if (!filter) {
    const res = await fetch('api/recipes')
    return await res.json();
  }
}

function getRecipeById(id) {
  return new Promise((resolve, reject) => {
    resolve(recipes.find((recipe) => recipe.id === id))
  })
}

export default { getFilteredRecipes, getRecipeById }
