import { useEffect, useState } from "react";

export const usePageContentFetch = ({ genre, requestType, genreParam }) => {
    const [perGenreList, setPerGenreList] = useState([]);
    const createList = (items) => {
        setPerGenreList((current) => [...current, ...items]);
    };

    useEffect(() => {
        setPerGenreList([]);
        if (genre[0]) {
            for (let i = 1; i < 3; i++) {
                fetch(
                    "https://api.themoviedb.org/3/discover/" +
                        requestType +
                        "?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
                        i +
                        "&with_genres=" +
                        genre[0].id
                )
                    .then((res) => res.json())
                    .then((res) => createList(res.results));
            }
        }
    }, [genreParam]);

    return [perGenreList];
};
