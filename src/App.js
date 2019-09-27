import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import _ from 'underscore';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'vill du ta ett kaffe med mig imorgon?',
            showOptions: false
        };
        this.translate();

        this.translateDebounceFunction = _.debounce(function () {
            this.translate();
        },500);

        this.handleChange = this.handleChange.bind(this);
        this.showOrHideOptions = this.showOrHideOptions.bind(this);
        this.onSelectFlag = this.onSelectFlag.bind(this);
    }

    translate () {
        fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyA4KzqQDZwPBNF52RKr7iXvrM8Mt0dMAYI', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "q": [this.state.value],
                //"source": "pt-br",
                "target": "eng"
            })
        })
            .then(res => res.json())
            .then(
                (result) => {

          

                    if (result.data && result.data.translations && result.data.translations.length) {
                        console.log(result.data.translations[0].translatedText);
                        console.log(result.data.translations[0].detectedSourceLanguage);

                        console.log('translate() success', result);
                        //deu certo e trouxe resultados (pode ter .toUpperCase()dado certo a requisição mas vc passou um texto que não tem tradução)
                        this.setState({
                            isLoaded: true,
                            translatedValue: result.data.translations[0].translatedText,
                            selectedLanguage: result.data.translations[0].detectedSourceLanguage,
                            translatedLanguage: "us"
                        },
                            () => {
                                this.refs.userFlag2.updateSelected(this.state.translatedLanguage.toUpperCase().toUpperCase());
                                this.refs.userFlag.updateSelected(this.state.selectedLanguage.toUpperCase());
                                this.setState({});
                            }
                        );
                    }
                    else {
                        //deu erro
                        console.log('translate() error', result);
                    }

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleChange(event) {
        //console.log('value', event.target.value);
        event.preventDefault();

        this.setState({ value: event.target.value }, () => {
            if (this.state.value.length >= 3) {
                console.log('text to translate...', this.state.value);
                this.translateDebounceFunction();
            }
        });
    }

    
    showOrHideOptions() {
        this.setState({ showOptions: !this.state.showOptions });
    }

    onSelectFlag(countryCode){
        this.setState({
            selectedLanguage: countryCode
        });
    }

    render() {

        var Options = function () {
            return (
                <div id="icons-menu-ext">
                    <i className="material-icons ml-2">keyboard_voice</i>
                    <FontAwesomeIcon icon={faPen} />
                    <i className="material-icons ml-3">photo_camera</i>
                    <i className="material-icons ml-3">insert_drive_file</i>
                </div>
            );
        }

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
                        <div className='row' id='dropdowns-box'>
                            <div className='col-5 p-0' align='center'>
                                <ReactFlagsSelect 
                                    className="menu-flags" 
                                    placeholder="Detect Language"
                                    ref="userFlag"
                                    onSelect={this.onSelectFlag}
                                />
                            </div>

                            <div className='col-2' align='center'>
                                <Button variant="primary" size="sm" id="toggle-btn">
                                    <i className="material-icons">compare_arrows</i>
                                </Button>
                            </div>

                            <div className='col-5 p-0' align='center'>
                                <ReactFlagsSelect 
                                    className="menu-flags" 
                                    ref="userFlag2"
                                    placeholder="Select Language"
                                    searchable={true}
                                />
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
                                            rows="4"
                                            type="text"
                                            autoFocus
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div id="icons-menu">
                            <i className="material-icons">history</i>
                            <Button variant="primary" size="sm" id="more-btn" onClick={this.showOrHideOptions}>
                                <i className="material-icons">more_horiz</i>
                            </Button>
                        </div>

                        {
                            this.state.showOptions ? <Options /> : null
                        }


                        {/* Translation Box */}
                        <div className='row'>
                            <div className='col-12 p-0'>
                                <form>
                                    <div className="form-group">
                                        <div
                                            className="form-control translation-box"
                                            id="translation-box"
                                            rows="3"
                                            type="text"
                                            dangerouslySetInnerHTML={{ __html: this.state.translatedValue }}
                                            readOnly
                                        >
                                           
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Translation Additionals */}
                        <div className='row'>
                            <div className='col-12 p-3 mt-2'>
                                <div id="translation-adds">
                                    <h6>Noun</h6>
                                    <p>Example</p>
                                    <h6>Verb</h6>
                                    <p>To example <small>(present tense - see "Example" verb)</small></p>
                                    <h6>Synonyms</h6>
                                    <p>Example 1, example 2, example 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TopAppBarFixedAdjust>
            </div>
        );
    }
}

export default App;
