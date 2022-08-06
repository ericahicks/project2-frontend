import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResrvationInfoDto } from '../models/reservation-info-dto';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() reservation?: ResrvationInfoDto;

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private reservationService: ReservationService, 
    private location: Location) { }
  

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.reservationService.deleteReservation(id);

  }
    
  // @Input() theReservation?: ResrvationInfoDto;
  // @Input() selectedReservation?: ResrvationInfoDto;
  // @Output() changeSelectedReservation = new EventEmitter<ResrvationInfoDto>;

  
  // updatedReservation() {
  //     this.selectedReservation = this.theReservation;
  //     this.changeSelectedReservation.emit(this.theReservation);
  // }

  // deleteReservationById(id: number) {
  //   this.reservationService.deleteReservation(id);
  //   this.selectedReservation = undefined;
  // }


}
