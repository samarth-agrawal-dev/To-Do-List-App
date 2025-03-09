import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { updateTodo } from "@/services/todoServices";
import { Todo } from "@/types";
import { useAuth } from "@/auth/authHooks";
import { MdEdit } from "react-icons/md";
export default function UpdateTodo({ setTodos, todo }: { setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, todo:Todo }) {
    const { user } = useAuth();
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const submitHandler = async () => {
        if (user) {
            await updateTodo(todo.id,false,user.uid as string,title, description,setTodos);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <MdEdit color="black" size={25}/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogDescription>
                        Change your goal or description.
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            required
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoComplete="New Todo"
                            placeholder="Study for 4 hours."
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            required
                            id="Description"
                            placeholder="Complete the chapters light, kinematics, thermodynamics, quantum mechanics, motion and gravitation."
                            autoComplete="current-password"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={submitHandler} type="button" variant="outline">
                            <span>Submit</span>
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}