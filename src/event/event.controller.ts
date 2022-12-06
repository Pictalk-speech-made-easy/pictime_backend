import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    //   Patch,
    Query,
    ValidationPipe,
  } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
  import { CreateEventDto } from './dto/create-event.dto';
import { dateDto } from './dto/isDate.dto';
import { EventsService } from './event.service';
  // import { GetEvents } from './dto/get-event.dto';
  
  @Controller('events')
  export class EventsController {
    constructor(private EventsService: EventsService) {}
    // Ici c'est très bien, tu fait appel au service
    // tu fait du traitement/conversion de données si besoin avant d'envoyer au service
    // je met en commentaire pour pas que ça crash pour clem
    // ICI IL TE FAUT :
    // getEventById
    // getAllEvents
    // getEventsSearchName, celui là pas prioritaire
    // createEvent
    // modifyEvent
    // deleteEvent
    // REGARDE DANS LE REPO PICTALK : picto.controller.ts 
    /*
    // create
    @Post()
    createEvent(@Body() createEventDto: CreateEventDto): Event {
      // console.log(this.EventsService.createEvent(createEventDto));
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
    */
    @Post()
    createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
      // console.log(typeof createEventDto.feedback);
      return this.EventsService.createEvent(createEventDto);
    }

    @Get('/date')
    getEventsByDate(@Query(ValidationPipe) dateDto: dateDto): Event[] {

      console.log("i'm not deaf");
      let date_milis = Date.parse(dateDto.date); 
      const date = new Date(date_milis)
      console.log(date);
      console.log(typeof(date));
      console.log(date.getDate());
      console.log(date.getMonth());
      console.log(date.getFullYear());
      return this.EventsService.getEventsByDate(date);
    }


  }