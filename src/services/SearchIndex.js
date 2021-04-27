const SEARCH_SERVER_URL = 'http://127.0.0.1:5000/'

// export const searchPhrase = async (phrase) =>
// {
//     const response = await fetch(SEARCH_SERVER_URL, {
//         method: "POST",
//         body: JSON.stringify(phrase),
//         headers: {
//             'content-type': 'application/json',
//         }
//     });
//     return await response.json()
// };

export const searchPhrase = (phrase) =>
    fetch(SEARCH_SERVER_URL, {
        method: 'POST',
        body: JSON.stringify(phrase),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())


// export const findCourseById = (courseId) => {
//     return fetch(`${SEARCH_SERVER_URL}/${courseId}`)
//         .then(response => response.json())
// };
//
// export const updateCourse = async (courseId, course) => {
//     const response = await fetch(`${SEARCH_SERVER_URL}/${courseId}`, {
//         method: 'PUT',
//         body: JSON.stringify(course),
//         headers: {
//             'content-type': 'application/json'
//         }
//     });
//     return await response.json()
// };

