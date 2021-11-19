import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'notes' })
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', default: null })
  content: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @Column({ type: 'json' })
  @OneToOne(() => User, (user) => user.id)
  person: any;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
