import React from 'react';
import logo from './logo.svg';
import './App.css';
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
      <div>
          <TopAppBar>
              <TopAppBarRow>
                  <TopAppBarSection align='start'>
                      <TopAppBarIcon navIcon tabIndex={0}>
                          <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
                      </TopAppBarIcon>
                      <TopAppBarTitle>I loved your new haircut</TopAppBarTitle>
                  </TopAppBarSection>
                  <TopAppBarSection align='end' role='toolbar'>
                      <TopAppBarIcon actionItem tabIndex={0}>
                          <MaterialIcon
                              aria-label="print page"
                              hasRipple
                              icon='print'
                              onClick={() => console.log('print')}
                          />
                      </TopAppBarIcon>
                  </TopAppBarSection>
              </TopAppBarRow>
          </TopAppBar>
          <TopAppBarFixedAdjust>
              My exciting content!
          </TopAppBarFixedAdjust>
      </div>
  );
}

export default App;
