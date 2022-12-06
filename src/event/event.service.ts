import { EventRepository } from './event.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepository)
    private EventRepository : EventRepository,
  ) {} 
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
  createEvent(createEventDto: CreateEventDto): Promise<Event> {
    // tout ce bloc, il va pas marcher tant que
    // tu auras pas trouver comment faire passer
    // une date au bon format
    // soit String et tu converti dans le controller
    // soit tu converti dans le Dto (meilleur)
    console.log(createEventDto);
    return this.EventRepository.createEvent(createEventDto);

  }
  // cette fonction elle devra faire un appel au repository
  // le repository fera une query à la base de données
  getAllEvents(): Event[] {
    return this.events;
  }
  // cette fonction elle devra faire un appel au repository
  // le repository fera une query à la base de données
  
  getEventsByDate(date: Date): Event[] {
    const events = this.events;
    // console.log(events, Date);
    for (let event of events) {
      if (event.dateStart.getDate() == date.getDate() && event.dateStart.getMonth() == date.getMonth() && event.dateStart.getFullYear() == date.getFullYear()) {
        return [event];
      }
    }
    console.log(events);
    // events = events.filter((event) => event.Date === Date);
    return events;
  }
  
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