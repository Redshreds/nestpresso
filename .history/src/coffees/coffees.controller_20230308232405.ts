import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') params) {
    return `This action returns #${id} coffee`;
  }
}
