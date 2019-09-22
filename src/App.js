import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.scss';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import TopAppBar, {
    TopAppBarFixedAdjust,
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }    

    handleChange(event) {
        //console.log('value', event.target.value);
        this.setState({ value: event.target.value }, () => {
            if (this.state.value.length >= 3) {
                console.log('text to translate...', this.state.value);
            }
        });

    }

    render() {
        return (
            <div>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection align='start'>
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')} />
                            </TopAppBarIcon>
                            <TopAppBarTitle>Google Translate</TopAppBarTitle>
                        </TopAppBarSection>
                        {/* <TopAppBarSection align='end' role='toolbar'>
                        <TopAppBarIcon actionItem tabIndex={0}>
                            <MaterialIcon
                                aria-label="print page"
                                hasRipple
                                icon='print'
                                onClick={() => console.log('print')}
                            />
                        </TopAppBarIcon>
                    </TopAppBarSection> */}
                    </TopAppBarRow>
                </TopAppBar>

                {/* Content */}
                <TopAppBarFixedAdjust>
                    <div className='container-fluid'>

                        {/* Dropdowns Box */}
                        <div className='row align-items-center' id='dropdowns-box'>
                            <div className='col-5' align='center'>
                                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>

                            <div className='col-2' align='center'>
                                <Button variant="primary" size="sm" id="toggle-btn">
                                    <i className="material-icons">compare_arrows</i>
                                </Button>
                            </div>

                            <div className='col-5' align='center'>
                                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>

                        {/* Input Box */}
                        <div className='row'>
                            <div className='col-12 p-0'>
                                <form>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control"
                                            id="input-box" 
                                            rows="3"
                                            type="text"
                                            autoFocus
                                            value={this.state.teamId}
                                            onChange={this.setTeamId}
                                            onFocus={function(e) {
                                                var val = e.target.value;
                                                e.target.value = '';
                                                e.target.value = val;
                                            }}
                                        >
                                        </textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                        {/* Translation Box */}
                        <div className='row'>
                            <div className='col-12 p-0'>
                                <form>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control"
                                            id="translation-box" 
                                            rows="3"
                                            type="text"
                                            readOnly
                                        >
                                        </textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </TopAppBarFixedAdjust>
            </div>
        );
    }
}

export default App;
