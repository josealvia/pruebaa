import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'vehiculos'})
@ObjectType()
export class Vehiculo {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    

    @Column()
    @Field(()=>String)
    descripcion:string;

    @Column()
    @Field(()=>String)
    placa:string;





}
