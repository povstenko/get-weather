import React from "react"

class Element extends React.Component {
    render () {
    return (
        <div>
            <div className="container">
                <img src="http://www.pngall.com/wp-content/uploads/2017/01/Weather-Report-Free-Download-PNG.png" className="img-fluid" alt="weather"/>
                <h1>Weather</h1>
                <label>Get Weather forecast anywhere</label>
                <form onSubmit={this.props.methodWeather} className="form-inline md-form mr-auto mb-4">
                    <div className="">
                        <input type="text" className="form-control mr-sm-2" placeholder="Enter your city" name="city"/>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
    }
}

export default Element;