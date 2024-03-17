using System.ComponentModel;

namespace Api.DTOs.Account
{
    public class LoginDto
    {
        [DefaultValue("kerem@mail.com")]
        public string UserName { get; set; }
        [DefaultValue("123456")]
        public string Password { get; set; }
    }
}