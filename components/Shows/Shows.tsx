import React from "react";
import styled from "styled-components";
import { media } from "../../mixins/media";
import { SectionHeading } from "../SectionHeading";
import { tourDates } from "./dates";

export const Shows: React.FC = () => {
    return (
        <Wrapper>
            <SectionHeading title="Upcoming Shows" />
            <TourDatesContainer>
                {tourDates.map((tourDate, index) => (
                    <TourDateItem key={index}>
                        <div style={{ flex: 1 }}>
                            <Date>{tourDate.date}</Date>
                            <Venue>{tourDate.venue}</Venue>
                            {/* <City>{tourDate.city}</City> */}
                        </div>
                        {/* {tourDate.ticketLink ? (
                            <TicketLink href={tourDate.ticketLink} target="_blank" rel="noopener noreferrer">
                                Get Tickets
                            </TicketLink>
                        ) : (
                            <NoTickets>{tourDate.ticketText || "Available at Door"}</NoTickets>
                        )} */}
                        <City>{tourDate.city}</City>
                    </TourDateItem>
                ))}
            </TourDatesContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
`;

const TourDatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #fff;
    border-top: 1px solid #444;
`;

const TourDateItem = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 0;
    border-bottom: 1px solid #444;
`;

const Date = styled.p`
    font-size: 0.8em;
    font-weight: 600;
    color: #ebcf9e;

    ${media.tablet`
        font-size: 0.9em;
    `}
`;

const Venue = styled.p`
    font-size: 1.2em;
    font-weight: bold;

    ${media.tablet`
        font-size: 1.4em;
        margin-top: 4px;
    `}
`;

// const City = styled.p`
//     font-size: 0.9em;
//     color: #ccc;
// `;

const City = styled.p`
    font-size: 1em;
`;

const TicketLink = styled.a`
    display: inline-block;
    padding: 8px 20px;
    background-color: #ea7d0f;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;

    &:hover,
    &:focus {
        background-color: #e98e33;
    }
`;

const NoTickets = styled.p`
    margin: 0;
    color: #ccc;
`;
