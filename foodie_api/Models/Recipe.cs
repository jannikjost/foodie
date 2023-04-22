using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace foodie_api.Models
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
    public class Recipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Picture { get; set; }
        public string? Link { get; set; }
        public List<Ingredient>? Ingredients { get; set; }
        public NutritionFacts? NutritionFacts { get; set; }
    }
}
