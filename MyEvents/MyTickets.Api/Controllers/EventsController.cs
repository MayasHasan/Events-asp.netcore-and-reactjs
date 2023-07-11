using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyTickets.Application.Features.Events.Commands.CreateEvent;
using MyTickets.Application.Features.Events.Commands.DeleteEvent;
using MyTickets.Application.Features.Events.Commands.UpdateEvent;
using MyTickets.Application.Features.Events.Queries.GetEventDetail;
using MyTickets.Application.Features.Events.Queries.GetEventList;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace MyTickets.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public EventsController(IMediator mediator, IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;

            _mediator = mediator;
        }
       // [Authorize]
        [HttpGet(Name = "GetAllEvents")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<EventListVm>>> GetAllEvents()
        {
           

            var dtos = await _mediator.Send(new GetEventsListQuery());
            return Ok(dtos);
        }

        [HttpGet("{id}", Name = "GetEventById")]
        public async Task<ActionResult<EventDetailVm>> GetEventById(Guid id)
        {
            var getEventDetailQuery = new GetEventDetailQuery() { Id = id };
            return Ok(await _mediator.Send(getEventDetailQuery));
        }
        //[Authorize]
        [HttpPost(Name = "AddEvent")]
        public async Task<ActionResult<Guid>> Create([FromForm] CreateEventCommand createEventCommand)
        {
            var path = Path.Combine(_webHostEnvironment.WebRootPath, "Images", createEventCommand.Image.FileName);

          
            using (var stream = new FileStream(path, FileMode.Create))
            {
                await createEventCommand.Image.CopyToAsync(stream);

            }
            createEventCommand.ImageUrl = path;
             var id = await _mediator.Send(createEventCommand);
            return Ok(id);
        }

        [HttpPut(Name = "UpdateEvent")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Update([FromForm] UpdateEventCommand updateEventCommand)
        {
            
            await _mediator.Send(updateEventCommand);
            return NoContent();
        }

        [HttpDelete("{id}", Name = "DeleteEvent")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Delete(Guid id)
        {
            var deleteEventCommand = new DeleteEventCommand() { EventId = id };
            await _mediator.Send(deleteEventCommand);
            return NoContent();
        }

       
    }
}
