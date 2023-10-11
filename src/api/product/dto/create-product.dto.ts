import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: "book"})
    productName: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 12 })
    price: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    cost: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 20 })
    quantity: number
}
