using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;

namespace WebApi_Ecom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public AccountController()
        {
           
        }

        [EnableCors()]
        [Route("login")]
        [HttpGet,AllowAnonymous]
        public HttpResponseMessage Login(string UserName, string Password)
        {

            //HttpResponseMessage Request = new HttpResponseMessage();
            HttpResponseMessage response = new HttpResponseMessage() { Content = new StringContent("Login Successfull"), StatusCode = HttpStatusCode.OK };
       
            return response;
        }
    }
}