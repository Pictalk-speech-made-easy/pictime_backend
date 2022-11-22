import { EventRepository } from './event.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EventsController } from './event.controller';
import { EventsService } from './event.service';


@Module({
    // cette import il te lie à la BDD en quelque sorte
    imports: [
        TypeOrmModule.forFeature([EventRepository]),
      ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}