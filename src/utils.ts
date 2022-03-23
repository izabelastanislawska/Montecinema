type BookGenre = "classic" | "novel" | "horror" | "fantasy"

interface Book {
    id: string;
    title: string;
    author: Author;
    releaseDate: Date;
    genre: BookGenre;
}

interface Author {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
}

const homer: Author = {
    id: 'author-id-123',
    firstName: "Homer",
    lastName: "Simpson",
    age: 200,
}

const setDateBc = (yearBc: number): Date => {
    const year = yearBc > 0 ? -yearBc : yearBc;
    const date= new Date();
    date.setFullYear(year);
    return date;
}

const illiad: Book = {
    id: '123-abc',
    title: 'Iliada',
    author: homer,
    releaseDate: setDateBc(-3500),
    genre: "classic"
}

// lub Array<Book></Book>
const bookArray: Book[] = [illiad];

const booksTitles = bookArray.map((book) => book.title);

const bookDictionary = bookArray.reduce((acc, book) => {
    return {
        ...acc,
        [book.id]: book,
    };
}, {} as Record<string, Book>); //kastowanie typów
