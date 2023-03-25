// g class coffees/dto/create-coffee.dto --no-spec

import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  // each:true validator indicates that expected value is an array of strings
  @IsString({ each: true })
  readonly flavors: string[];
}

//Object used to encapsulate data, and transfer it between apps
//Help us define interface for I/O within our system
//Provide format for what to expect from Body of requests
