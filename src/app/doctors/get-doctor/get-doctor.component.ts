import { Component, OnInit } from '@angular/core';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';

@Component({
  selector: 'app-get-doctor',
  templateUrl: './get-doctor.component.html',
  styleUrls: ['./get-doctor.component.css']
})
export class GetDoctorComponent implements OnInit {
doctors$:any;
searchText: string='';

  constructor(private bookappointmentservice: BookAppointmentService) { }

  ngOnInit(): void {
    this.bookappointmentservice.getDoctorDetails().subscribe({
      next :(data)=>{
        this.doctors$=data;
      },
      complete:() =>{
        console.log("completed");
      },
      error:(err)=>{
        console.log("Unable to fetch movies"+err);
      }

    });

  }
  }


