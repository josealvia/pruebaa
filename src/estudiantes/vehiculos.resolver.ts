import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { VehiculosService } from './vehiculos.service';
import { Vehiculo } from './entities/vehiculo.entity';
import { UpdateVehiculoInput, CreateVehiculoInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Vehiculo)
export class VehiculosResolver {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Mutation(() => Vehiculo)
  async createVehiculo(@Args('createVehiculoInput') createVehiculoInput: CreateVehiculoInput)
  :Promise<Vehiculo> {
    return this.vehiculosService.create(createVehiculoInput);
  }

  @Query(() => [Vehiculo], { name: 'vehiculos' })
  async findAll():Promise<Vehiculo[]> {
    return this.vehiculosService.findAll();
  }

  @Query(() => Vehiculo, { name: 'vehiculos' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Vehiculo> {
    return this.vehiculosService.findOne(id);
  }

  @Mutation(() => Vehiculo)
  updateVehiculo(@Args('updateVehiculoInput') updateVehiculoInput: UpdateVehiculoInput): Promise<Vehiculo> {
    return this.vehiculosService.update(updateVehiculoInput.id, updateVehiculoInput);
  }

  @Mutation(() => Vehiculo)
  removeVehiculo(@Args('id', { type: () => ID }) id: string): Promise<Vehiculo> {
    return this.vehiculosService.remove(id);
  }
}
