using System;

namespace PortalRandkowy.API.Dtos
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int RecipientId { get; set; }
        public DateTime DataSent { get; set; }
        public string Content { get; set; }

        public MessageForCreationDto()
        {
            DataSent = DateTime.Now;
        }
    }
}
