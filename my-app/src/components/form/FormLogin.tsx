import Link from "next/link";

export default function FormLogin() {
    return (
        <div className="flex justify-center grid grid-cols-1">
            <div className="m-8 bg-base-100">
                <form>
                    <div className="m-8">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email"
                            id="email"
                            placeholder="Please enter your email" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>
                    <div className="m-8">
                        <label htmlFor="email">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            id="password"
                            placeholder="Please enter your Password" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>
                    <div className="m-8 text-center">
                    <button
                        type="submit" 
                        className="btn btn-neutral">Login</button>
                    </div>
                </form>
            </div>
            <div className="m-8 p-4 bg-base-100">
                <h4 className="text-2xl">Don't have an account?</h4>

                <Link href="/register" className="my-4 btn btn-outline btn-neutral btn-block">Register</Link>
            </div>
        </div>
    )
}