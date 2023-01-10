import { ModuleTokenFactory } from '@nestjs/core/injector/module-token-factory';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // voilà comment on va mettre les events
  // relation one to many. Un user, plusieurs events
  /*
  @OneToMany(() => Event, (event) => event.user, { eager: false })
  events: Event[];
  */
  @CreateDateColumn()
  createdDate: Date;
    
  @UpdateDateColumn()
  updatedDate: Date;
}
