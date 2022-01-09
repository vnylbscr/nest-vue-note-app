import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/model/note.entity';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

describe('NoteService', () => {
  let service: NoteService;

  const noteService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteService],
      controllers: [NoteController],
    })
      .overrideProvider(NoteService)
      .useValue(noteService)
      .compile();

    service = module.get<NoteService>(NoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
