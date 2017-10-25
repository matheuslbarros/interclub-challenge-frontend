import React, { Component } from 'react';
import styled from 'styled-components';

import { searchMembers } from './api';

const ResultWrapper = styled.section`
    display: flex;
    flex-direction: column;

    width: 60%;
    max-width: 600px;
    min-width: 320px;

    margin: 2em 0;
    padding: 8px 16px 0;

    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.5rem;
    color: rgba(0, 0, 0, 0.87);
    
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: white;
    
    &:empty {
        display:none;
    }
`;

const ResultItem = styled.div`
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);

    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.03);
    }
`;

const ItemFirstName = styled.div``;

const ItemLastName = styled.div`
    color: rgba(0, 0, 0, 0.54);
`;

const ItemNumber = styled.div``;

export default class SearchResults extends Component {

    delayTimeout = null;
    
    constructor(props) {
        super(props);

        this.state = {
            members: []
        };
    }

    componentWillReceiveProps(nextProps) {
        const search = nextProps.search;
        
        if (search) {
            this.listMembers(nextProps.search);
        } else {
            this.setState({ members: [] });
        }
    }

    listMembers(search) {
        clearTimeout(this.delayTimeout);
        
        this.delayTimeout = setTimeout(() => {
            searchMembers(search).then(members => this.setState({ members }));
        }, 300);
    }

    render() {
        const handleClick = (member) => (e) => {
            this.props.onSelect(member);
        };

        return (
            <ResultWrapper>
                {this.state.members.map((member, key) => {
                    return (
                        <ResultItem key={key} onClick={handleClick(member)}>
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
