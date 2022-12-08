import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import Footer from './components/Footer';


import CreateTodo from './components todos/CreateTodo';
import TodoTable from './components todos/TodoTable';
import { getAllTodos, createTodo } from './services/TodoService';
import DisplayBoards from './components todos/DisplayBoard';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
      createTodo(todoShelf)
      .then(() => {
        setNumberTodos(numberOfTodos+1);
    });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
    .then(data => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  }
  

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      } 
      setBookShelf(inputData);
    }

    const handleOnChangeForm2 = (e) => {
      let inputDatas = todoShelf;
      if (e.target.name === 'todo') {
        todoShelf.todo = e.target.value;
      } else if (e.target.name === 'category2') {
        todoShelf.category2 = e.target.value;
      } else if (e.target.name === 'isComplete') {
        todoShelf.isComplete = e.target.value;
      }
      setTodoShelf(inputDatas);
  }

  



  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />

        <div className='book'>

        <CreateBook 
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
          />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
          />
        <BookTable books={books} />
        </div>
        
        <div className='todo'>
        <CreateTodo 
          TodoShelf={todoShelf}
          onChangeForm={handleOnChangeForm2}
          handleSubmit={handleSubmit}
          />
        <DisplayBoards 
          numberOftTodos={numberOfTodos} 
          getAllTodo={getAllTodo} 
          />
        <TodoTable todos={todos} />
        </div>

        <Footer />

        
      </div>
    </div>

  );
}

export default App;
