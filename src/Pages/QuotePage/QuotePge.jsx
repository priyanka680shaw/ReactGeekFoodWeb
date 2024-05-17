import QuoteCard from "../../Components/QuoteCard/quoteCard"
function QuotePage(){

    const qouteData = [
        {
            quote : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            Author : "Adam Scott"
        },
        {
            quote : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            Author : "Adam Scott"
        },
        {
            quote : "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
            Author : ""
        },
        {
            quote : "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
            Author : "Albert Einstein"
        },
        {
            quote : "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
            Author : "Albert Einstein"
        },
        {
            quote : "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, <q>Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.<q> Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.<q>",
            Author : "Albert Einstein"
        },
        {
            quote : "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
            Author : "Albert Einstein"
        },
        {
            quote : "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
            Author : "Albert Einstein"
        },
        {
            quote : "Tell me what you eat, and I will tell you what you are.",
            Author : "Albert Einstein"
        },
        {
            quote : "Health food makes me sick.",
            Author : "Albert Einstein"
        },
        {
            quote : "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
            Author : "Albert Einstein"
        },
        {
            quote : "It's important to begin a search on a full stomach.",
            Author : "Eike von Repkow"
        },
        {
            quote : "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
            Author : "Eike von Repkow"
        },
        {
            quote : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            Author : "Adam Scott"
        },
        {
            quote : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            Author : "Adam Scott"
        },
        {
            quote : "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
            Author : ""
        },
        {
            quote : "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
            Author : "Albert Einstein"
        },
        {
            quote : "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
            Author : "Albert Einstein"
        },
        {
            quote : "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, <q>Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.<q> Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.<q>",
            Author : "Albert Einstein"
        },
        {
            quote : "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
            Author : "Albert Einstein"
        },
        {
            quote : "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
            Author : "Albert Einstein"
        },
        {
            quote : "Tell me what you eat, and I will tell you what you are.",
            Author : "Albert Einstein"
        },
        {
            quote : "Health food makes me sick.",
            Author : "Albert Einstein"
        },
        {
            quote : "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
            Author : "Albert Einstein"
        },
        {
            quote : "It's important to begin a search on a full stomach.",
            Author : "Eike von Repkow"
        },
        {
            quote : "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
            Author : "Eike von Repkow"
        },
    ]

    return(
        <>
            {
                qouteData.map((data , index)=>{
                    return(
                        <QuoteCard quote = {data.quote} author = {data.Author} key = {index}/>
                    )
                }) 
            }
        </>
    )
}
export default QuotePage