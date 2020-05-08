# automated-omusubi

Improved [omusubi](https://www.npmjs.com/package/omusubi).
You do not need to register.

# how to use

**important**

You must enable TypeScript compiler options.

```javascript
{
  "compilerOptions": {
    // ...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
    // ...
  }
}
```

## automated injection

```typescript
import {named, binding} from "automated-omusubi";

@named
class Injectable {
  x = "foo";
}

class Injected {
  @binding
  foo!: Injectable;

  func() {
    return this.foo; // <-- Injectable instance.
  }
}

console.log(new Injected().func());
```

## identifier specified injection

It can be used in `dependency inversion principle`

```typescript
import {namedWith, bindBy} from "automated-omusubi";

abstract class AbstractInjectable {
  x = "bar";
}

@namedWith(AbstractInjectable)
class Injectable extends AbstractInjectable {
  y = "foo";
}

class Injected {
  @bindBy(AbstractInjectable)
  foo!: AbstractInjectable;

  func() {
    return this.foo; // <-- Injectable instance.
  }
}

console.log(new Injected().func());
```

## identifier specified injection and explicitly instance registration

```typescript
import {register, bind} from "automated-omusubi";

class Injectable {
  y = "foo";
  z: string;
  constructor(z: string) {
    this.z = z;
  }
}

class Injected {
  @bind
  foo!: Injectable;

  func() {
    return this.foo; // <-- Injectable instance.
  }
}

register(new Injectable("bar")).as(Injectable);
console.log(new Injected().func());
```
