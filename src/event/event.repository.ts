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
