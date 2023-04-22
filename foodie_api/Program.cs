using Microsoft.OpenApi.Models;
using RecipeStore.DB;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Foodie API", Description = "Give me all the Food", Version = "v1" });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Foodie API V1");
});



app.MapGet("/recipes/{id}", (int id) => RecipeDB.GetRecipe(id));
app.MapGet("/recipes", () => RecipeDB.GetRecipes());
app.MapPost("/recipes", (Recipe recipe) => RecipeDB.CreateRecipe(recipe));
app.MapPut("/recipes", (Recipe recipe) => RecipeDB.UpdateRecipe(recipe));
app.MapDelete("/recipes/{id}", (int id) => RecipeDB.RemoveRecipe(id));

app.Run();
