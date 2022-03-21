import { Link } from "react-router-dom";

const BookCard = () => {
    return (
        <Link to='/'>
            <div className='bookCard'>
                image of the bookd
                <h2 className='title'>
                    title
                </h2>
                <p className='price'>
                    price
                </p>
            </div>
        </Link>
    )

  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};
export default BookCard