import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  reservations?: ResrvationInfoDto[];

  constructor(private route: ActivatedRoute, private reservationService: ReservationService) { }

  ngOnInit(): void {
    const resid = Number(this.route.snapshot.paramMap.get('id'));
    const userid = this.route.snapshot.paramMap.get('userid');

    if (resid) {
      this.reservationService.getReservationById(resid).subscribe(data => this.reservations = [data])
      //this.reservationService.getReservationById<ResrvationInfoDto>(resid).subscribe(data => this.reservations = [ data ])
    } 
    if (userid) {
      this.reservationService.getReservationsByUserId(Number(userid)).subscribe(data => this.reservations = data);
    }
  }


    // @Input() theReservation?: ResrvationInfoDto;
  // @Input() reservations?: ResrvationInfoDto[];
  // @Input() selectedReservation?: ResrvationInfoDto; // holds reservation selected to edit or delete
  // @Output() selectedReservationChange = new EventEmitter<ResrvationInfoDto>();
  // resid?: string;

  // updatedReservation(reservation: ResrvationInfoDto | undefined) {
  //   if (reservation) {
  //     console.log('click');
  //     this.selectedReservation = reservation;
  //     this.selectedReservationChange.emit(this.selectedReservation);
  //   }
  // }

}
