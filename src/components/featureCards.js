import "./featureCards.scss"
export default function FeautureCard({ content }) {
    return (
        <div className="featureCards">
            {content.map(item => {
                if (item.type === "text") {
                    return <p className="itemText">{item.text}</p>
                }
    
                
                if (item.type === "headline") {
                    return <h1 className="itemHeadline">{item.headline}</h1>
                }
            

                if (item.type === "image") {
                    return <img className="itemImage" src={item.url} alt=""/>
                }
                return null           
            })}
        </div>
    )
}
