import { Inject, Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import { PrismaService } from 'modules/prisma/prisma.service';
import { FindParkInput } from './dto/find-park.input';
import { ParkResponse } from './responses/park.response';

@Injectable()
export class ParkResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => ParkResponse)
  async findPark(@Args('input') input: FindParkInput): Promise<ParkResponse> {
    const park = await this.prisma.park.findUnique({
      where: {
        ...input,
      },
    });

    if (!park) {
      return {
        errors: [
          {
            field: 'input',
            message: 'Could not find park with given input.',
          },
        ],
      };
    }
    return {
      park,
    };
  }
}
