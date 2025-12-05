namespace RegFormApi.Models
{
    public class User
    {
        public int Id { get; set; }           // primary key
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;

        public string MobileNo { get; set; } = string.Empty;
        public DateTime Dob { get; set; }
        public string Email { get; set; } = string.Empty;
    }
}
