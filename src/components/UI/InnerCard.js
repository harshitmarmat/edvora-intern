import './Card.css'

const InnerCard = (props) => {
    const cardClass = 'innercard ' + props.className;
    return(
        <div className={cardClass}>
            {props.children}
        </div>
    )

}

export default InnerCard;