export class UpdateCoffeeDto {
  // ? makes properties optional
  readonly name?: string;
  readonly brand?: string;
  readonly flavors?: string[];
}
