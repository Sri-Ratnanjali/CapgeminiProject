import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  constructor(private http: HttpClient) { }

  getDoctorDetails(){
    const headers=new HttpHeaders()
    .set('control-type','application/json')
    .set('access-control-allow-origin','*');

    const param=new HttpParams()
    .set('name','pen')
    .set('pageNo',5);
    return this.http.get("https://localhost:44333/api/DoctorDetails/GetAll",{headers:headers});
  }
  getDoctorBySpecialization(specialization:string){


      const headers=new HttpHeaders()
      .set('control-type','application/json')
      .set('access-control-allow-origin','*');

      return this.http.get(`https://localhost:44333/api/DoctorDetails/GetBySpecialization/${specialization}`,{headers:headers});

     }
  }


