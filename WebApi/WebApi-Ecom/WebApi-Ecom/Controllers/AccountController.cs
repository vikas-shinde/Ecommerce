using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;
using WebApi_Ecom.Models;

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
        public IActionResult Login(string UserName, string Password)
        {
            ResponseModel responseModel = new ResponseModel(HttpStatusCode.OK, "Login Successful");
            //HttpResponseMessage Request = new HttpResponseMessage();
            return Ok(responseModel);
        }
    }
}