namespace foodie_api.Models
{
    public class FoodieDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string RecipesCollectionName { get; set; } = null!;
    }
}
