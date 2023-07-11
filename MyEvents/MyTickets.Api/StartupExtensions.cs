﻿using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using MyTickets.Api.Middleware;
using MyTickets.Api.Services;
using MyTickets.Application;

using MyTickets.Application.Contracts;
using MyTickets.Identity;
using MyTickets.Persistance;
using Serilog;

namespace MyTickets.Api
{
    public static class StartupExtensions
    {
       public static WebApplication ConfigureServices( this WebApplicationBuilder builder)
        {
            AddSwagger(builder.Services);
            builder.Services.AddAplicationServices();
            builder.Services.AddPersistanceServices(builder.Configuration);
            builder.Services.AddIdentityServices(builder.Configuration);
            builder.Services.AddScoped<ILoggedInUserService, LoggedInUserService>();
            builder.Services.AddHttpContextAccessor();

            builder.Services.AddControllers();
            builder.Services.AddCors(option => option.AddPolicy("Open", builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
        return builder.Build();
        }


        public static WebApplication ConfigurePipeline(this WebApplication app)
        {
         
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My Ticket Management API");
                });
            }
            app.UseHttpsRedirection();  
           // app.UseRouting();
            app.UseAuthentication(); 
            app.UseCustomExceptionHandler();
            app.UseSerilogRequestLogging();
            app.UseCors("Open");
            app.UseAuthorization();
            app.MapControllers();
            return app;
        }
        private static void AddSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                      Enter 'Bearer' [space] and then your token in the text input below.
                      \r\n\r\nExample: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                  {
                    {
                      new OpenApiSecurityScheme
                      {
                        Reference = new OpenApiReference
                          {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                          },
                          Scheme = "oauth2",
                          Name = "Bearer",
                          In = ParameterLocation.Header,

                        },
                        new List<string>()
                      }
                    });

                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "My Tickets Management API",

                });

            });
        }
        public static async Task ResetDatabaseAsync(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            try
            {
                var context = scope.ServiceProvider.GetService<MyTicketsDbContext>();
                if (context != null)
                {
                    await context.Database.EnsureDeletedAsync();
                    await context.Database.MigrateAsync();
                }
            }
            catch (Exception ex)
            {
                
            }
        }
    }
}