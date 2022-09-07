import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  @Post('/create')
  createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    return res
      .status(HttpStatus.OK)
      .json({ message: 'received', body: createProductDto });
  }
}
