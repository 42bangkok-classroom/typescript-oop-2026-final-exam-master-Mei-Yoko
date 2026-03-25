import {Controller,Get} from '@nestjs/common'
import {ProductService} from './product.service'

@controller('product')
export class ProductController {
    constructor(private readonly productservice: ProductService ){}

    @Get('summary')
    getSummary(){
        return this.productservice.getSummary();
    }
    @Get()
    findAll(){
        return this.productservice.findAll();
    }
}