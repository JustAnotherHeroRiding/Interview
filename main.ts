// Sistem za menadziranje so knigi OOP koncepti
// Menadziranje so knigi i dostapnosta na knigi vo edna biblioteka
// Edna edinka Book so naslov, avtor, id broj

interface BookInterface {
  id: number;
  naslov: string;
  avtor: string;
}

interface AvailableAndRented {
  availableBooks: Book[];
  rentedBooks: Book[];
}

//
class Book {
  private readonly id: number;
  private naslov: string;
  private avtor: string;
  private isAvailable: boolean;

  constructor(bookInfo: BookInterface) {
    this.id = bookInfo.id;
    this.naslov = bookInfo.naslov;
    this.avtor = bookInfo.avtor;
    this.isAvailable = false;
  }

  getIsAvailable() {
    return this.isAvailable;
  }

  swapBookAvailbility() {
    this.isAvailable = !this.isAvailable;
  }

  getTitle() {
    return this.naslov;
  }
}

class Biblioteka {
  private books: Book[];
  private rentedBooks: Book[];

  constructor(books: Book[]) {
    this.books = books ? books : [];
    this.rentedBooks = [];
  }

  getAvailableBooks() {
    return this.books?.filter((book) => book.getIsAvailable());
  }

  // find by naslov
  getByTitle(naslov: string) {
    return this.books?.find((book) => book.getTitle() === naslov);
  }

  // add a book
  addBook(book: Book) {
    this.books?.push(book);
  }

  //pozajmuvanje
  lendBook(naslov: string) {
    const bookToLend = this.getByTitle(naslov);
    if (bookToLend?.getIsAvailable()) {
      bookToLend?.swapBookAvailbility();
      this.rentedBooks?.push(bookToLend);
    }
  }

  // vrakanje
  returnBook(naslov: string) {
    const bookToLend = this.getByTitle(naslov);
    if (bookToLend?.getIsAvailable()) {
      bookToLend?.swapBookAvailbility();
      const rentedBookIndex = this.rentedBooks?.indexOf(bookToLend);
      if (rentedBookIndex === -1) {
        return;
      }
      this.rentedBooks?.splice(rentedBookIndex, 1);
    }
  }

  getAvailableAndRented(): AvailableAndRented {
    const newAvailable = this.getAvailableBooks();
    /* const newRented = this.rentedBooks.filter(
      (book) => newAvailable.indexOf(book) === -1
    ); */
    const newRented = this.rentedBooks.filter((book) => !newAvailable.includes(book))
    const copyRented = [...newRented]
   // const reduce = Map
    return {
      availableBooks: this.getAvailableBooks(),
      rentedBooks: this.rentedBooks,
    };
  }
}

// 2 nizi
// edna so available knigi
// edna so kniga sto ne se available

const book = new Book({ id: 1, naslov: "Kniga", avtor: "Avtor" });
