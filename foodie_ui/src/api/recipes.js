const recipes = [
  {
    id: '0',
    name: 'filter',
    picture: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    link: '',
    ingredients: [
      { name: 'pasta', amount: 100, unit: 'g' },
      { name: 'pepper', amount: 150, unit: 'g' }
    ],
    nutritionFacts: {
      calories: 600,
      fat: 10,
      carbohydrate: 100,
      protein: 20
    }
  },
  {
    id: '1',
    name: 'test',
    picture: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
    link: '',
    ingredients: [{ name: 'pasta', amount: 100, unit: 'g' }]
  },
  {
    id: '2',
    name: 'test2',
    picture: 'https://i.imgur.com/UtG9VVd.jpeg',
    link: '',
    ingredients: [{ name: 'pasta', amount: 100, unit: 'g' }]
  },
  {
    id: '3',
    name: 'test3',
    picture: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
    link: '',
    ingredients: [{ name: 'pasta', amount: 100, unit: 'g' }]
  },
  {
    id: '4',
    name: 'test4',
    picture: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
    link: '',
    ingredients: [{ name: 'pasta', amount: 100, unit: 'g' }]
  }
]

function getFilteredRecipes(filter) {
  return new Promise((resolve, reject) => {
    if (!filter) {
      resolve(recipes)
    } else {
      resolve([recipes[0]])
    }
  })
}

function getRecipeById(id) {
  return new Promise((resolve, reject) => {
    resolve(recipes.find((recipe) => recipe.id === id))
  })
}

export default { getFilteredRecipes, getRecipeById }
