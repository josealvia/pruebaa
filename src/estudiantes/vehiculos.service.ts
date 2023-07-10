import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculoInput, UpdateVehiculoInput } from './dto/inputs';
import { Vehiculo } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VehiculosService {

  constructor( 
    @InjectRepository(Vehiculo)
    private readonly vehiculosRepository:Repository<Vehiculo> ){}

  async create(createVehiculoInput: CreateVehiculoInput): Promise<Vehiculo>  {
    const newVehiculo= this.vehiculosRepository.create(createVehiculoInput);
    return await this.vehiculosRepository.save(newVehiculo); 
  }

  async findAll(): Promise<Vehiculo[]> {
    return this.vehiculosRepository.find();
  }

  async findOne(id: string): Promise<Vehiculo> {
     const vehiculo= await  this.vehiculosRepository.findOneBy({id});
     if (!vehiculo) throw new NotFoundException(`Not found`)
     return vehiculo;
  }

  async update(id: string, updateVehiculoInput: UpdateVehiculoInput): Promise<Vehiculo> {
    
    const vehiculo = await this.vehiculosRepository.preload(updateVehiculoInput);
    if (!vehiculo) throw new NotFoundException(`Not found`)
    return this.vehiculosRepository.save(vehiculo);

  }

  async remove(id: string): Promise<Vehiculo> {

    const vehiculo= await  this.findOne(id);

    await this.vehiculosRepository.remove(vehiculo);

    return {...vehiculo, id};

  }
}
