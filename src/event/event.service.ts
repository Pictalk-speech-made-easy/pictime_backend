import { Injectable } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';

import { v4 as uuid } from 'uuid';
import { CreateEventDto } from './dto/create-event.dto';
@Injectable()
export class EventsService {
  private events: Event[] = [];
  // ICI IL TE FAUT :
  // getEventById
  // getAllEvents
  // getEventsSearchName
  // createEvent
  // modifyEvent
  // deleteEvent
  // REGARDE DANS LE REPO PICTALK : picto.service.ts 


  // Je met en commentaire pour que ça crash pas pour clem
  /*
  createEvent(createEventDto: CreateEventDto): Event {
    const {
      name,
      dateStart,
      dateEnd,
      start,
      type,
      feedback,
      location,
      description,
      category,
      repetition,
      color,
    } = createEventDto;
    // tout ce bloc, il va pas marcher tant que
    // tu auras pas trouver comment faire passer
    // une date au bon format
    // soit String et tu converti dans le controller
    // soit tu converti dans le Dto (meilleur)
    
    const Event: Event = {
      name,
      dateStart,
      dateEnd,
      start,
      type,
      feedback,
      location,
      description,
      category,
      repetition,
      color,
    };
    
    this.events.push(Event);
    return Event;
    
  }*/
  // cette fonction elle devra faire un appel au repository
  // le repository fera une query à la base de données
  getAllEvents(): Event[] {
    return this.events;
  }
  // cette fonction elle devra faire un appel au repository
  // le repository fera une query à la base de données
  /*
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
  */
  // cette fonction elle devra faire un appel au repository
  // le repository fera une query à la base de données
  /*
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
  */
}