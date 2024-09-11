import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import pg from 'pg';
import { GrantsModule } from './grants/grants.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      driver: pg,
      username: 'postgres',
      password: 'jijikos',
      host: 'host.docker.internal',
      port: 5434,
    }),
    GrantsModule,
  ],
})
export class AppModule {}
