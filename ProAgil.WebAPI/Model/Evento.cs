namespace ProAgil.WebAPI.Model
{
    public class Evento
    {
        public int  eventoId { get; set;}
        public string  local { get; set;}
        public string   dataEvento { get; set;}
        public string  tema { get; set;}
        public int  qntPessoas { get; set;}
        public string  lote { get; set; }
    }
}