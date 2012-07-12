using System.Web.Http;

namespace NovaWeb.ControllersApi
{
    public class ProdutosController : ApiController
    {
        public object Get(int id)
        {
            return new
                {
                    id = 1,
                    nome = "Produto 1",
                    descricao = "Alguma descricao"
                };
        }
    }
}
