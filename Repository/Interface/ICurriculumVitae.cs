using api.Models;

namespace api.Repository.Interface
{
    public interface ICurriculumVitae
    {
        Task AddCV(CV model);
    }
}