export class CreateEventDto {
  id: string;
  Name: string;
  Date: string;
  Duration: number;
  Start: number;
  Type: string;
  Feedback: JSON;
  Location: string;
  Description: string;
  Category: string;
  Repetition: number; // 0 if none, 1 if dayly, 2 if weekly, 3 if monthly, 4 if yearly ?
  Color: string; // hexa
}
