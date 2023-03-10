import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

//Module decorator takes object whose properties describe the module in all of its context
//4 Main Concepts:
//Controllers (api routes)
//Exports - providors within module that should be available wherever this m,odule is imported
//Imports - other modules that this maodule requires
//Providers - Services that need to be instantiated by the Nest Injector

@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
