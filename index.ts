import "reflect-metadata";
const map = new Map();
export const named: ClassDecorator = (Target: any) => {
  map.set(Target, new Target());
  return Target;
}
export const binding: PropertyDecorator = (Target: any, key) => {
  Target[key] = map.get(Reflect.getMetadata("design:type", Target, key));
  return Target;
}
