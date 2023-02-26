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

- `useRecoilValue()`
```ts
function useRecoilValue<T>(state: RecoilValue<T>): T;
```
- `useRecoilState()`
```ts
function useRecoilState<T>(state: RecoilState<T>): [T, SetterOrUpdater<T>];
type SetterOrUpdater<T> = (T | (T => T)) => void;
```
- `useSetRecoilState()`
```ts
function useSetRecoilState<T>(state: RecoilState<T>): SetterOrUpdater<T>;
type SetterOrUpdater<T> = (T | (T => T)) => void;
```
