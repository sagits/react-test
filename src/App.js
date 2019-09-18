import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
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


function App() {
  return (
    <div className='container-fluid'>
        <TopAppBar>
            <TopAppBarRow>
                <TopAppBarSection align='start'>
                    <TopAppBarIcon navIcon tabIndex={0}>
                        <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
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
        <TopAppBarFixedAdjust></TopAppBarFixedAdjust>

            <div className='row align-items-center' id='selectors-box'>

                    <div className='col-5 p-2' id='selectors-btn' align='center'>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className='col-2 p-3' align='center'>
                            <button type="button" className="btn btn-primary btn-sm" id="toggle-btn"><i className="material-icons">compare_arrows</i></button>
                    </div>

                    <div className='col-5 p-0' align='center'>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>

            </div>

    </div>
  );
}

export default App;
