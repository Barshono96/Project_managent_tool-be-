import { Project } from "../../projects/entities/project.entity";
import { Task } from "../../tasks/entities/task.entity";
export declare class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
    ownedProjects: Project[];
    assignedTasks: Task[];
    createdAt: Date;
    updatedAt: Date;
}
