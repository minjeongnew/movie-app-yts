import React from 'react';
import Movie from './Movie';
import "./Search.scss";
import {getSearchMovieAPI} from '../api';
import Button from './Button'
import { MdAdd } from 'react-icons/md';
import axios from 'axios';


class Search extends React.Component {
  state = {
    isLoading: false,
    movies: [],
    value: "",
    name: "영화 검색",
    like: '',
    clicked:false,
    clickedIndex:0,
    currentMovie : {}
  };

  getSearchMovie = async () => {
    console.log('search Movie');
    const search = this.state.value;
    console.log(this.state)
    // console.log(this.state.value.split(" "))


    try {
      if (search === "") {
        this.setState({movies: [], isLoading: false})
      } else {
        this.setState({movies: [], isLoading: true})
        const items = await getSearchMovieAPI.search(search)

        alert("(Loading 메시지 확인중...)");
        console.log(items)
        let movie_list = items.data.data.movies;
        console.log(movie_list);
        this.setState({movies: movie_list, isLoading: false});

      }
    } catch (error) {
      console.log(error);
    }
  };
  getLike = async(id) => {
    const detail = await axios.get(`https://movie-app-2021.herokuapp.com/yts/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
    const like = detail.data.data.movie.like_count;
    this.setState({like: like})
    console.log(like)

  }
  componentDidMount() {
    this.getSearchMovie();
  };

  handleChange = (e : any) => {
    this.setState({value: e.target.value});
    // this.getLike()
    // console.log(e.target.value)
  };
  onClickHandler = (e:any) => {
    e.preventDefault();
    this.setState({clicked: true});

  }
  handleSubmit = (e : any) => {
    e.preventDefault();
    this.getSearchMovie();
  };


  buttonClick = (index) => {
    // e.preventDefault();

    console.log("id:",this.state.movies[index].id)
    this.getLike(this.state.movies[index].id)
    this.setState({clicked:true})
    this.setState({currentMovie:this.state.movies[index]})
  }
  render() {
    const {movies, isLoading, name, like, clicked, currentMovie} = this.state;

    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">({this.state.name}) Loading... {this.state.value}</span>
          </div>)
          : (<form className="form-search" onSubmit={this.handleSubmit}>
            <div>
              <div className="input_div">
                {/*<h1>영화 검색</h1>*/}
                <input className="input_search"
                       type="text"
                       value={this.state.value}
                       onChange={this.handleChange}
                       placeholder="입력포맷: <정렬기준> <검색기준> 예:like 5"/>
                <button type="submit" className="input-button">
                  <MdAdd />
                </button>
              </div>
              <div className="buttons">
                {movies.map((movie, index) =>
                        (<Button idx={index}
                                 img={movie.medium_cover_image}
                                 callback={(e)=>{
                                   this.buttonClick(index);
                                   e.preventDefault()}}
                                 key={index}>
                        </Button>)
                )}

              </div>
              {clicked? <Movie key={currentMovie.id}
                               id={currentMovie.id}
                               year={currentMovie.year}
                               genres={currentMovie.genres}
                               runtime={currentMovie.runtime}
                               summary={currentMovie.summary}
                               title={currentMovie.title}
                               poster={currentMovie.background_image_original}
                               like={like}
                               rating={currentMovie.rating}
                              ></Movie>
                               :''}
            </div>
          </form>)
      }
    </section>);
  }
}

export default Search;
