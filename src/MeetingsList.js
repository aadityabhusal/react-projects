import React, { Component } from 'react';
import firebase from "./Firebase";
import { navigate } from '@reach/router';
import { GoTrashcan, GoListUnordered } from "react-icons/go";
import { FaLink } from 'react-icons/fa';

class MeetingsList extends Component{

    deleteMeeting = (e, currId) =>{
        e.preventDefault();
        const ref = firebase.database().ref(`meetings/${this.props.userID}/${currId}`);
        ref.remove();
    }

	render(){
        const {meetings} = this.props;
        const meetingsList = meetings.map(meeting => {
            return <div>
                <div className="list-group-item d-flex" key={meeting.meetingId}>
                    <section className="btn-group align-self-center" role="group" aria-label="Meeting Options">
                        <button className="btn btn-sm btn-outline-secondary" title="Delete Meeting" onClick={e => this.deleteMeeting(e, meeting.meetingId)}>
                            <GoTrashcan />
                        </button>
                        <button className="btn btn-sm btn-outline-secondary" title="Check In" onClick={() => navigate(`/checkin/${this.props.userID}/${meeting.meetingId}`)}>
                            <FaLink />
                        </button>
                        <button className="btn btn-sm btn-outline-secondary" title="Meetings List" onClick={() => navigate(`/attendees/${this.props.userID}/${meeting.meetingId}`)}>
                            <GoListUnordered />
                        </button>
                    </section>
                    <section className="pl-3 text-left align-self-center">
                        {meeting.meetingName}
                    </section>
                </div>
            </div>
        })
        return(
            <div>{meetingsList}</div>
        )
    }
}

export default MeetingsList;