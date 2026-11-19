const values = new Map<string, string>()
const storage = {
  clear: () => values.clear(),
  getItem: (key: string) => values.get(key) ?? null,
  key: (index: number) => [...values.keys()][index] ?? null,
  removeItem: (key: string) => values.delete(key),
  setItem: (key: string, value: string) => values.set(key, String(value)),
  get length() {
    return values.size
  }
} as Storage

Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: storage
})

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: storage
  })
}
