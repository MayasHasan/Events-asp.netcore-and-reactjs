using Microsoft.EntityFrameworkCore;
using MyTickets.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace MyTickets.Persistance.Repositories
{
    public class BaseRepository<T> : IAsyncRepository<T> where T : class
    {
        protected readonly MyTicketsDbContext _dbContext;

        public BaseRepository(MyTicketsDbContext dbContext) {
            _dbContext = dbContext;
        }

        public  async Task<T> GetByIdAsync(Guid id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }
        public virtual async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public  async Task<T> AddAsync(T entity)
        {
             await _dbContext.Set<T>().AddAsync(entity);
             await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteAsync(T entity)
        {
                _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();


        }

        public async Task UpdateAsync(T entity)
        {
            //_dbContext.Set<T>().Update(entity);
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
