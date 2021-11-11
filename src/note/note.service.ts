import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/model/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private readonly repository: Repository<Note>,
  ) {}

  public async getNote(id: number) {
    return await this.repository.findOne({
      id,
    });
  }

  public async createNote(content: string) {
    const note = new Note();
    note.content = content;
    return await this.repository.save(note);
  }

  public async getAll() {
    return await this.repository.find();
  }
}
