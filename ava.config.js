export default () => {
  return {
    files: ['**/*.test.ts', '**/*.test.tsx', '!package/**/*'],
    ignoreChanges: {
      watchMode: ['tmp/**/*'],
    },
    extensions: {
      ts: 'commonjs',
      tsx: 'commonjs',
    },
    nodeArguments: ['--import=tsx'],
  }
}
