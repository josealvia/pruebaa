import { Module } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { VehiculosResolver } from './vehiculos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  providers: [VehiculosResolver, VehiculosService],
  imports:[
    TypeOrmModule.forFeature([Vehiculo])
  ]
})
export class VehiculosModule {}
