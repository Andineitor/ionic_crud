import { Component } from '@angular/core';
import { FirestoreService, Computadora } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string;
  descripcion: string;

  constructor(private firestoreService: FirestoreService) {}

  agregarComputadora() {
    const computadora: Computadora = {
      nombre: this.nombre,
      descripcion: this.descripcion
    };

    this.firestoreService.addComputadora(computadora)
      .then(() => {
        console.log('Computadora agregada con éxito');
        // Aquí puedes realizar cualquier otra acción después de agregar la computadora, como limpiar los campos del formulario
        this.nombre = '';
        this.descripcion = '';
      })
      .catch(error => {
        console.error('Error al agregar la computadora:', error);
      });
  }
}
