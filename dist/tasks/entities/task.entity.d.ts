import { User } from "../../users/entities/user.entity";
import { Project } from "../../projects/entities/project.entity";
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    assignee: User;
    project: Project;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
