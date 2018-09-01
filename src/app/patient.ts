import { Gender } from "./gender.enum";

export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    dob: Date;
    gender: Gender;
}
