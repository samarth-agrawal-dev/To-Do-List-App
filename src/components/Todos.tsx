import { useEffect, useState } from 'react';
import { useAuth } from '../auth/authHooks';
import { getTodos, updateTodo, deleteTodo } from '../services/todoServices';
import { Todo } from '@/types';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import AddTodo from './AddTodo';
function TodoList() {
  const { user } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const gradients = [
    "bg-gradient-to-r from-blue-400 to-purple-500",
    "bg-gradient-to-r from-orange-300 to-pink-400",
    "bg-gradient-to-r from-green-300 to-blue-400",
    "bg-gradient-to-r from-pink-500 to-purple-600",
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-blue-500 to-teal-500",
    "bg-gradient-to-r from-purple-200 to-pink-200",
    "bg-gradient-to-r from-green-200 to-blue-200",
    "bg-gradient-to-r from-pink-100 to-orange-200"
  ]
  useEffect(() => {
    if (user) {
      const fetchTodos = async () => {
        const todos = await getTodos(user.uid as string);
        setTodos(todos);
      };
      fetchTodos();
    }
  }, [user]);

  return (<div className='bg-black min-h-screen grid grid-cols-4 items-center justify-center'>
    {todos.length ? todos.map((todo, idx) => (
      <li key={todo.id}>
        <div className={`text-white mx-auto rounded-3xl w-[300px] min-h-[200px] flex gap-6 p-5 justify-between items-center ${gradients[idx % gradients.length]}`}>
          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={() => updateTodo(todo.id, !todo.completed, user?.uid as string, setTodos)}
            />
            <label htmlFor={todo.id}>
              <div className='flex flex-col'>
                <p className='text-[#262525] font-[Poppins] font-bold text-[28px]'>{todo.title}</p>
                <p className='text-[#262525] font-[Poppins] font-[15px]'>{todo.description}</p>
              </div>
            </label>
          </div>
          <div className='flex flex-col gap-5'>
            <MdEdit size={25} color='black'/>
            <MdDelete size={25} color='black' onClick={() => deleteTodo(todo.id, user?.uid as string, setTodos)} />
          </div>
        </div>
      </li>
    )) : <span className='font-[Poppins] font-bold text-[#262525] text-[100px]'>You dont have any todos.</span>}
    <div className='w-[50px] mx-auto'>
      <AddTodo setTodos={setTodos} />
    </div>
  </div>
  );
}

export default TodoList;