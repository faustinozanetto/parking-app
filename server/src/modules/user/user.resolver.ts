import { Inject, Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import { PrismaService } from 'modules/prisma/prisma.service';
import { FindUserInput } from './dto/find-user.input';
import { UserResponse } from './responses/user.response';

@Injectable()
export class UserResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => UserResponse)
  async findUser(@Args('input') input: FindUserInput): Promise<UserResponse> {
    const user = await this.prisma.user.findUnique({
      where: {
        ...input,
      },
    });

    if (!user) {
      return {
        errors: [
          {
            field: 'input',
            message: 'Could not find user with given input.',
          },
        ],
      };
    }
    return {
      user,
    };
  }
}
