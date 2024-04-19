import "reflect-metadata";
const map = new Map();
export const named: ClassDecorator = (Target: any) => {
  map.set(Target, new Target());
  return Target;
}

export function namedWith(identifier: any): ClassDecorator {
  return (Target: any) => {
    map.set(identifier, new Target());
    return Target;
  }
}

export const binding: PropertyDecorator = (Target: any, key) => {
  Object.defineProperty(Target, key, {
    get() {
      return map.get(Reflect.getMetadata("design:type", Target, key));
    },
    configurable: true,
  });
  return Target;
}

export function bindBy(identifier: any): PropertyDecorator {
  return (Target, key) => {
    Object.defineProperty(Target, key, {
      get() { return map.get(identifier); },
      configurable: true,
    });
    return Target;
  }
}

export function register(instance: any) {
  return {
    as(identifier: any) {
      map.set(identifier, instance);
    }
  }
}

export function resetBinding() {
  map.clear();
}

export function get(identifier: any) {
  return map.get(identifier);
}
