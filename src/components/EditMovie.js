import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from "@app/actions"

class EditMovie extends React.Component {
    constructor(props) {
        super(props);
        let popup = props.popup;
        let movie;
        if (popup.id && popup.id > 0) {
            movie = props.movies[popup.nr];
        } 
        let values = {};
        if (movie) {

            values = {
                title: movie.title,
                description: movie.description,
                lenght: movie.lenght,
                year: movie.year,
                genre: movie.genre,
                isFavourite: movie.isFavourite,
                hasSeen: movie.hasSeen,
                id: movie.id
            };
        } else {

            values = {
                title: '',
                description: '',
                lenght: '',
                year: '',
                genre: '',
                isFavourite: false,
                hasSeen: false,
                id: 0
            };
        }
        this.state = {
            ...values
        }
        
        this.state = {
            title: '',
            description: '',
            lenght: '',
            year: '',
            genre: '',
            isFavourite: false,
            hasSeen: false,
            id: this.props.popup.id
        };
      }

    handleChange(target) {
        this.setState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    }
    render() {
      const { togglePopup, popup } = this.props;
      console.log(popup);
      if (popup && popup.toggle) {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                Title:
                <input type="text" name="title" onChange={(event)=>{this.handleChange(event.target)}}/>
                Description:
                <textarea type="text" name="description" onChange={(event)=>{this.handleChange(event.target)}} style={{height: '150px'}} />
                Lenght:
                <input type="number" name="lenght" onChange={(event)=>{this.handleChange(event.target)}} />
                Year:
                <input type="number" name="year" onChange={(event)=>{this.handleChange(event.target)}} />
                Genre:
                <input type="string" name="genre" onChange={(event)=>{this.handleChange(event.target)}} />
                Favourite:
                <input type="checkbox" name="isFavourite" onChange={(event)=>{this.handleChange(event.target)}} />
                Seen:
                <input type="checkbox" name="hasSeen" onChange={(event)=>{this.handleChange(event.target)}} />
                <button onClick={() => {this.handleSubmit(state)}}>Save</button>
                <button onClick={() => {togglePopup(false)}}>Close</button>
                
                
            </div>
        </div>
        );
      } 
      else {
          return ''
      }
    }
  }

const mapStateToProps = (state, ownProps ) => ({
    popup: state.popup,
    movies: state.movies
})


export default connect(mapStateToProps, actionCreators)(EditMovie);