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
    const events = this.events;
    // console.log(events, Date);
    for (const event of events) {
      if (event.Date == Date) {
        return [event];
      }
    }
    // events = events.filter((event) => event.Date === Date);
    return events;
  }
  deleteEvent(id: number): string {
    // this.events = this.events.filter((event) => event.id !== id);
    const events = this.events;
    for (const event of events) {
      if (event.id == id) {
        // this.events.remove(event);
      }
    }
    return 'Event deleted';
  }
}
