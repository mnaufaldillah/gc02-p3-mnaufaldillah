export default function FormSearch({ searchParams }: { searchParams: { inputSearch: string } }) {
    return (
        <div className="flex items-center justify-center">
            <div className="m-3">
                <form className="flex justify-center">
                    <div className="m-1">
                        <input 
                            type="text" 
                            name="inputSearch"
                            id="inputSearch"
                            placeholder="Search product" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>
                    <div className="m-1">
                        <button
                            type="submit" 
                            className="btn btn-neutral"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}