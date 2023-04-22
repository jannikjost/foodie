namespace RecipeStore.DB
{
    public record Ingredient
    {
        public string? Name { get; set; }
        public double? Amount { get; set; }
        public string? Unit { get; set; }
    }

    public record NutritionFacts
    {
        public double? Calories { get; set; }
        public double? Fat { get; set; }
        public double? Carbohydrate { get; set; }
        public double? Protein { get; set; }
    }

    public record Recipe
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Picture { get; set; }
        public string? Link { get; set; }
        public List<Ingredient>? Ingredients { get; set; }
        public NutritionFacts? NutritionFacts { get; set; }
    }

    public class RecipeDB
    {
        private static List<Recipe> _recipes = new()
        {
            new Recipe{ Id=1, Name="filter", Picture= "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
            new Recipe{ Id=2, Name="test", Picture= "https://i.vimeocdn.com/portrait/58832_300x300.jpg"},
            new Recipe{ Id=3, Name="test2", Picture= "https://i.imgur.com/UtG9VVd.jpeg"}
        };

        public static List<Recipe> GetRecipes()
        {
            return _recipes;
        }

        public static Recipe? GetRecipe(int id)
        {
            return _recipes.SingleOrDefault(Recipe => Recipe.Id == id);
        }

        public static Recipe CreateRecipe(Recipe Recipe)
        {
            _recipes.Add(Recipe);
            return Recipe;
        }

        public static Recipe UpdateRecipe(Recipe update)
        {
            _recipes = _recipes.Select(Recipe =>
            {
                if (Recipe.Id == update.Id)
                {
                    Recipe.Name = update.Name;
                }
                return Recipe;
            }).ToList();
            return update;
        }

        public static void RemoveRecipe(int id)
        {
            _recipes = _recipes.FindAll(Recipe => Recipe.Id != id).ToList();
        }
    }
}