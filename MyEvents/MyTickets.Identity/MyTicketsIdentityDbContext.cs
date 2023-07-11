using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyTicket.Domain.Entites;
using MyTickets.Identity.Models;
using MyTickets.Identity.Seed;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace MyTickets.Identity
{
    public class MyTicketsIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public MyTicketsIdentityDbContext()
        {

        }

        public MyTicketsIdentityDbContext(DbContextOptions<MyTicketsIdentityDbContext> options) : base(options)
        {
        }
       
    }
}
