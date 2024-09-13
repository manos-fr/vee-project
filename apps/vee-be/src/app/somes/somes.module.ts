import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Somes } from '../somes/entities/somes.entity';
import { SomesService } from '../somes/services/somes.service';
import { SomesResolver } from '../somes/resolvers/somes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Somes])],
  providers: [SomesService, SomesResolver],
})
export class SomesModule {}
