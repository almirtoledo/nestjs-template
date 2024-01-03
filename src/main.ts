import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('Exemple API documentation')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3019);
}
bootstrap();

type UserDto = {
  id: string;
  role: string;
  name?: string;
  password?: string;
  age?: string;
};

type CreateUserDto = Omit<UserDto, 'id'>;
type UserReply = Pick<UserDto, 'id' | 'role' | 'password'>;
type UpdateUserDto = Partial<Omit<UserReply, 'role'>>;
