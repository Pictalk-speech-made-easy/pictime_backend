import { InternalServerErrorException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from "src/entities/event.entity";
import { EntityRepository, Repository } from "typeorm";
import { User } from 'src/entities/user.entity';


@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
    // Inspire toi du code pour les Picto de Pictalk et fait pareil pour les events
    // ICI IL TE FAUT :
    // createEvent
    // modifyEvent
    // REGARDE SUR LE REPO PICTALK picto.repository.ts
    async createEvent(createEventDto: CreateEventDto): Promise<Event> {
        let { name, dateStart, dateEnd, type, feedback, location, description, category, repetition, color} = createEventDto;
        const event = new Event();
        event.name = name;
        console.log("dateStart", dateStart);
        console.log("typeof +DS", typeof +dateStart);
        const dateStartDate = new Date(+dateStart);
        console.log("dateStartDate (after conversion to date)", dateStartDate);
        console.log("typeof dateStartDate", typeof dateStartDate);
        console.log("Time value in ms : ", dateStartDate.getTime());
        console.log("Difference in minutes between the time on the local computer and Universal Coordinated Time (UTC)", dateStartDate.getTimezoneOffset())
        console.log("Date converted to a string using Universal Coordinated Time (UTC)", dateStartDate.toUTCString());
        const dateEndDate = new Date(+dateEnd);
        // console.log(Date.UTC(2022, 11, 6, 15, 55, 30));

        // to counter the time zone effect 
        let dbDateStart = new Date(dateStartDate.getTime()); 
        let dbDateEnd = new Date(dateEndDate.getTime());
        console.log("dbDate", dbDateStart);
        event.dateStart = new Date(dbDateStart);
        event.dateEnd = new Date(dbDateEnd);
        event.type = type ? type : null;
        event.feedback = feedback ? feedback : null;
        event.location = location ? location : null;
        event.description = description ? description : null;
        event.category = category ? category : null;
        event.repetition = repetition;
        event.color = color;
        try { 
            await event.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
        return event; 
    }

    async modifyEvent(event: Event, modifyEventDto: CreateEventDto): Promise<Event> {
        let { name, dateStart, dateEnd, type, feedback, location, description, category, repetition, color } = modifyEventDto;
        if (name) {
          event.name = name;
        }
        if (dateStart) {
            const dateStartDate = new Date(+dateStart);
            let dbDateStart = new Date(dateStartDate.getTime()); 
            event.dateStart = new Date(dbDateStart);
        }
        if (dateEnd) {
            const dateEndDate = new Date(+dateEnd);
            let dbDateEnd = new Date(dateEndDate.getTime()); 
            event.dateEnd = new Date(dbDateEnd);
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

    async deleteEvent(event: Event): Promise<Event> {
        return event;
    }

    /*
    async createPicto(createPictoDto: CreatePictoDto, user: User, filename: string): Promise<Picto> {
        let { meaning, speech, collectionIds, color} = createPictoDto;
        const picto = new Picto();
        picto.meaning = meaning;
        picto.speech = speech;
        picto.image = filename;
        picto.userId = user.id;
        if(color){
            picto.color=color;
        }
        if(collectionIds){
            collectionIds=parseNumberArray(collectionIds);
            picto.collections = collectionIds.map(collectionIds => ({ id: collectionIds } as any));
        }

        // ICI ON SAVE DANS LA BASE DE DONNEES

        try { 
            await picto.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
        //delete picto.user;
        return picto;
    }

    async modifyPicto(picto: Picto, modifyPictoDto: modifyPictoDto, user: User, filename: string): Promise<Picto> {
        let { meaning, speech, collectionIds, starred, color} = modifyPictoDto;
        if(meaning){
            picto.meaning = meaning;
        }
        if(speech){
            picto.speech = speech;
        }
        if(color){
            picto.color=color;
        }
        if (filename) {
            picto.image = filename;
        }
        if(collectionIds){
            collectionIds=parseNumberArray(collectionIds);
            picto.collections = collectionIds.map(collectionIds => ({ id: collectionIds } as any));
        }
        if(starred){
            picto.starred = (starred=="true");
        }
        await picto.save();
        //delete picto.user;
        return picto;
    }
    */
}
