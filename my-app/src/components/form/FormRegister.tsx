import Link from "next/link";

export default function FormRegister() {
    return (
        <div className="flex justify-center grid grid-cols-1">
            <div className="m-8 bg-base-100">
                <form>
                    <div className="m-8">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            placeholder="Full Name" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>
                    <div className="m-8">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username"
                            id="username"
                            placeholder="Username" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>
                    <div className="m-8">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email"
                            id="email"
                            placeholder="Email" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>
                    <div className="m-8">
                        <label htmlFor="email">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            id="password"
                            placeholder="Password" 
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
                    <h4 className="text-2xl">Already have an account?</h4>

                    <Link href="/login" className="my-4  btn btn-outline btn-neutral btn-block">Login</Link>
                    <Link href="/" className="my-4 btn btn-outline btn-neutral btn-block">Continue Shopping</Link>
            </div>
        </div>
    )
}