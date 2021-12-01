import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/model/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private readonly repository: Repository<Note>,
  ) {
    console.log('merto lala');
  }

  public async getNote(id: string) {
    return await this.repository.findOne({
      id,
    });
  }

  public async getUserNotes(userId: string) {
    return await this.repository.find({
      user: {
        id: userId,
      },
    });
  }

  public async createNote(params: Omit<Note, 'id' | 'createdAt'>) {
    const note = { ...params };
    return await this.repository.save(note);
  }

  public async getAll() {
    return await this.repository.find();
  }
}
