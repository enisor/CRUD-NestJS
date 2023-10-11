import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './api/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './database/entities/product.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8111,
      username: 'root',
      password: '',
      database: 'demo',
      entities: [join(__dirname, 'database', 'entity', '*.entity{.ts,.js}')],
      synchronize: true,
      autoLoadEntities: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
