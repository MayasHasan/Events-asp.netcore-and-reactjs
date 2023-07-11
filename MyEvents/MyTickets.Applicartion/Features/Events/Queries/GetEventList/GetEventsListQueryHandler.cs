﻿using AutoMapper;
using MediatR;
using MyTicket.Domain.Entites;
using MyTickets.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTickets.Application.Features.Events.Queries.GetEventList
{
    public class GetEventsListQueryHandler : IRequestHandler<GetEventsListQuery, List<EventListVm>>
    {
        private readonly IMapper _mapper;
        private readonly IAsyncRepository<Event> _eventRepository;

        public GetEventsListQueryHandler(IMapper mapper, IAsyncRepository<Event> eventRepository)
        {
            _mapper = mapper;
            _eventRepository = eventRepository;
        }
        public async Task<List<EventListVm>> Handle(GetEventsListQuery request, CancellationToken cancellationToken)
        {
            var allEvents = (await _eventRepository.ListAllAsync()).OrderBy(x => x.Date);
           foreach(var item in allEvents)
            {

                item.ImageUrl = item.ImageUrl.Split("wwwroot\\").Last().Replace("\\", "/");
            }

            return _mapper.Map<List<EventListVm>>(allEvents);
        }
    }
}
