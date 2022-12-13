import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Put,
    Delete,
    //   Patch,
    Query,
    ValidationPipe,
    ParseIntPipe
  } from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
  import { CreateEventDto } from './dto/create-event.dto';
  import { ModifyEventDto } from './dto/modify-event.dto';
  import { DeleteEventDto } from './dto/delete-event.dto';
import { dateDto } from './dto/isDate.dto';
import { EventsService } from './event.service';
import { User } from 'src/entities/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';
  // import { GetEvents } from './dto/get-event.dto';
  
  @Controller('events')
  export class EventsController {
    constructor(private EventsService: EventsService) {}
    // Ici c'est très bien, tu fait appel au service
    // tu fait du traitement/conversion de données si besoin avant d'envoyer au service
    // je met en commentaire pour pas que ça crash pour clem
    // ICI IL TE FAUT :
    // getEventById done
    // getAllEvents done
    // getEventsSearchName, celui là pas prioritaire
    // createEvent done
    // modifyEvent done
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
    @Post() // works
    createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
      // console.log(typeof createEventDto.feedback);
      return this.EventsService.createEvent(createEventDto);
    }

    @Get() 
    getAllEvents(@GetUser() user: User): Promise<Event[]> {
      return this.EventsService.getAllEvents(user);
    }

    @Get('/date') // works
    getEventsByDate(@Query(ValidationPipe) dateDto: dateDto): Promise<Event[]> {
      let date_milis = Date.parse(dateDto.date); 
      console.log(date_milis);
      const date = new Date(date_milis);
      console.log(date);
      console.log(date.toUTCString());
      return this.EventsService.getEventsByDate(date);
    }

    @Get('/id') 
    getEventById(@Query('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<Event> {
      console.log(id);
      return this.EventsService.getEventById(id);
    }

    @Put('/:id')
    modifyEvent(@Param('id', ParseIntPipe) id: number, @Body() modifyEventDto: ModifyEventDto): Promise<Event> {
      // console.log(this.EventsService.createEvent(createEventDto));
      return this.EventsService.modifyEvent(id, modifyEventDto);
    }

    // @Delete('/:id')
    // deleteEvent(@Query() deleteEventDto: DeleteEventDto, id: number): Promise<void> {
    //   deleteEventDto.id = id;
    //   return this.EventsService.deleteEvent(deleteEventDto);
    // }


  }