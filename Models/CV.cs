using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class CV
    {
        [Key]
        public int UserID { get; set; }

        [Required(ErrorMessage = "First name is required")]
        [MaxLength(15, ErrorMessage = "Maximum charaters of 15 allowed")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required")]
        [MaxLength(15, ErrorMessage = "Maximum charaters of 15 allowed")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Enter valid email address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        [Phone(ErrorMessage = "Enter valid phone")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Live in U.S is required")]
        public bool LiveInUs { get; set; }

        [Required(ErrorMessage = "Git profile is required")]
        public string GitProfile { get; set; }

        [Required(ErrorMessage = "CV is required")]
        public byte[] CVFile { get; set; }

        [Required(ErrorMessage = "Cover letter is required")]
        public byte[] CoverLetter { get; set; }

        [Required(ErrorMessage = "About you is required")]
        public string AboutYou { get; set; }

    }
}