import { Type } from "class-transformer";
import { MaxLength, Min, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    name: string;
    
    @IsInt()
    @Min(1)
    @Type(() => Number)
    price: number;
    
    @IsString()
    @IsNotEmpty()
    description: string;
}