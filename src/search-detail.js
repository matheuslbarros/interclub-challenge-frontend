import React, { Component } from 'react';
import styled from 'styled-components';

const DetailWrapper = styled.section`
`;

const DetailModal = styled.div`
    position: fixed;
    z-index: 2;
    padding: 2em 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

const DetailContent = styled.div`
    text-align: center;
    border: 1px solid #888;
    background-color: #fefefe;
    margin: 2em auto;
    padding: 2em;
    width: 60%;
    max-width: 600px;
    min-width: 320px;
`;

const Close = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    line-height: 0.5;
    &:hover,
    &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

const PhotoWrapper = styled.div`
    margin: 1em 0;
`;

const MemberFullName = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
`;

const DetailItemList = styled.div`
    color: rgba(0, 0, 0, 0.54);
    margin: 2em 0;
`;

const DetailItem = styled.div`
    margin-top: 2em;
`;

const DetailItemName = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;

const DetailItemValue = styled.div`
    font-size: 16px;
`;

export default class SearchDetail extends Component {
    render() {
        const member = this.props.member || {};

        return (
            <DetailWrapper>
                {this.props.showModal && (
                    <DetailModal>
                        <DetailContent>
                            <Close onClick={this.props.onRequestClose}>&times;</Close>
                            
                            <PhotoWrapper>
                                <img src={member.photo} alt="Member" />
                            </PhotoWrapper>

                            <MemberFullName>
                                {member.first_name} {member.last_name}
                            </MemberFullName>
                            <DetailItemList>
                                <DetailItem>
                                    <DetailItemName>Address</DetailItemName>
                                    <DetailItemValue>{member.address}</DetailItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <DetailItemName>Phone</DetailItemName>
                                    <DetailItemValue>{member.phone}</DetailItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <DetailItemName>Email</DetailItemName>
                                    <DetailItemValue>{member.email}</DetailItemValue>
                                </DetailItem>
                            </DetailItemList>
                        </DetailContent>
                    </DetailModal>
                )}
            </DetailWrapper>
        );
    }
}
