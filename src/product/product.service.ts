import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  @Inject(ConfigService)
  public config: ConfigService;
}
