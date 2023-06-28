import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Computadora {
  id?: string;
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private computadorasCollection: AngularFirestoreCollection<Computadora>;
  private computadoras: Observable<Computadora[]>;

  constructor(private firestore: AngularFirestore) {
    this.computadorasCollection = this.firestore.collection<Computadora>('computadoras');
    this.computadoras = this.computadorasCollection.valueChanges({ idField: 'id' });
  }

  getComputadoras(): Observable<Computadora[]> {
    return this.computadoras;
  }

  addComputadora(computadora: Computadora): Promise<any> {
    return this.computadorasCollection.add(computadora);
  }

  updateComputadora(computadora: Computadora): Promise<any> {
    const id = computadora.id;
    delete computadora.id;
    return this.computadorasCollection.doc(id).update(computadora);
  }

  deleteComputadora(id: string): Promise<any> {
    return this.computadorasCollection.doc(id).delete();
  }
}
