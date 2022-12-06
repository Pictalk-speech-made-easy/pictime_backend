import { Type } from "class-transformer";
import { IsDate, IsDateString } from "class-validator";

export class dateDto{
    @IsDateString()
    date: string;

}