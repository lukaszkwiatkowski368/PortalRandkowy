namespace PortalRandkowy.API.Models
{
    public class Like
    {
        public int UserLikesId { get; set; }   //użytkownik lubi
        public int UserIsLikedId { get; set; }   //użytkownik jest lubiany
        public User UserLikes { get; set; }
        public User UserIsLiked{ get; set; }
    }
}