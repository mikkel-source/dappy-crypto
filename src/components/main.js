import axios from "axios"
import { useState, useEffect } from "react"
import FeatureCard from "./featureCards"
import RoadMap from "./roadmap"
import "./main.scss"
export default function Main() {
    var [content, setcontent] = useState([])
    var [roadmap, setroadmap] = useState([])
    useEffect(function () {
        
        axios.get("./feature.json")
            .then(response => {
                setroadmap(response.data.roadmap)
                setcontent(response.data.feature)
            })
            
    }, [axios, setcontent, setroadmap])

    return (
    
        <div className="main">
            <div className="dappy__navDescription"> <p> Dappy is light wallet powered by Blockstack. It uses Gaia decentralized storage and encryption option. Dappy doesn't store or proceed user private key, the all data are securely stored in the Gaia. Dappy was created by the BC Net that trust in crypto and decentralized applications.</p></div>
            {content.map((feature) => {
                return <FeatureCard content={feature}/>
                    })}
            <div className="roadMap">


                        {roadmap.map((roads) => {
                            return <RoadMap content={roads} />

                        })}

                    
                    


            </div>
            </div>
    )

    


}