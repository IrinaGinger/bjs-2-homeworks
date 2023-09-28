class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) { 
    if (number < 0) {
      this._state = 0;
    }
    else if (number > 100) {
      this._state = 100;
    }
    else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}
  
  class Magazine extends PrintEditionItem {
    type = "magazine";
  }
  
  class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, type = "book") {
    super(name, releaseDate, pagesCount, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let foundBook = this.books.find(element => element[type] === value);
    return foundBook ? foundBook : null;
  }

  giveBookByName(bookName) {
    let foundIndex = this.books.findIndex(element => element.name === bookName);
    if (foundIndex >= 0) { 
      const foundBook = this.books[foundIndex];
      this.books.splice(foundIndex, 1);
      return foundBook;
    }
    else {
      return null;
    }
  }
}

function testLibrary() {
  const library = new Library("Студенческая библиотека");
  let issuedBook;

  library.addBook(
    new NovelBook(
      "Лев Толстой",
      "Война и мир",
      1919,
      1300
    )
  );
  library.addBook(
    new NovelBook(
      "Александр Дюма",
      "Три мушкетера",
      1980,
      250
    )
  );
  library.addBook(
    new DetectiveBook(
      "Иоанна Хмелевская",
      "Что сказал покойник",
      1995,
      100
    )
  );
  library.addBook(
    new FantasticBook(
      "Роджер Желязны",
      "Хроники Амбера",
      2001,
      750
    )
  );
  
  console.log(library.findBookBy("releaseDate", 1919).name); 
  
  console.log("Количество книг до выдачи: " + library.books.length);
  issuedBook = library.giveBookByName("Три мушкетера");
  console.log("Количество книг после выдачи: " + library.books.length);

  issuedBook.state = 15;
  console.log(issuedBook.state);

  issuedBook.fix();
  console.log(issuedBook.state);

  console.log("Количество книг до возврата: " + library.books.length);
  library.addBook(issuedBook);
  console.log("Количество книг после возврата: " + library.books.length); 

  issuedBook.fix();
  console.log(issuedBook.state);

  console.log("Количество книг до возврата: " + library.books.length);
  library.addBook(issuedBook);
  console.log("Количество книг после возврата: " + library.books.length); 
}

//______________________________________________
// Дополнительное задание

class Student {
  constructor(user) {
    this.name = user;
    this.marks = {};
  }

  addMark(mark, subject) {
    if ((mark >= 2) && (mark <= 5)) {
      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [mark];
      } else {
        this.marks[subject].push(mark);
      }  
      return this.marks;
    }
    alert("Неверная оценка");
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      alert("Предмет отсутствует");
      return 0;
    } else {
      let sum = this.marks[subject].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return sum / this.marks[subject].length;
    }  
  }

  getAverage() {
    let subjectArray = Object.keys(this.marks);
    
    if (subjectArray.length > 0) {
      let sumOfAverage = subjectArray.reduce((accumulator, currentValue) => accumulator + this.getAverageBySubject(currentValue), 0);
      return sumOfAverage / subjectArray.length;
    } else {
      alert("Оценки отсутствуют");
      return 0;
    }
  }
}  