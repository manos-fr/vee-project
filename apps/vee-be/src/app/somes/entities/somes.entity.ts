import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

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
  @Field(() => [String])
  areas: string[];

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
