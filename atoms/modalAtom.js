/* # [Atom](https://recoiljs.org/docs/introduction/getting-started#atom)
Similar to a `slice` in Redux, an `atom` represents a piece of state. Atoms can be read from and written to from any component. Components that read the value of an `atom` are implicitly subscribed to that atom, so any atom updates will result in a component re-render, of all components subscribed to that atom:

```js
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
```

Components that read and write to an atom should use `useRecoilState` 🪝. Header
has this hook used to modify the `modalState` atom/slice. For read-only values,
you can use the `useRecoilValue` hook in your component tree.

# Selector represents a piece of derived state.
Derived state is transformation of state. Think of derived state as output of passing state to a pure function, that modifies given state in some way. */
import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});
