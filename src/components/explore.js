const Explore = (props) => {
    return(
        
        <div className="explore-box">
            <div className="explore-box-img">
                <img src={props.img} alt="" />
            </div>
            <div className="explore-box-text">
                <h1>{props.title}</h1>

                <div className="decorative-buttons">
                    <button className="btn-1">💸Web3 nOOb</button>
                    <button className="btn-2">⏰Weekend build</button>
                </div>
                <p>{props.textContent}</p>
                <div className="client-side">
                    <img src="../images/clients.PNG" alt="" />
                    <p>{props.howManyBuilds}K building!</p>
                </div>
                {/* <button id="join-btn">Join a cohort</button> */}
            </div>
        </div>
    
    )
}
export default Explore;