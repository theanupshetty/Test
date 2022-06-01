using api.Data;
using api.Models;
using api.Repository.Interface;

namespace api.Repository.Implementations
{
    public class CurriculumVitae : ICurriculumVitae
    {
        private readonly DataContext _context;
        public CurriculumVitae(DataContext context)
        {
            _context = context;
        }
        public async Task AddCV(CV model)
        {
            _context.CurriculumVitae.Add(model);
            await _context.SaveChangesAsync();
        }
    }
}