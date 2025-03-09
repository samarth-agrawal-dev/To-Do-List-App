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
import { addTodo, getTodos } from "@/services/todoServices";
import { Todo } from "@/types";
import { useAuth } from "@/auth/authHooks";
export default function AddTodo({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) {
    const { user } = useAuth();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = async () => {
        if (user) {
            await addTodo(description, user.uid as string, title);
            const todos = await getTodos(user.uid as string);
            setTodos(todos);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" variant="ghost">Add Todo</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Todo</DialogTitle>
                    <DialogDescription>
                        Enter your task and describe it.
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