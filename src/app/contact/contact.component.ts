import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formData: any = {};

  submitForm() {
    // Vous pouvez ajouter ici la logique pour envoyer le formulaire
    console.log(
      'Formulaire soumis avec les données suivantes :',
      this.formData
    );
  }
}
