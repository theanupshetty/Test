using api.Data;
using api.Repository.Implementations;
using api.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace api.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static WebApplicationBuilder AddApplicationServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<DataContext>(options =>
           {
               options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
           });
            return builder;
        }
        public static WebApplicationBuilder AddDependencies(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<ICurriculumVitae, CurriculumVitae>();
            return builder;
        }
        public static WebApplicationBuilder AddCorsServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddCors(p => p.AddPolicy("allowReactApp", builder =>
            {
                builder.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
            }));

            return builder;
        }
    }
}