import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("./entities/task.entity").Task>;
    findAll(projectId?: string): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("./entities/task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("./entities/task.entity").Task>;
    remove(id: string): Promise<void>;
    updateStatus(id: string, status: string): Promise<import("./entities/task.entity").Task>;
}
