import { EventRepository } from './event.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { ModifyEventDto } from './dto/modify-event.dto';
import { Between } from 'typeorm';
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
  
  async getEventsByDate(date: Date): Promise<Event[]> {
    //const events = this.events;
    // console.log(events, Date);
    // for (let event of events) {
    //   if (event.dateStart.getDate() == date.getDate() && event.dateStart.getMonth() == date.getMonth() && event.dateStart.getFullYear() == date.getFullYear()) {
    //     return [event];
    //   }
    // }
    //console.log(events);
    let dbDate = date.toUTCString();
    const events = await this.EventRepository.find({ 
      where: {
        dateStart: Between(
          new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
        )
      }
    })
    // events = events.filter((event) => event.Date === Date);
    return events;
  }

  getEventById(id: number): Event {
    const event = this.events.find((event) => event.id === id);
    return event;
  }

  modifyEvent(id: number, modifyEventDto: ModifyEventDto): Event {
    const event = this.getEventById(id);
    let { name, dateStart, dateEnd, type, feedback, location, description, category, repetition, color } = modifyEventDto;
    if (name) {
      event.name = name;
    }
    if (dateStart) {
      event.dateStart = dateStart;
    }
    if (dateEnd) {
      event.dateEnd = dateEnd;
    }
    if (type) {
      event.type = type;
    }
    if (feedback) {
      event.feedback = feedback;
    }
    if (location) {
      event.location = location;
    }
    if (description) {
      event.description = description;
    }
    if (category) {
      event.category = category;
    }
    if (repetition) {
      event.repetition = repetition;
    }
    if (color) {
      event.color = color;
    }
    return event;
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