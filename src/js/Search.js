import React from 'react';
import Axios from 'axios';
import '../css/App.css';
import {Link} from 'react-router-dom';

class Search extends React.Component {

    state = {
        movies: []
    }

    componentDidMount() {
       this.getMovies();
    }

    render() {
        const {movies} = this.state;
        return (
            <div>
                {movies.map(movie => (
                    <Link to={{
                        pathname: '',
                        state: {

                        }
                    }}>
                    <div>
                        <div className="movie-img"><img className="img" src={movie.image} alt={movie.title} title={movie.title}/></div>
                        <div dangerouslySetInnerHTML={{__html: movie.title}}></div>
                        <div>{this.getMovieDetail()}</div>
                    </div>
                    </Link>
                ))}
            </div>
        );
    }

    getMovies = async() => {
        const {location} = this.props;
        const search = location.state.search;
        const url = "/api/v1/search/movie.json";
        const id = "Tbe5UQm8vgGeeQwbfj_L";
        const secret = "5lb5XYyNV1";
        const {
          data : {
            items
          }
        } = await Axios.get(url, {
          params: {
            query: search
          },
          headers: {
            'X-Naver-Client-Id': id,
            'X-Naver-Client-Secret': secret
          }
        });
        this.setState({movies: items});
        console.log(items);

    }

    getMovieDetail() {
        return "test";
    }


}

export default Search;