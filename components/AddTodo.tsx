import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from 'react';
import { useSetRecoilState, } from 'recoil';
import { todoContentState, } from '@/states/todoState';
import { nanoid, } from 'nanoid';
import { TodoContent, } from '@/types';

export function AddTodo() {
  const [content, setContent] = useState<Omit<TodoContent, 'id'>>({ title: '', description: ''});
  const setTodos = useSetRecoilState(todoContentState);

  // to handle either ids: title or description
  const handleChange: ChangeEventHandler<HTMLInputElement> = e =>
    setContent(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const addTodo: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setTodos(todos => [...todos, {...content, id: nanoid() }]);
  }

  return (
    <form onSubmit={addTodo}>
      <label>
        Title:
        <input onChange={handleChange} value={content.title} id='title' required />
      </label>
      {' '}
      <label>
        Description:
        <input onChange={handleChange} value={content.description} id='description' />
      </label>
      <button type='submit' disabled={!content.title}>
        Add Todo
      </button>
    </form>
  );
}
