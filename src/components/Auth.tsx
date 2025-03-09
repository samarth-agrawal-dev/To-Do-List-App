import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
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
import { handleSignIn, handleSignUp, signInWithGoogle } from "@/lib/actions";
import { useState } from "react";
export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Please login again to continue using the application.
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            required
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="username"
                            placeholder="team@mynaui.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            required
                            id="password"
                            type="password"
                            placeholder="••••••••••"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" onClick={() => handleSignUp(email, password)} variant="outline">
                            <span>Sign Up</span>
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" onClick={() => handleSignIn(email, password)} variant="outline">
                            <span>Login</span>
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" onClick={signInWithGoogle} variant="outline">
                            <span className="flex items-center gap-2"><FaGoogle /> Sign in with Google </span>
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}