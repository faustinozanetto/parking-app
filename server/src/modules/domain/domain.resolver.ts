import { Inject, Injectable } from '@nestjs/common';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { DeleteObjectResponse } from 'modules/common/responses/delete-object.response';
import { PrismaService } from 'modules/prisma/prisma.service';
import { AddDomainToUserInput } from './dto/add-domain-to-user.input';
import { FindDomainInput } from './dto/find-domain.input';
import { FindUserDomainsInput } from './dto/find-user-domains.input';
import { RemoveDomainFromUserInput } from './dto/remove-domain-to-user.input';
import { DomainResponse } from './responses/domain.response';
import { DomainsResponse } from './responses/domains.response';

@Injectable()
export class DomainResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => DomainResponse)
  async findDomain(@Args('input') input: FindDomainInput): Promise<DomainResponse> {
    const domain = await this.prisma.domain.findUnique({
      where: {
        ...input,
      },
    });

    if (!domain) {
      return {
        errors: [
          {
            field: 'input',
            message: 'Could not find domain with given input.',
          },
        ],
      };
    }
    return {
      domain,
    };
  }

  @Query(() => DomainsResponse)
  async findUserDomains(@Args('input') input: FindUserDomainsInput): Promise<DomainsResponse> {
    const domains = await this.prisma.domain.findMany({
      where: {
        user: {
          ...input.user,
        },
      },
    });

    if (!domains) {
      return {
        errors: [
          {
            field: 'input',
            message: 'Could not find domain with given input.',
          },
        ],
      };
    }
    return {
      domains,
    };
  }

  @Mutation(() => DomainResponse)
  async addDomainToUer(@Args('input') input: AddDomainToUserInput): Promise<DomainResponse> {
    const user = await this.prisma.user.findUnique({
      where: {
        ...input.user,
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

    const domain = await this.prisma.domain.create({
      data: {
        user: {
          connect: {
            ...input.user,
          },
        },
        domain: input.domain,
      },
    });
    if (!domain) {
      return {
        errors: [
          {
            field: 'input',
            message: 'Could not create domain.',
          },
        ],
      };
    }
    return { domain };
  }

  @Mutation(() => DeleteObjectResponse)
  async removeDomainFromuser(
    @Args('input') input: RemoveDomainFromUserInput,
  ): Promise<DeleteObjectResponse> {
    const user = await this.prisma.user.update({
      where: {
        ...input.user,
      },
      data: {
        domains: {
          delete: {
            ...input.domain,
          },
        },
      },
    });

    if (!user) {
      return {
        success: false,
        errors: [
          {
            field: 'input',
            message: 'Could not find user with given input.',
          },
        ],
      };
    }

    return {
      success: true,
    };
  }
}
