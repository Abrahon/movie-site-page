import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";



const MovieCard = ({ movie }) => {

    const { id, name, image, medium, type, language } = movie;

    // console.log(movie.show.image);

    return (
        <div className="mt-20">
            <div className="">
                <div className="card">
                    <img className="card-img-top" src={movie.show.image?.medium} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.show.name}</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted"></small></p>
                        <Link to={`/moviesummury/${movie.show.id}`}><button  type="button" className="btn btn-success">Summury</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default MovieCard;