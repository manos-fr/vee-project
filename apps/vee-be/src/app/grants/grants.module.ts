import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
  ObjectType,
  Int,
  Float,
} from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Entity()
@ObjectType()
export class Somes {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  foundation: string;

  @Column()
  @Field()
  location: string;

  @Column('jsonb')
  @Field(()=> [String])
  areas: any;

  @Column()
  @Field()
  status: string;

  @Column('numeric')
  @Field(() => Float)
  amount: number;

  @Column({ type: 'timestamp with time zone', nullable: true })
  @Field(() => Date, { nullable: true })
  deadline: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  @Field(() => Date, { nullable: true })
  match_date: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field(() => Date)
  created_at: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field(() => Date)
  updated_at: Date;
}

@InputType()
class CreateSomeInput {
  @Field()
  name: string;

  @Field()
  foundation: string;

  @Field()
  location: string;

  @Field(() => [String])
  areas: any;

  @Field()
  status: string;

  @Field(() => Float)
  amount: number;

  @Field(() => Date, { nullable: true })
  deadline?: Date;

  @Field(() => Date, { nullable: true })
  match_date?: Date;
}

@Injectable()
export class SomesService {
  constructor(
    @InjectRepository(Somes)
    private somesRepository: Repository<Somes>
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

@Resolver(() => Somes)
export class SomesResolver {
  constructor(private readonly somesService: SomesService) {}

  @Query(() => [Somes])
  async somes() {
    console.log('somes');

    return this.somesService.findAll();
  }

  @Query(() => Somes)
  async some(@Args('id') id: number) {
    return this.somesService.findOne(id);
  }

  @Mutation(() => Somes)
  async createSome(@Args('input') input: CreateSomeInput) {
    return this.somesService.create(input);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Somes])],
  providers: [SomesService, SomesResolver],
})
export class SomesModule {}
