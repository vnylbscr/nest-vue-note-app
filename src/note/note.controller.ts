import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('/:userId')
  async getUserNotes(@Req() req: Request) {
    const { userId } = req.params;
    return await this.noteService.getUserNotes(userId);
  }

  @Get('/:id')
  async getNote(@Req() req: Request) {
    const { id } = req.params;
    return await this.noteService.getNote(id);
  }

  @Post('/')
  async saveNote(@Req() req: Request) {
    const { content, userId, completed } = req.body;
    return await this.noteService.createNote({
      content,
      user: userId,
      completed,
    });
  }
}
