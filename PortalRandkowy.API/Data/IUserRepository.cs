using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Helpers;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
         Task<PagedList<User>> GetUsers(UserParams userParams);
         Task<User> GetUser(int id);

         Task<Photo> GetPhoto(int id);

         Task<Photo> getMainPhotoForUser(int userID);

         Task<Like> GetLike(int userId, int recipientId);
         Task<Message> GetMessage(int id);

         Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);

         Task<IEnumerable<Message>> GetMessageTread(int userId, int recipientId);

         Task<User> DeleteUser(int id);

    }
}