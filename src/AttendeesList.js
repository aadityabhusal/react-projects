import React, { Component } from 'react';
import firebase from "./Firebase";
import { GoTrashcan, GoStar, GoMail } from "react-icons/go";

class AttendeesList extends Component{

    deleteMeeting = (e, currId) =>{
        e.preventDefault();
        const ref = firebase.database().ref(`meetings/${this.props.userID}/${currId}`);
        ref.remove();
    }

    deleteAttendee = (e, whichMeeting, whichAttendee) => {
        e.preventDefault();
        const adminUser = this.props.adminUser;

        const ref = firebase.database().ref(`meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}`);

        ref.remove();
    }

    toggleStar = (e, star, whichMeeting, whichAttendee) =>{
        e.preventDefault();
        const adminUser = this.props.adminUser;

        const ref = firebase.database().ref(`meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}/star`);

        if(star === undefined){
            ref.set(true)
        }else{
            ref.set(!star);
        }
    }

	render(){
        const admin = this.props.adminUser === this.props.userID ? true : false;
        const {attendees} = this.props;
        const attendeesList = attendees.map(attendee => {
            return (
                <div className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1" key={attendee.attendeeID}>
                    <div className="card ">
                        <div className={'card-body px-3 py-2 d-flex align-items-center ' + (admin ? '':'')} >
                            {admin && (
                            <div className="btn-group pr-2">
                                <button className={"btn btn-sm " + (attendee.star ? 'btn-info':'btn-outline-secondary')} title="Star the user" onClick={e => this.toggleStar(e, attendee.star, this.props.meetingID, attendee.attendeeID)}>
                                    <GoStar />
                                </button>

                                <a href={`mailto:${attendee.attendeeEmail}`} className='btn btn-sm btn-outline-secondary' title="Mail Attendee">
                                    <GoMail />
                                </a>

                                <button className="btn btn-sm btn-outline-secondary" title="Delete Attendee" onClick={e => this.deleteAttendee(e, this.props.meetingID, attendee.attendeeID)}>
                                    <GoTrashcan />
                                </button>

                            </div>)}
                            <div>{attendee.attendeeName}</div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="row justify-content-center">{attendeesList}</div>
        )
    }
}

export default AttendeesList;