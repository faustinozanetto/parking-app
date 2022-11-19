import { Module } from '@nestjs/common';
import { PrismaService } from 'modules/prisma/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService],
})
export class AppModule {}
