import React from "react";
import { connect } from 'react-redux';
import MovieRow from "@comp/MovieRow";
import * as actionCreators from "@app/actions"

class ListBox extends React.Component {
    
    
    
    render() {
        const { className, movies } = this.props;
        if (movies) {
            return (
                <div className={`${className} list-box`}>
                    {Object.keys(movies).map(key => {
                        const element = movies[key];
                        return (
                        <MovieRow 
                            key={key}
                            id={element.id}
                            title={element.title}
                            year={element.year}
                            isFavourite={element.isFavourite}
                            hasSeen={element.hasSeen}
                        />
                        )
                    })}
                </div> 
            )    
        }
        return (
            <div/>
        )
    }


    componentDidMount(){
        this.props.fetchMovies();
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
})


export default connect(mapStateToProps, actionCreators)(ListBox);