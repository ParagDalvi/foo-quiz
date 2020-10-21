import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { checkIfDocumentExists } from '../../firebase/db';
import _404Component from '../404/_404Component';
import CustomNavbar from '../Reuse/CustomNavbar';

const AnswerPage = () => {
    let { answerURL } = useParams();

    const [_404, set404] = useState(false);
    const [loading, setLoading] = useState(true);

    var quizName, uid;

    useEffect(() => {
        const foo = answerURL.split('-');
        quizName = foo[0];
        uid = foo[1];

        async function init() {
            if (quizName !== 'basic') {
                set404(true);
                setLoading(false);
                return;
            }
            if (!await checkIfDocumentExists(uid, 'basic-quiz')) {
                set404(true);
            }
            setLoading(false);
        }
        init();
    });

    if (loading)
        return (
            <div style={{ height: '100%' }}>
                <CustomNavbar />
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center">
                    <Spinner />
                </div>
            </div>
        );

    if (_404)
        return <_404Component />

    return (
        <p>{answerURL}</p>
    );
}

export default AnswerPage;