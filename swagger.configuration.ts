import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as yaml from 'yaml'
import { promises as fs } from 'fs'

export async function initializeSwagger (app: INestApplication): Promise<void> {
  const config = new DocumentBuilder()
    .setTitle('NS-TALK')
    .setVersion('1.0')
    .addTag('NS-TALK')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  const yamlString: string = yaml.stringify(document, {})
  await fs.writeFile('swagger.yaml', yamlString)
}
