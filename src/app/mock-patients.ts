import {Patient} from './patient';
import { Gender } from './gender.enum';

export const MOCK_PATIENTS: Patient[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        dob: new Date("10/21/1998"),
        gender: Gender.Male
    },
    {
        id: 2,
        firstName: "Nancy",
        lastName: "Reynolds",
        dob: new Date("03/12/1974"),
        gender: Gender.Female
    },
    {
        id: 3,
        firstName: "Anita",
        lastName: "Noel",
        dob: new Date("08/21/1984"),
        gender: Gender.Female
    }
]
export default MOCK_PATIENTS;
