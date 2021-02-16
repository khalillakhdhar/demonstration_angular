import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  prix: number;
  quantite: number;
  titre: string;
  taxes=0;
  constructor() { }

  ngOnInit(): void {
  }
taxe()
{
  this.taxes=(this.prix*this.quantite)*0.19;


}
}
