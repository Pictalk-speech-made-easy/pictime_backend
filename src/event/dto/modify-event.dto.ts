import { IsDate, IsDateString, IsISO8601, IsJSON, IsNotEmpty, IsInt, Min, Max, IsOptional, IsString, IS_JSON, IsHexColor, IsNumber, IsNumberString } from "class-validator";
import { Type } from 'class-transformer';

// clem en a deja fait, si jamais tu galère
export class ModifyEventDto {
    @IsOptional()
    @IsString()
    name: string;

    // ici il va faut que tu regarde sur internet
    // si on peut parse l'attribut en date ici dirrectement
    // ou si on va devoir le recevoir en string
    // et vérifier à l'arriver si c'est bien une Date
    // l'option 1 c'est mieux

    @IsOptional()
    @IsDateString()
    // @Type(() => Date)
    // @IsString()
    dateStart: Date;

    @IsOptional()
    @IsDateString()
    dateEnd: Date;

    // // j'ai un petit doute sur si ça va te cast en number ou pas
    // // vérifie que si tu reçois number, il soit bien de type 
    // // <number> et pas <string> j'ai déjà eu des mauvaise
    // // surprise avec ça
    // @IsNotEmpty()
    // @IsNumber()
    // start: number;

    // // bref, je crois que tu as compris comment marche les validators
    // // ça te sert à vérifier le type, dire si c'est optionel
    // // (par exemple coleur ça pourrait l'être et tu met une couleur par default si aucune dans la rerquete)
    // // LA DOC, REGARDE LA DOC QUAND TU SAIS PAS https://www.npmjs.com/package/@nestjs/class-validator/v/0.13.1
    // // bonne chance :)

    @IsOptional()
    type: string;

    
    // @IsJSON() // j'ai rage quit mais je m'en occupe la semaine pro 
    @IsOptional()
    @IsString()
    feedback: string;

    @IsOptional()
    @IsString()
    location: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    category: string;

    @IsOptional()
    @IsNumber()
    @Type(()=> Number)
    @IsInt()
    @Min(0)
    @Max(4)
    repetition: number; // 0 if none, 1 if dayly, 2 if weekly, 3 if monthly, 4 if yearly ?
    
    @IsOptional()
    @IsHexColor()
    color: string; // hexa
  }