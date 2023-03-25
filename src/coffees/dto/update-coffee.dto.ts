import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  // "?"" and PartialType makes properties optional. PartialType inherits all validation rules from decorators and adds the isOptional rule on the fly
  // readonly name?: string;
  // readonly brand?: string;
  // readonly flavors?: string[];
}
