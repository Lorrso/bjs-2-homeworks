class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.type = type;
		this.state = 100;
	}
	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}
	get state() {
		return this._state;
	}
	fix() {
		this.state = this._state * 1.5;
		return this.state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = `magazine`;
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = `book`;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = `novel`;
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = `fantastic`;
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = `detective`;
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			books.push(book);
		} else {
			console.log(`Перед добавлением {book} в библиотеку настоятельно рекомендуем экземплярчик подклеить.`)
		}
	}

	findBookBy(type, value) {
		let foundBook = null;
		for (type in Library.books) {
			if (Library.books[type] === value) {
				foundBook = Library.books[type];
				break;
			}
		}
		return foundBook;
	}

	giveBookByName(bookName) {
		let foundBook = null;
		for (let book of Library.books) {
			if (Library.books.name = bookName) {
				let index = Library.books.indexOf(book);
				foundBook = Library.books[index];
				Library.books.splice(index);
				break;
			}
		}
		return foundBook;
	}
}