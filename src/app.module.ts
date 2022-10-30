import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule, TasksModule],
})
export class AppModule {}
