import { Link, useLoaderData } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



const MovieSummury = () => {
    const loader = useLoaderData();

    const { name, language, image, genres,runtime } = loader;
    console.log(loader.runtime)

    const handleBooking = e=>{
        e.preventDefault();
    
       const form = e.target;
       const name = `${form.name.value}`;
       const language = `${form.language.value}`;
       const genres = `${form.genres.value}`;

       const defaultValu = {name,language,genres};
   
    

       console.log(defaultValu);

    }

    return (
        <div>
            <div className='row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ' style={{ margin: "2rem" }}>
                <div className='m-10 '>
                    <img src={image.original} alt="" className="w-100 sm:m-0 h-50 rounded-lg shadow-2xl" />
                </div>
                <div className="">
                    <h2 className='text-3xl font-bold text-orange-600 mb-5 mt-5'>{name}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>{loader.summary}</p>
                    <p className='text-2xl text-orange-600 font-semibold'><b>Run time: {loader.runtime}</b></p>
                </div>
             
            </div>
            {/* booking list */}
            <h1 className="text-center" style={{text:"20px"}}>Ticket Booking Form</h1>
            <table style={{margin:"40px"}} className="table w-50 mx-auto mb-10">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Language</th>
                            <th scope="col">Genres</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{name}</td>
                            <td>{language}</td>
                            <td>{genres}</td>
                        </tr>
                    </tbody>
                </table>
            {/* booking form */}
            <div className="w-50 mx-auto">
                <h1 style={{text:"20px"}}>Ticket Booking Form</h1>
                <form onSubmit={handleBooking}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={name}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" name="language" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={language}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" name="genres" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={genres[0]}/>  
                    </div>
                    <input type="submit" className="btn btn-success" value="booking a ticket" />
                </form>
            </div>
            

        </div>
    );
};

export default MovieSummury;