import {
  Controller,
  Get,
  Post,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';

import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product successfully created', product });
  }

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();

    return res.status(HttpStatus.OK).json({ message: 'Products', products });
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'id is not a ObjectId', product: [] });
    }

    const product = await this.productService.getProduct(id);

    if (!product)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "Product doesn't exists", product: [] });

    return res.status(HttpStatus.OK).json({ message: 'Product', product });
  }

  @Delete('/')
  async deleteProduct(@Res() res, @Query('id') id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'id is not a ObjectId', product: [] });
    }

    const product = await this.productService.deleteProduct(id);

    if (!product)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "Product doesn't exists", product: [] });

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product deleted', productDeleted: product });
  }
}
