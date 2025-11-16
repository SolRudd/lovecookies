export class EventHub<TEvents extends Record<string, (...args: never[]) => void>> {
  private listeners = new Map<keyof TEvents, Set<TEvents[keyof TEvents]>>();

  on<K extends keyof TEvents>(event: K, callback: TEvents[K]): () => void {
    const existing = this.listeners.get(event) ?? new Set();
    existing.add(callback);
    this.listeners.set(event, existing);
    return () => {
      existing.delete(callback);
    };
  }

  emit<K extends keyof TEvents>(
    event: K,
    ...args: Parameters<TEvents[K]>
  ): void {
    const callbacks = this.listeners.get(event);
    callbacks?.forEach((cb) => {
      cb(...args);
    });
  }
}
