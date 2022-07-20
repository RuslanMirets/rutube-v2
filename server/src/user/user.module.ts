import { SubscriptionEntity } from './subscription.entity';
import { UserEntity } from 'src/user/user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [TypeOrmModule.forFeature([UserEntity, SubscriptionEntity])],
})
export class UserModule {}
