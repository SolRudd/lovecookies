import config from "../config/services.json";

export interface ServiceDescriptor {
  id: string;
  category: string;
  hosts: string[];
  cookies: string[];
}

type RawServices = Record<
  string,
  Record<
    string,
    {
      hosts?: string[];
      cookies?: string[];
    }
  >
>;

export class ServiceRegistry {
  private services = new Map<string, ServiceDescriptor>();
  private categories = new Map<string, ServiceDescriptor[]>();

  constructor(raw: RawServices) {
    Object.entries(raw).forEach(([category, services]) => {
      Object.entries(services).forEach(([id, descriptor]) => {
        const record: ServiceDescriptor = {
          id,
          category,
          hosts: descriptor.hosts ?? [],
          cookies: descriptor.cookies ?? [],
        };
        this.services.set(id, record);
        const existing = this.categories.get(category) ?? [];
        existing.push(record);
        this.categories.set(category, existing);
      });
    });
  }

  getService(id: string): ServiceDescriptor | undefined {
    return this.services.get(id);
  }

  categoryFor(target: string): string | null {
    if (this.services.has(target)) {
      return this.services.get(target)!.category;
    }
    if (this.categories.has(target)) {
      return target;
    }
    return null;
  }

  listCategories(): string[] {
    return Array.from(this.categories.keys());
  }

  allServices(): ServiceDescriptor[] {
    return Array.from(this.services.values());
  }
}

export const registry = new ServiceRegistry(config as RawServices);
