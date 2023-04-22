using Microsoft.OpenApi.Models;
using foodie_api.Models;
using foodie_api.Services;
using Microsoft.AspNetCore.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<FoodieDatabaseSettings>(
    builder.Configuration.GetSection("FoodieDatabase"));

builder.Services.AddSingleton<RecipesService>();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Foodie API", Description = "Give me all the Food", Version = "v1" });
});

var app = builder.Build();

app.MapControllers();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Foodie API V1");
});


app.Run();
