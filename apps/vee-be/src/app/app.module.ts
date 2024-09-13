import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SomesModule } from './somes/somes.module';
import pg from 'pg';
import { Somes } from './somes/entities/somes.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'postgres',
      driver: pg,
      username: 'postgres',
      password: 'jijikos',
      host: 'host.docker.internal', //for docker
      // host: "localhost",
      port: 5434,
      schema: 'business',
      entities: [Somes],
    }),
    SomesModule,
  ],
})
export class AppModule {}
