namespace PortalRandkowy.API.Helpers
{
    public class MessageParams
    {
        public const int MaxPageSize = 48;

        public int PageNumber { get; set; } = 1;
        public int pageSize = 24;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }
        
        public int UserId { get; set; }

        public string MessageContainer { get; set; } = "Nieprzeczytana";
    }
}
