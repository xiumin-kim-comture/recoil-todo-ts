/**
  ==============================================================================
 * @file    index.tsx 
 * @version 0.1.0
 * @author  COM_金秀
 * ------------------------------------------------------------------------------
 */
import { AddTodo } from '@/components/AddTodo';
import { TodoList } from '@/components/TodoList';

export default function Home() {
  return (
    <div style={{ marginTop: '40px', marginLeft: '20px' }}>
      <h2>Recoil + TypeScript example</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}
