import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';

@Component({
  selector: 'app-get-specialization',
  templateUrl: './get-specialization.component.html',
  styleUrls: ['./get-specialization.component.css']
})
export class GetSpecializationComponent implements OnInit {
doctors$: any;
specialization: any;
  constructor(private bookappointmentservice: BookAppointmentService,private activatedRoute:ActivatedRoute )
   {this.activatedRoute.params.subscribe(m=>{
    this.specialization=m?.['specialization'];
  }); }

  ngOnInit(): void {
    this.bookappointmentservice.getDoctorBySpecialization(this.specialization).subscribe({
      next :(data)=>{
        this.doctors$=data;
      },
      complete:()=>{
        console.log("Success");
      },
      error:(err)=>{
        console.log(err);
      }
    }
    )
  }

}
