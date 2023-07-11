using AutoMapper;
using MediatR;
using MyTicket.Domain.Entites;
using MyTickets.Application.Contracts.Persistence;
using MyTickets.Application.Features.Events.Commands.UpdateEvent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTickets.Application.Features.Events.Commands.DeleteEvent
{
    public class DeleteEventCommandHandler:IRequestHandler<DeleteEventCommand>
    {
        private readonly IAsyncRepository<Event> _eventRepository;
        private readonly IMapper _mapper;

        public DeleteEventCommandHandler(IMapper mapper, IAsyncRepository<Event> eventRepository)
        {
            _mapper = mapper;
            _eventRepository = eventRepository;
        }

        public async Task Handle(DeleteEventCommand request, CancellationToken cancellationToken)
        {

            var eventToDelete = await _eventRepository.GetByIdAsync(request.EventId);


            await _eventRepository.DeleteAsync(eventToDelete);

            return ;
        }

    }
}
