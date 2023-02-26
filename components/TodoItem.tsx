import {
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  todoContentState,   // atom
  todoCompleteState,  // atomFamily
} from '@/states/todoState';
import { TodoContent } from '@/types';

/**
 * @version 0.1.0
 */
export function TodoItem(props: TodoContent) {
  const { id, title, description, } = props;
  const [isComplete, setIsComplete] = useRecoilState(todoCompleteState(props.id));
  const setTodos = useSetRecoilState(todoContentState);

  // const toggleComplete = () => setIsComplete(prevState => !prevState);
  const toggleComplete = () => setIsComplete(!isComplete);
  const deleteTodo = () => setTodos(todos => todos.filter(todo => todo.id !== id));

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '10px',
    }}>
      <button onClick={toggleComplete}>{isComplete ? "Not complete" : "Complete"}</button>
      <button onClick={deleteTodo}>Delete</button>
      <div>
        <span>{isComplete ? '✅' : '☑️'}</span>{' '} {title}: {description}
        <span style={{ marginLeft: '8px', color: 'gray', fontSize: 'x-small'}}>{id}</span>
      </div>
    </div>
  );
}
