import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomStringService {

  constructor() {
  }

  isValidString(input: string): boolean {
    // Regular expression to match string starting with 2 numbers, followed by exactly 2 characters, and has a total length of 4
    const regex = /^\d{2}\w{2}$/;
    return regex.test(input);
  }

  generateRandomString(): string {
    const getRandomNumber = (): number => Math.floor(Math.random() * 10); // Random number between 0 and 9
    const getRandomChar = (): string => String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase character (ASCII)

    const randomNumbers: string = getRandomNumber().toString() + getRandomNumber().toString();
    const randomChars: string = getRandomChar() + getRandomChar();

    return randomNumbers + randomChars;
  }
}
