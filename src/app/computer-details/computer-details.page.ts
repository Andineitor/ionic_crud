import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService, Computadora } from '../services/firestore.service';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.page.html',
  styleUrls: ['./computer-details.page.scss'],
})
export class ComputerDetailsPage implements OnInit {
  computadora: Computadora;
  route: any;

  constructor(@Inject(FirestoreService) private firestoreService: FirestoreService) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getComputadoras().subscribe((computadoras: Computadora[]) => {
      this.computadora = computadoras.find(comp => comp.id === id);
    });
  }
}
