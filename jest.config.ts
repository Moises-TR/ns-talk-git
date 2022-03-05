import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^src(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '<rootDir>/src/**/?(*.)+(test).ts',
      '<rootDir>/src/**/?(*.)+(spec).ts'
    ]
  }
}
