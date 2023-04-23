using foodie_api.Models;
using foodie_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace foodie_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipesController : ControllerBase
    {
        private readonly RecipesService _recipesService;

        public RecipesController(RecipesService recipesService) =>
            _recipesService = recipesService;

        [HttpGet]
        public async Task<List<Recipe>> Get() =>
            await _recipesService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Recipe>> Get(string id)
        {
            var recipe = await _recipesService.GetAsync(id);

            if (recipe is null)
            {
                return NotFound();
            }

            return recipe;
        }

        [HttpGet("filtered/{filter}")]
        public async Task<List<Recipe>> GetFiltered(string filter) => await _recipesService.GetAsyncFiltered(filter);

        [HttpPost]
        public async Task<IActionResult> Post(Recipe newRecipe)
        {
            await _recipesService.CreateAsync(newRecipe);

            return CreatedAtAction(nameof(Get), new { id = newRecipe.Id }, newRecipe);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Recipe updatedRecipe)
        {
            var recipe = await _recipesService.GetAsync(id);

            if (recipe is null)
            {
                return NotFound();
            }

            updatedRecipe.Id = recipe.Id;

            await _recipesService.UpdateAsync(id, updatedRecipe);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var recipe = await _recipesService.GetAsync(id);

            if (recipe is null)
            {
                return NotFound();
            }

            await _recipesService.RemoveAsync(id);

            return NoContent();
        }
    }
}
