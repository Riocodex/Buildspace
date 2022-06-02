import WhatsHot from "./whatshot";
import Explore from "./explore";
import whatshotdata from "./whatshotdata";
import exportData from "./exploreData";
const Body = () => {
    const exploreData=exportData.map(item =>{
        return(
            <Explore
            key={item.id}
            {...item}
            />
        )
    })
    const hotData=whatshotdata.map(item=>{
        return (
            <WhatsHot
            key={item.id}//not necessary but this makes the error about key prop dissapear
           {...item}
         />
        )
    })
    return(
        <div className="firstSide">
        <h1>Whats hot rn 🔥</h1>
        <div className="header-body">
         {hotData}
        </div>
        <div className="secondSide">
        <h1>Explore what others are building 👀</h1>
           <div className="explore">
            {exploreData}
           </div>
        </div>
    </div>
    )
}
export default Body;