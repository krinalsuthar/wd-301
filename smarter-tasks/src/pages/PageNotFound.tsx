function PageNotFound() {
    return (
        <>
            <div className="text-center mt-20">
                <h1 className="text-2xl" >404 - Page NOT Found</h1>
                <button>
                    <a className="text-2xl text-blue-600" href={`/home`}>GO TO HOME PAGE</a>
                </button>
            </div>
        </>
    )
}

export default PageNotFound;