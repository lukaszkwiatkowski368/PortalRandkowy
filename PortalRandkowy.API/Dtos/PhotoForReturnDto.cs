using System;

namespace PortalRandkowy.API.Dtos
{
    public class PhotoForReturnDto
    {        
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }         // Opis 

        public DateTime DateAdded { get; set; }         // Data dodania

        public bool IsMain { get; set; }
        public string public_Id { get; set; }
    }
}