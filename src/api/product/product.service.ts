import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}


  create(createProductDto: CreateProductDto) {
    const { productName, price, cost, quantity } = createProductDto
    const product = new Product()
    product.productName = productName
    product.price = price
    product.cost = cost
    product.quantity = quantity
    product.save()
    return product;
  }

  findAll() {
    return this.productsRepository.find()
  }

  findOne(id: number) {
    return this.productsRepository.findOne({where: {
      id: id
    }})
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { productName, price, cost, quantity } = updateProductDto

    const product = await this.productsRepository.findOne({where:{
      id: id
    }})
    product.productName = productName
    product.price = price
    product.cost = cost
    product.quantity = quantity
    product.save()
    return product;
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOne({where:{
      id: id
    }})
    return product.remove()
  }
}
