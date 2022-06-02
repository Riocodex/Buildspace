const WhatsHot = (props) => {
  const styles={
    backgroundColor: props.color,
    width: props.width
  }
    return(
        <div className="first-slide">
        <div className="left-side">
        <h3 style={styles}>{props.upLeft}</h3>
          <h1>{props.title}</h1>
          <p className="text">
              {props.textContent}
          </p>
        </div>
        <div className="image">
            <img src={props.img} alt="prop" />
        </div>
      </div>
    )
}
export default WhatsHot;