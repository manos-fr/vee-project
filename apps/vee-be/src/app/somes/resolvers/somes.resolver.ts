import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SomesService } from '../services/somes.service';
import { Somes } from '../entities/somes.entity';
import { CreateSomeInput } from '../dto/create-some.input';

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
