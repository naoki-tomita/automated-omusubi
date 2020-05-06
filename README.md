# automated-omusubi

Improved [omusubi](https://www.npmjs.com/package/omusubi).
You do not need to register.

# how to use

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
    this.foo; // <-- Injectable instance.
  }
}

new Injected().func();
```
