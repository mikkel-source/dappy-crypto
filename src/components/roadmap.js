import "./roadmap.scss"
export default function RoadMap({content}) {
  return (
  
<div className="roadMaps">
      {content.map(item => {
      if (item.type === "image") {
        return <img src={item.url} className="roadMap__image" alt=""/>
      
      }
      if (item.type === "date") {
        
         return ( <p className="roadMap__date">{item.text}</p>
         )
      }
      if (item.type === "text") {
        
        return (
          <p className="roadMap__text">{item.text} 

          </p>
        )
      }

      return null;
      
    })}
    </div>
    

    
  

  

   
  )
    
    
}