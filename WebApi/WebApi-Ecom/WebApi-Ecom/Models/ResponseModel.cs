using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebApi_Ecom.Models
{
    public class ResponseModel
    {
        public HttpStatusCode code {get;set;}

        public object data { get; set; }

        public string message { get; set; }

        public ResponseModel(HttpStatusCode Code,string Message)
        {
            code = Code;
            message = Message;
        }

        public ResponseModel(HttpStatusCode Code,object Data,string Message)
        {
            code = Code;
            data = Data;
            message = Message;
        }

    }
}
