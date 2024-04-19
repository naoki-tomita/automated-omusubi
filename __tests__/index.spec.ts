import { binding, named, namedWith, bindBy, register } from "../";

describe("test", () => {
  describe("binding and named", () => {
    @named
    class TestInjectable1 {
      foo = "bar" as const;
    }

    class TestInjected1 {
      @binding
      binding!: TestInjectable1;
    }

    it("should access TestInjectable1 from TestInjected1", () => {
      const target = new TestInjected1();
      expect(target.binding).toBeInstanceOf(TestInjectable1);
    });
  });

  describe("bindBy and nameWith", () => {
    @namedWith("foo")
    class TestInjectable2 {
      foo = "bar" as const;
    }

    class TestInjected2 {
      @bindBy("foo")
      binding!: TestInjectable2;
    }

    it("should access TestInjectable2 from TestInjected2", () => {
      const target = new TestInjected2();
      expect(target.binding).toBeInstanceOf(TestInjectable2);
    });
  });

  describe("nameWith and register", () => {
    class TestInjectable3 {
      foo = "bar" as const;
    }

    class TestInjected3 {
      @bindBy("bar")
      binding!: TestInjectable3;
    }

    it("should access TestInjectable3 from TestInjected3", () => {
      const injectable = new TestInjectable3();
      const injected = new TestInjected3();
      register(injectable).as("bar");
      expect(injected.binding).toStrictEqual(injectable);
    });
  });
});
