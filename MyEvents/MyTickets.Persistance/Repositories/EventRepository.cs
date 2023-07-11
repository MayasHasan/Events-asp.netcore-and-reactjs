using Microsoft.EntityFrameworkCore;
using MyTicket.Domain.Entites;
using MyTickets.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTickets.Persistance.Repositories
{
    public class EventRepository : BaseRepository<Event>, IEventRepository
    {
        public EventRepository(MyTicketsDbContext dbContext):base(dbContext) 
        {
        }
        public Task<bool> IsEventNameAndDateUnique(string name, DateTime eventDate)
        {
            var matches = _dbContext.Events.Any(e=>e.Name.Equals(name)&& e.Date.Date.Equals(eventDate));
            return Task.FromResult(matches);
        }

    }
}
