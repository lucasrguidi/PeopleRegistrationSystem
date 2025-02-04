using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private static List<Person> people = new List<Person>();

        [HttpPost("add")]
        public IActionResult AddPerson([FromBody] Person person)
        {
            if (person == null || string.IsNullOrWhiteSpace(person.Name) || string.IsNullOrWhiteSpace(person.CPF))
            {
                return BadRequest("Nome e CPF são obrigatórios.");
            }

            if (people.Any(p => p.CPF == person.CPF))
            {
                return Conflict("Já existe uma pessoa cadastrada com esse CPF.");
            }

            people.Add(person);
            return Ok("Pessoa cadastrada com sucesso, código " + person.Code);
        }

        [HttpDelete("remove/{id}")]
        public IActionResult RemovePerson(Guid id)
        {
            var personToRemove = people.FirstOrDefault(p => p.Id == id);

            if (personToRemove == null)
            {
                return NotFound("Pessoa não encontrada.");
            }

            people.Remove(personToRemove);
            return Ok($"Pessoa com ID {id} removida com sucesso.");
        }

        
        [HttpGet("list")]
        public IActionResult GetPeople()
        {
            if (!people.Any())
            {
                return NotFound("Nenhuma pessoa cadastrada.");
            }

            return Ok(people);
        }
    }
}
