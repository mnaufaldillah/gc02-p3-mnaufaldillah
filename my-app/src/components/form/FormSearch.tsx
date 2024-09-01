export default function FormSearch({ inputSearch, setInputSearch }: any) {
    return (
        <div className="flex items-center justify-center">
            <div className="m-3">
                <form className="flex justify-center">
                    <div className="m-1">
                        <input 
                            type="text" 
                            name="inputSearch"
                            id="inputSearch"
                            defaultValue={inputSearch}
                            placeholder="Search product" 
                            className="input input-bordered w-full max-w-xs" 
                            onChange={(e) => setInputSearch(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}