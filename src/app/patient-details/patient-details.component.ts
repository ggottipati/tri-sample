import { Component, OnInit } from '@angular/core';
import { Patient } from "../patient-list/model/patients";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  public patientLst: Patient[] = [
    new Patient(1, "Patients 001"),
    new Patient(2, "Patients 002"),
    new Patient(3, "Patients 003"),
    new Patient(4, "Patients 004"),
    new Patient(5, "Patients 005"),
    new Patient(6, "Patients 006"),
    new Patient(7, "Patients 007"),
    new Patient(8, "Patients 008")
  ];
  patients: Patient = this.patients[0];// this will store the current product to display

  constructor() { }

  ngOnInit() {
  }

}
