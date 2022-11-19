import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import defaultConfig from 'common/config/defaultConfig';
import { DomainResolver } from 'modules/domain/domain.resolver';
import { GqlConfigService } from 'modules/graphql/graphql.config.service';
import { ParkResolver } from 'modules/park/park.resolver';
import { PrismaService } from 'modules/prisma/prisma.service';
import { UserResolver } from 'modules/user/user.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [defaultConfig] }),
    // Graphql module setup.
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
  ],
  providers: [PrismaService, UserResolver, DomainResolver, ParkResolver],
})
export class AppModule {}
