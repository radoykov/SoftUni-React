import { Component } from 'react';

export class Picture extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid-item">
                <figure className="effect-ruby">
                    <img src={this.props.img} alt="Image" className="img-fluid tm-img" />
                    <figcaption>
                        <h2 className="tm-figure-title">Picture <span>{this.props.num}</span></h2>
                        <p className="tm-figure-description">{this.props.context}</p>
                        <a href={this.props.img}>View more</a>
                    </figcaption>
                </figure>
            </div>
        );
    }

}