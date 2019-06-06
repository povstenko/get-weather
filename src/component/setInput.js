import React from "react"

class Element extends React.Component {
    render () {
    return (
        <div>
            <div className="container">
                <img src="http://www.pngall.com/wp-content/uploads/2017/01/Weather-Report-Free-Download-PNG.png" className="img-fluid" alt="weather"/>
                <h1>Weather</h1>
                <form onSubmit={this.props.methodWeather}>
                    <div className="form-group">
                        <label >Get Weather forecast anywhere</label>
                        <input type="text" className="form-control" placeholder="Enter your city"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    );
    }
}

export default Element;