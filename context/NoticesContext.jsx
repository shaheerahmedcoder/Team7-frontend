// All the notices are here we will be adding relevant notices soon!

import { createContext, useContext, useState } from 'react';

const DUMMY_NOTICES = [
    {
        id: '1',
        title: 'Final Semester Examination Schedule (Fall 2023)',
        category: 'EXAM',
        preview: 'The official examination timetable for the final semester has been released.',
        body: 'All students are hereby notified that the Final Semester Examinations for the Fall 2023 session will commence from December 15, 2023. The detailed schedule for all departments has been finalized and is attached below for your reference.',
        date: 'Oct 24, 2023',
        isUnread: true,
        postedBy: 'Admin Office',
        attachment: {
            name: 'Exam_Schedule.pdf',
            size: '2.4 MB',
            type: 'PDF'
        }
    },
    {
        id: '2',
        title: 'Annual Tech Symposium - Registrations Open',
        category: 'EVENT',
        preview: 'Join us for the 15th Annual Tech Symposium.',
        body: 'Registrations are now open for the Annual Tech Symposium. Keynote speakers include industry leaders from top technology firms.',
        date: 'Oct 22, 2023',
        isUnread: false,
        postedBy: 'Admin Office',
        attachment: null
    },
    {
        id: '3',
        title: 'Library Hours Extended for Finals Week',
        category: 'GENERAL',
        preview: 'The Central Library will remain open 24/7 starting next Monday.',
        body: 'To support student preparation, the Central Library will remain open 24/7 starting next Monday until the end of exams.',
        date: 'Oct 20, 2023',
        isUnread: false,
        postedBy: 'Admin Office',
        attachment: null
    },
    {
        id: '4',
        title: 'New Elective Course Selection Guidelines',
        category: 'ACADEMIC',
        preview: 'The registration process for elective courses has changed.',
        body: 'New guidelines for elective course selection have been released. Please review the updated guidelines before the portal opens.',
        date: 'Oct 19, 2023',
        isUnread: true,
        postedBy: 'Admin Office',
        attachment: null
    }
];

const NoticesContext = createContext();

export const NoticesProvider = ({ children }) => {
    const [notices, setNotices] = useState(DUMMY_NOTICES);

    const addNotice = (notice) => {
        const newNotice = {
            ...notice,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
            }),
            isUnread: true,
            postedBy: 'Admin Office',
            preview: notice.body.substring(0, 100) + (notice.body.length > 100 ? '...' : ''),
        };
        setNotices(prev => [newNotice, ...prev]);
    };

    return (
        <NoticesContext.Provider value={{ notices, addNotice }}>
            {children}
        </NoticesContext.Provider>
    );
};

export const useNotices = () => useContext(NoticesContext);
