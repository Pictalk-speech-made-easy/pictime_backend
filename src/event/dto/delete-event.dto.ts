import { IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class DeleteEventDto{
    @IsNotEmpty()
    @IsNumberString()
    id: number;
}