import { useRecoilValue } from "recoil";
import { todoContentState } from '@/states/todoState';
import { TodoItem } from '@/components/TodoItem';

/**
 * Just output a formatted atom state that is a list of TodoContent
 * @version 0.1.0
 */
export function TodoList() {
  const todos = useRecoilValue(todoContentState);
  // console.log(todos);

  return (
    <div>
      <ul>
        {todos.map(todoProps => (
          <li key={todoProps.id}>
            <TodoItem {...todoProps} />
          </li>
        ))}
      </ul>
      <p>Atom has {todos.length} elements.</p>
    </div>
  );
}
