import { Link } from "react-router-dom";
import styled from 'styled-components'
const BookCard = ({id, title, imageUrl, price}) => {
const Wrapper = styled(Link)`
    color : black;
    text-decoration : none;
    cursor : pointer;
    margin: 1%;
    height: 100%;
    border: 1px solid black;
    &>img {
        margin-top: 3%;
        width : 90%;
        height : 80%;
    }
`
    return (
        <Wrapper to={`/bookdetailspage/${id}`}>
            <div className='bookCard'>
                <img src={imageUrl} alt="" width="100%" height="40%" />
                <h2 className='title'>
                    {title}
                </h2>
                <p className='price'>
                    {price}
                </p>
            </div>
        </Wrapper>
    )

  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};
export default BookCard