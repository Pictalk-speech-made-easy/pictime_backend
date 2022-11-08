import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Date: string;

  @Column()
  Duration: number;

  @Column()
  Start: number;

  // @Column()
  // creator: User;

  // @Column()
  // participants: User[];

  @Column()
  Type: string;

  @Column()
  Feedback: JSON;

  @Column()
  Location: string;

  @Column()
  Description: string;

  // @Column()
  // Pictograms: picto

  @Column()
  Category: string;

  @Column()
  Repetition: number; // 0 if none, 1 if dayly, 2 if weekly, 3 if monthly, 4 if yearly ?

  @Column()
  Color: string; // hexa
}

// export interface Events {
//   description: string;
//   creator: string;
//   duration: number;
//   datestart: Date;
//   dateend: Date;
// }
