import { Component, OnInit } from '@angular/core';
import { FirestoreService, Computadora } from '../services/firestore.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.page.html',
  styleUrls: ['./computer-list.page.scss'],
})
export class ComputerListPage implements OnInit {
  computadoras: Computadora[];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getComputadoras().subscribe(computadoras => {
      this.computadoras = computadoras;
    });
  }

  deleteComputadora(id: string) {
    this.firestoreService.deleteComputadora(id);
  }
}

