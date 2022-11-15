import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  //   Patch,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './events.model';
import { CreateEventDto } from './dto/create-event.dto';
// import { GetEvents } from './dto/get-event.dto';

@Controller('Events')
export class EventsController {
  constructor(private EventsService: EventsService) {}
  // create
  @Post()
  createEvent(@Body() createEventDto: CreateEventDto): Event {
    console.log(this.EventsService.createEvent(createEventDto));
    return this.EventsService.createEvent(createEventDto);
  }
  // modify

  // read
  @Get('/:date')
  getEvents(@Param() date: string): Event[] {
    // console.log(date.date);
    return this.EventsService.getEventsByDay(date);
  }
  //delete
  @Delete('/:id')
  deleteEvent(@Body() id: number): string {
    console.log('deleting ', id);
    return this.EventsService.deleteEvent(id);
  }
}
