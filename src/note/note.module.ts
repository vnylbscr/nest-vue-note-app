import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/model/note.entity';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  providers: [NoteService],
  controllers: [NoteController],
  exports: [],
})
export class NoteModule {}
