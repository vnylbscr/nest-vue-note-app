import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './note/note.controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import configService from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    NoteModule,
  ],
  controllers: [AppController, NoteController, UserController],
  providers: [AppService],
})
export class AppModule {}
