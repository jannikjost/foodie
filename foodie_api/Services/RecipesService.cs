using foodie_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace foodie_api.Services
{
    public class RecipesService
    {
        private readonly IMongoCollection<Recipe> _recipeCollection;

        public RecipesService(
            IOptions<FoodieDatabaseSettings> foodieDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                foodieDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                foodieDatabaseSettings.Value.DatabaseName);

            _recipeCollection = mongoDatabase.GetCollection<Recipe>(
                foodieDatabaseSettings.Value.RecipesCollectionName);
        }

        public async Task<List<Recipe>> GetAsync() =>
            await _recipeCollection.Find(_ => true).ToListAsync();

        public async Task<Recipe?> GetAsync(string id) =>
            await _recipeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<List<Recipe>> GetFavoritesAsync() => await _recipeCollection.Find(x => x.Favorite != null && x.Favorite == true).ToListAsync();

        public async Task<List<Recipe>> GetAsyncFiltered(string filter) => await _recipeCollection.Find(x => x.Name != null && x.Name.Contains(filter)).ToListAsync();

        public async Task<List<Recipe>> GetFavorites() => await _recipeCollection.Find(x => x.Favorite != null && x.Favorite == true).ToListAsync();

        public async Task CreateAsync(Recipe newRecipe) =>
            await _recipeCollection.InsertOneAsync(newRecipe);

        public async Task UpdateAsync(string id, Recipe updatedRecipe) =>
            await _recipeCollection.ReplaceOneAsync(x => x.Id == id, updatedRecipe);

        public async Task RemoveAsync(string id) =>
            await _recipeCollection.DeleteOneAsync(x => x.Id == id);
    }
}
