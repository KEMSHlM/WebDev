import { Body, Param, ParseUUIDPipe, Patch, Controller, Get, Post, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'
import { Item } from './item.model';
import { ItemsService } from './items.service';

// デコレータにより，DIがすでにできていることになる．
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }
    
    @Get(':id') // /items/238900 みたいな感じ ':'をつけないとidは可変にならない．
    findById(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.findById(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Item {
        return this.itemsService.create(createItemDto);
    }
    
    @Patch(':id')
    updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.updateStatus(id);
    }
    
    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string): void {
        this.itemsService.delete(id);
    }
}
