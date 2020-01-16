module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/serviceWorker.ts'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/serviceWorker.ts'
  ]
}
