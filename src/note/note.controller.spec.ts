import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/model/note.entity';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

// ubuntu
describe('NoteController', () => {
  let controller: NoteController;

  const noteController = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteService],
      controllers: [NoteController],
    })
      .overrideProvider(NoteService)
      .useValue(noteController)
      .compile();

    controller = module.get<NoteController>(NoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
