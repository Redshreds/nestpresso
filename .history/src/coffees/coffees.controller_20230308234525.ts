import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('coffees') //"nest g co" in terminal
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all the coffees';
  }

  @Get(':id') //":id" signifies a dynamic route parameter named id
  findOne(@Param('id') id: string) {
    //Param decorator allows us to grab all incoming request paramters and use them inside function body of our method
    return `This action returns #${id} coffee`;
  }

  // To get all or portions of a request body
  @Post()
  // Can run into validation issues when accessing only portions of Body. Cannot validate other properties when accessing a specific property
  create(@Body() body) {
    return body;
  }
}
