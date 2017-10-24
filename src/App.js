import React, {Component} from 'react';
import styled from 'styled-components';

import SearchBar from './search-bar';
import SearchResults from './search-results';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
`;

const StyledMask = styled.div`
    background-color: #FFF;
    display: block;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const StyledLogoLink = styled.a`
    position: absolute;
    z-index: 2;
    top: 50px;
    left: 50px;
    width: 48px;
    height: 48px;
`;

const StyledContainer = styled.div`
    margin-top: 50vh;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    background-color: #7E57C2;
`;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(search) {
        this.setState({ search });
    }

    render() {
        return (
            <StyledWrapper>
                <StyledMask />
                <StyledLogoLink href='https://interclub.io' target='_blank'>
                    <img src='/assets/logo_48x48.png' />
                </StyledLogoLink>
                <StyledContainer>
                    <SearchBar onChange={this.handleSearch} />
                    <SearchResults search={this.state.search} />
                </StyledContainer>
            </StyledWrapper>
        );
    }
}
