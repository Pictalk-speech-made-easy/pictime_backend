import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
  
  @Entity()
  export class Event extends BaseEntity {
    @PrimaryGeneratedColumn() //event has an Id, logic
    id: number;
    
    // event has a name
    @Column()
    name: string;
    
    // ici il vaut mieux travailler avec le type Date de javascript
    // plutôt que avec des string. Car on pourra à la suite faire 
    // des opération genre Date1 - Date2 qui sera pratique
    // pour calculer la durée par example
    @Column()
    dateStart: Date;
  
    @Column()
    dateEnd: Date;
  
    // je me souviens plus de ce que c'est cette attr
    // @Column()
    // start: number;
  
    // voilà comment on va mettre le user
    // relation one to many. Un user, plusieurs events
    //
    /*
    @ManyToOne(
        type => User,
        user => user.events,
        { eager: false },
    )
    user: User;
    */

    // ici je me demande si c'est pas mieux de store les usernames
    // des participants plutôt qu'un array de User[].
    // à discuter, pour l'instant on laisse comme ça.
    // @Column()
    // participants: User[];
  
    @Column()
    type: string;
  
    // faut que tu regarde pour le type JSON, je sais que sur Pictalk on le stringify avant de le rentrer
    // dans la db. Mais je sais que tu peux aussi store un JSON mais c'est pas de type JSON
    // c'est un type spécial. bref je met string sinon ça crash
    // @Column()
    // feedback: string;
  
    @Column()
    location: string;
  
    @Column()
    description: string;
  
    // il faudra ajouter l'entité picto plus tard ...
    // on peut noter que la relation entre event et picto sera 
    // Many to Many (oui car un même picto peut apparaître dans
    // plusieurs events. et un event peut naturellement avoir
    // plusieurs picto) La syntaxe sera comme ça :
    /*
    @ManyToMany( () => Picto, picto => picto.events)
    @JoinTable()
    pictos : Picto[];
    */
    @Column()
    category: string;
  
    @Column()
    repetition: number; // 0 if none, 1 if dayly, 2 if weekly, 3 if monthly, 4 if yearly ? YES
  
    @Column()
    color: string; // hexa

    @CreateDateColumn()
    createdDate: Date;
    
    @UpdateDateColumn()
    updatedDate: Date;
  } 
  
  