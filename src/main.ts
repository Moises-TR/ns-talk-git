import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.enableShutdownHooks()
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )


  const configService = app.get(ConfigService)
  const port = configService.get('PORT')
  await app.listen(port)
}

bootstrap().catch((e) => console.error(e))
