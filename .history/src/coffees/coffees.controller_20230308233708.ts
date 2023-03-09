import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  // Can run into validation issues when accessing only portions of Body. Can only validate one property at a time?
  create(@Body() body) {
    return body;
  }
}
