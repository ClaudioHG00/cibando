import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  percorso = '../../../assets/images/imageBg-';
  images = [
    {id: 1, label: 'Spaghetti al pomodoro'},
    {id: 2, label: 'Tagliato al manzo'},
    {id: 3, label: 'Tiramisù classico'},
  ];

  @Input() recipes: Recipe[];

  constructor() {
    console.log('avvio del costruttore')
  }

  ngOnInit(): void {
    console.log('componente avviato')
  }

}
