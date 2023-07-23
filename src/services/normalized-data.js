import { genresNames } from "./genres-names";

// Normalize the data
export default function normalizedData(results) {
    return results.map(movie => {
        const genres = createGenres(genresNames, movie.genre_ids);
        let listOfGenres = genres[0];

        if (listOfGenres.length > 3) {
            listOfGenres.splice(2, 5);

            let other = {
                id: 777,
                name: 'Other',
            };

            listOfGenres.push(other);
        }

        let objData = {
            ...movie,
            genres: listOfGenres,
        };

        return objData;
    });
}

//create the Array/List of Genres (names)
function createGenres(arrayID, genresID) {
let arrayOfGenres = [];
return arrayID.map(element => {
    if (genresID.includes(element.id)) {
    arrayOfGenres.push(element);
    }
    return arrayOfGenres;
});
}
