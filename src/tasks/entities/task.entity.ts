import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Project } from "../../projects/entities/project.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ default: "todo" })
  status: string;

  @Column({ default: "medium" })
  priority: string;

  @ManyToOne(() => User, (user) => user.assignedTasks)
  assignee: User;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;

  @Column({ type: "timestamp", nullable: true })
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
