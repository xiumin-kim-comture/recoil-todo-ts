import { atom, atomFamily } from 'recoil';
import { TodoContent } from '@/types';

/**
 * array of TodoContent
 */
export const todoContentState = atom<TodoContent[]>({
  key: 'todoContents',
  default: [],
});

/**
 * AtomFamilyOptions<T, P extends SerializableParam>
 * @param id to pick up an element in the array of TodoContent
 */
export const todoCompleteState = atomFamily<boolean, string>({
  key: 'todoCompleteState',
  default: false,
});
