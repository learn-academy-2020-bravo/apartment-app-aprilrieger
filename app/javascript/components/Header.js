import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';


class Header extends React.Component {
    render () {
        const {
        logged_in,
        sign_in_route,
        sign_out_route
        } = this.props

        return (
            <>
                <Jumbotron>
                    <h1 className="display-3">Cat Tinder</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    {logged_in &&
                    <p className="lead">
                    <Button color="info" href={sign_out_route}>Sign Out</Button>
                    </p>
                    }
                    {!logged_in &&
                    <p className="lead">
                    <Button color="info" href={sign_in_route}>Sign In</Button>
                    </p>
                    }
                </Jumbotron>
        </>
        );
    }
} 
    export default Header;
