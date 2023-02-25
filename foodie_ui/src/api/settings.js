function createRecipe(recipe) {
  return new Promise((resolve, reject) => {
    console.log('api', 'createRecipe', recipe)
    resolve(recipe)
  })
}

export default { createRecipe }
