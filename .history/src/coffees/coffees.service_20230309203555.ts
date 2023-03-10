import { Injectable } from '@nestjs/common';

//Services are Providors - main purpose is to inject dependencies. Responisble for data storage and retrieval.
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
        id: 1,
        name: 'Shipwreck Roast',
        brand: 'Buddy Brew',
        flavors: ['chocolate,' 'vanilla']
    }
  ];
}
