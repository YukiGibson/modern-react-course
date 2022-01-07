import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";


class App extends React.Component {
    render() {
        return (
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetails author="Sam" timeAgo="Today at 4:45PM" comment="This is a nice comment"/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails author="Alex" timeAgo="Today at 5:45PM" comment="Ok that was epic"/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails author="Jane" timeAgo="Today at 7:45PM" comment="Well, how about that"/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails author="Sam" timeAgo="Today at 4:45PM" comment="7/8 with rice"/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails author="Sam"/>
                </ApprovalCard>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
