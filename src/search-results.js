import React, { Component } from 'react';
import styled from 'styled-components';

import { searchMembers } from './api';

const ResultWrapper = styled.section`
    display: flex;
    flex-direction: column;

    width: 60%;
    max-width: 600px;
    min-width: 320px;

    margin: 10px;
    padding: 8px 16px 0;

    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.5rem;
    color: rgba(0, 0, 0, 0.87);
    
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: white;
    
    overflow-y: auto;

    &:empty {
        display:none;
    }
`;

const ResultItem = styled.div`
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
`;

const ItemFirstName = styled.div``;

const ItemLastName = styled.div`
    color: rgba(0, 0, 0, 0.54);
`;

const ItemNumber = styled.div``;

export default class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            members: [],
        };
    }

    componentWillUpdate(prevProps, prevState) {
        const search = prevProps.search;

        if (search !== prevState.search) {
            this.setState({ search });
            this.listMembers(search);
        }
    }

    delayTimeout = null;

    listMembers(search) {
        clearTimeout(this.delayTimeout);
        
        this.delayTimeout = setTimeout(() => {
            searchMembers(search).then(members => this.setState({ members }));
        }, 300);
    }

    render() {
        return (
            <ResultWrapper>
                {this.state.members.map((member, key) => {
                    return (
                        <ResultItem key={key}>
                            <ItemFirstName>{member.first_name}</ItemFirstName>
                            <ItemLastName>{member.last_name}</ItemLastName>
                            <ItemNumber>{member.number}</ItemNumber>
                        </ResultItem>
                    );
                })}
            </ResultWrapper>
        )
    }

}
