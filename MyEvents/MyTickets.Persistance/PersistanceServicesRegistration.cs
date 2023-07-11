using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyTickets.Application.Contracts.Persistence;
using MyTickets.Persistance.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MyTickets.Persistance
{
    public static class PersistanceServicesRegistration  
    {
        public static IServiceCollection AddPersistanceServices(this IServiceCollection services , IConfiguration configuration)
        {
            services.AddDbContext<MyTicketsDbContext>(options =>
                 options.UseSqlServer(configuration.GetConnectionString("MyEventDBConnectionString")));
            services.AddScoped(typeof(IAsyncRepository<>), typeof(BaseRepository<>));
            services.AddScoped<IEventRepository,EventRepository> ();
            services.AddScoped< ICategoryRepository, CategoryRepository > ();
            return services;
        }
    }
}