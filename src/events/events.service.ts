import { Injectable } from '@nestjs/common';
import { Event } from './events.model';
import { v4 as uuid } from 'uuid';
import { CreateEventDto } from './dto/create-event.dto';
@Injectable()
export class EventsService {
  private events: Event[] = [];
  createEvent(createEventDto: CreateEventDto): Event {
    const {
      Name,
      Date,
      Duration,
      Start,
      Type,
      Feedback,
      Location,
      Description,
      Category,
      Repetition,
      Color,
    } = createEventDto;
    const Event: Event = {
      id: uuid(),
      Name,
      Date,
      Duration,
      Start,
      Type,
      Feedback,
      Location,
      Description,
      Category,
      Repetition,
      Color,
    };
    this.events.push(Event);
    return Event;
  }
  getAllEvents(): Event[] {
    return this.events;
  }
  getEventsByDay(Date: string): Event[] {
    let events = this.getAllEvents();
    events = events.filter((event) => event.Date === Date);
    return events;
  }
  deleteEvent(id: number): string {
    this.events = this.events.filter((event) => event.id !== id);
    return 'Event deleted';
  }
}
