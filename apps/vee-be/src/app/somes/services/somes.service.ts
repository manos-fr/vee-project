import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Somes } from '../entities/somes.entity';
import { CreateSomeInput } from '../dto/create-some.input';

@Injectable()
export class SomesService {
  constructor(
    @InjectRepository(Somes)
    private somesRepository: Repository<Somes>,
  ) {}

  async findAll(): Promise<Somes[]> {
    return this.somesRepository.find();
  }

  async findOne(id: number): Promise<Somes> {
    return this.somesRepository.findOne({ where: { id } });
  }

  async create(createSomeInput: CreateSomeInput): Promise<Somes> {
    const some = this.somesRepository.create(createSomeInput);
    return this.somesRepository.save(some);
  }
}
