using AutoMapper;
using MyTicket.Domain.Entites;
using MyTickets.Application.Features.Categories.Commands.CreateCateogry;
using MyTickets.Application.Features.Categories.Queries.GetCategoriesList;
using MyTickets.Application.Features.Categories.Queries.GetCategoriesListWithEvnets;
using MyTickets.Application.Features.Events.Commands.CreateEvent;
using MyTickets.Application.Features.Events.Commands.DeleteEvent;
using MyTickets.Application.Features.Events.Commands.UpdateEvent;
using MyTickets.Application.Features.Events.Queries.GetEventDetail;
using MyTickets.Application.Features.Events.Queries.GetEventList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTickets.Application.Profiles
{
  
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Event, EventListVm>().ReverseMap();
        CreateMap<Event, CreateEventCommand>().ReverseMap();
        CreateMap<Event, UpdateEventCommand>().ReverseMap();
        CreateMap<Event, EventDetailVm>().ReverseMap();
        CreateMap<Event, CategoryEventDto>().ReverseMap();

        CreateMap<Category, CategoryDto>();
        CreateMap<Category, CategoryListVm>();
        CreateMap<Category, CategoryEventListVm>();
        CreateMap<Category, CreateCategoryCommand>();
        CreateMap<Category, CreateCategoryDto>();

    }
}
}
