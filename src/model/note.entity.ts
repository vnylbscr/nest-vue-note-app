import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'notes' })
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', default: null, nullable: true })
  content: string;

  @Column({ type: 'boolean', default: false, nullable: true })
  completed: boolean;

  @Column('uuid', { nullable: false })
  @OneToOne(() => User, (user) => user.id)
  user: User;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
