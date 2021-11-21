import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('/:userId')
  async getUserNotes(@Param('userId') userId: string) {
    return await this.noteService.getUserNotes(userId);
  }

  @Get('/:id')
  async getNote(@Param('id') id: string) {
    return await this.noteService.getNote(id);
  }

  @Post('/')
  async saveNote(
    @Body('content') content: string,
    @Body('userId') userId: any,
    @Body('completed') completed: boolean,
  ) {
    return await this.noteService.createNote({
      content,
      user: userId,
      completed,
    });
  }
}
