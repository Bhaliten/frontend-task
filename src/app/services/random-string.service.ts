import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomStringService {

  isValidString(input: string): boolean {
    const regex = /^[0-9]{2}[a-zA-Z]{2}$/;
    return regex.test(input);
  }

  generateRandomString(): string {
    const randomNumbers: string = this.generateRandomNumber().toString() + this.generateRandomNumber().toString();
    const randomChars: string = this.generateRandomCharacter() + this.generateRandomCharacter();

    return randomNumbers + randomChars;
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  generateRandomCharacter(): string {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
}
