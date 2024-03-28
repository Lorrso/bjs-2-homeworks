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

	addBook(printItem) {
		if (printItem.state > 30) {
			this.books.push(printItem);
		} else {
			console.log(`Перед добавлением {book} в библиотеку настоятельно рекомендуем экземплярчик подклеить.`)
		}
	}

	findBookBy(type, value) {
        if (this.books.length == 0) return null;
		for (type in this.books) {
			if (this.books[type] === value) {
				return this.books[type];
			}
		}
	}

	giveBookByName(bookName) {
        if (this.books.length == 0) return null;
        let foundBook;
		for (let book of this.books) {
			if (book = bookName) {
				let index = this.books.indexOf(bookName);
				foundBook = this.books[index];
				this.books.splice(index);
				break;
			}
		}
		return foundBook;
	}
}