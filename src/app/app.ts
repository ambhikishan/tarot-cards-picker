import { Component, signal } from '@angular/core';
import {tarotCards,cardNames} from '../tarot-cards'
import { CommonModule } from '@angular/common';

interface Card {
  name: string;
  revealed: boolean;
}

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('tarot-cards-picker');

cards:any = cardNames;
drawnCards :any[] = [];
shuffledCards: Card[] = [];

constructor()
{
  for(let c of tarotCards)
  {
    this.shuffledCards.push({name:c,revealed:false})
  }
  this.shuffledCards = this.shuffleArray(this.shuffledCards);
}

shuffleArray<T>(array: T[]): T[] {
  // Create a shallow copy to prevent mutating the original array
  const shuffled = [...array]; 
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements using array destructuring
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}


clearNShuffle()
{ 
  for(let c of this.shuffledCards)
  {c.revealed = false;}
  this.shuffledCards = this.shuffleArray(this.shuffledCards);
  this.drawnCards = [];
}

revealCard(card:Card) {
card.revealed = true;

this.drawnCards.push(this.cards[card.name]);
}
  
  

  drawCards(count: number): void {
    // this.drawnCards = this.tarotService.draw(count);
  }
}
