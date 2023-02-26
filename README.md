## To Do List with Recoil, TypeScript, and Next.js

```ts
export interface TodoContent {
  id:          string;
  title:       string;
  description: string;
};

```

- Atom
```ts
export const todoContentState = atom<TodoContent[]>({
  key: 'todoContents',
  default: [],
});
```

- AtomFamily
```ts
export const todoCompleteState = atomFamily<boolean, string>({
  key: 'todoCompleteState',
  default: false,
});
```

