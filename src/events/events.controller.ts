import {
  Body,
  Controller,
  Get,
  Post,
  //   Param,
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
    return this.EventsService.createEvent(createEventDto);
  }
  // modify

  // read
  @Get()
  getEvents(@Query() date: string): Event[] {
    return this.EventsService.getEventsByDay(date);
  }
  //delete
  @Delete()
  deleteEvent(@Body() id: number): string {
    return this.EventsService.deleteEvent(id);
  }
}
