import { Controller, Body, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';
import { TaskStatusPipe } from './pipe/task-status.pipe';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks() {
        return "getTasks Success!"
    }

    @Get('/:id')
    getTaskById(
        @Param('id', ParseIntPipe) id: number
    ) {
        return `getTaskById Success! Parameter [id:${id}]`
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() TaskPropertyDto: TaskPropertyDto
    ) {
        const { title, description } = TaskPropertyDto
        return `createTask Success! Parameter [title: ${title}, description: ${description}]`
    }

    @Delete('/:id')
    deleteTask(
        @Param('id', ParseIntPipe) id: number
    ) {
        return `deleteTask Success! Parameter [id: ${id}]`
    }

    @Patch('/:id')
    updateTask(
        @Param('id', ParseIntPipe) id: number,
        @Body('status') status: string
    ) {
        return `updateTask Success! Parameter [id: ${id}, status: ${status}]`
    }
}
