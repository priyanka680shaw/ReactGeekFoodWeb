function QuoteCard({quote , author}){
    return(
        <>
                <div className="w-full p-4 border-4 border-black flex justify-center items-center flex-col mb-4">
                    <h1 className="text-red-700 text-3xl">{quote}</h1>
                    <q className="text-lime-600 p-4 text-3xl font-bold" >{author}</q>
                </div>
        </>
    )
}
export default QuoteCard;