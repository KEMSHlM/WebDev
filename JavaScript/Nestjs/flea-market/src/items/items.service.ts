import { Injectable } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
    private items: Item[] = [];
    
    findAll(): Item[] {
        return this.items;
    }
    
    findById(id: string): Item {
        return this.items.find((item) => item.id === id);
    }
    
    create(createItemDto: CreateItemDto): Item {
        const item: Item = {
            id: uuid(),
            ...createItemDto,
            status: ItemStatus.ON_SALE,
        }
        this.items.push(item);
        return item;
    }
    
    updateStatus(id: string): Item {
        const item = this.findById(id);
        item.status = ItemStatus.SOLD_OUT;
        return item;
    }
    
    delete(id: string): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
