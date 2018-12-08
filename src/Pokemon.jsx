import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import './Pokemon.css';
import { Input } from 'reactstrap';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            pv: '',
        }
        this.speak = this.speak.bind(this);
        this.changePV = this.changePV.bind(this);
    }

    changePV(e) {
        this.setState({
            pv: e.target.value,
        })
    }

    speak() {
        alert(this.state.pv > 0 ? 'I am alive !' : 'I am dead !')
        let text = this.state.pv > 0 ? 'So good to be alive !' : 'Do not throw away your plastic bags !'
        this.setState({
            text: text,
        })
    }


    render() {
        const style = this.state.pv === '' ? 'black' : this.state.pv  > 0 ? 'green' : 'red'


        return (
            <div>
                <Card className="cardType">
                    <CardImg src={this.props.image} />
                    <CardBody className={style}>
                        <CardTitle className="pokedia">{this.props.name}</CardTitle>
                        <p className="text">Type : {this.props.type}</p>
                        <Input className="text" onChange={this.changePV} placeholder="Number of pv"></Input>
                        <Button onClick={this.speak}>Catch them all !</Button>
                        <p className="paragraph">{this.state.text}</p>
                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default Pokemon;