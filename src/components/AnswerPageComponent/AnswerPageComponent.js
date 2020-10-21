import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { checkIfDocumentExists } from '../../firebase/db';

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
        return <p>loading</p>

    if (_404) return <p>404</p>

    return (
        <p>{answerURL}</p>
    );
}

export default AnswerPage;