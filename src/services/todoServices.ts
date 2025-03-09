import { db } from '../lib/firebase';
import { Todo } from '@/types';
import { collection, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
export const addTodo = async (description: string, userId: string, title: string) => {
    const todo = {
        title,
        completed: false,
        createdAt: new Date(),
        userId,
        description,
    };
    console.log(userId)
    const docRef = await addDoc(collection(db, 'todos'), todo);
    return docRef.id;
};

export const getTodos = async (userId: string): Promise<Todo[]> => {
    const q = query(collection(db, 'todos'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        completed: doc.data().completed,
        createdAt: doc.data().createdAt.toDate(),
        userId: doc.data().userId,
        description: doc.data().description
    }));
};

export const updateTodo = async (id: string, completed: boolean, userId:string, title:string, description:string, setTodos:React.Dispatch<React.SetStateAction<Todo[]>>) => {
    await updateDoc(doc(db, 'todos', id), { completed, title, description });
    const todos = await getTodos(userId);
    setTodos(todos)
};

export const deleteTodo = async (id: string, userId : string, setTodos:React.Dispatch<React.SetStateAction<Todo[]>>) => {
    await deleteDoc(doc(db, 'todos', id));
    const todos = await getTodos(userId);
    setTodos(todos)
};