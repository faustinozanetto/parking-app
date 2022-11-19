import { Injectable } from '@nestjs/common';
import { PrismaService } from 'modules/prisma/prisma.service';
import { FindUserInput } from './dto/find-user.input';
import { UserResponse } from './responses/user.response';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(input: FindUserInput): Promise<UserResponse> {
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
