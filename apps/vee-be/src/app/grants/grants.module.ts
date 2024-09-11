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
export class Grant {
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
class CreateGrantInput {
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
export class GrantsService {
  constructor(
    @InjectRepository(Grant)
    private grantsRepository: Repository<Grant>
  ) {}

  async findAll(): Promise<Grant[]> {
    return this.grantsRepository.find();
  }

  async findOne(id: number): Promise<Grant> {
    return this.grantsRepository.findOne({ where: { id } });
  }

  async create(createGrantInput: CreateGrantInput): Promise<Grant> {
    const grant = this.grantsRepository.create(createGrantInput);
    return this.grantsRepository.save(grant);
  }
}

@Resolver(() => Grant)
export class GrantsResolver {
  constructor(private readonly grantsService: GrantsService) {}

  @Query(() => [Grant])
  async somes() {
    return this.grantsService.findAll();
  }

  @Query(() => Grant)
  async some(@Args('id') id: number) {
    return this.grantsService.findOne(id);
  }

  @Mutation(() => Grant)
  async createSome(@Args('input') input: CreateGrantInput) {
    return this.grantsService.create(input);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Grant])],
  providers: [GrantsService, GrantsResolver],
})
export class GrantsModule {}
