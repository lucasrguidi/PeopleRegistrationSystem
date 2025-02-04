namespace Backend.Models
{
    public class Person
    {
        public Guid Id { get; set; } = Guid.NewGuid(); 
        public required string Name { get; set; }
        public required string CPF { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public string? Code => CPF.Length >= 4 ? CPF[^4..] : null;
    }
}
