import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Project</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="content">
          <h1>Hi, I'm Vinay.</h1>
        <img className='image' src='https://i.postimg.cc/xTQ8hD34/pngegg.png' />
      </div>
    </header> 
    <section className='about'>
    <div className='rightc'>
        <img className='image2' src='https://i.postimg.cc/c48w65W7/pngwing-com.png' />
      </div>
      <div className='leftc'>
      <h1 className='head'>About me</h1>
      <div className='para'>
      <p>A computer science and engineering student with a strong interest in web development and Machine Learning, seeking opportunities
        to apply technical skills and contribute to innovative projects.
        Eager to Learn and collaborate in a dynamic environment.
      </p>
      </div>
      </div>
    </section>
    <section className='skills'>
      <h1 className='head2'>Skills</h1>
      <div className='points'>
      <h2>C++</h2>
      <h2>python</h2>
      <h2>HTML-CSS</h2>
      <h2>Javascript</h2>
      <h2>Machine Learning</h2>
      <h2></h2>
      </div>
    </section>
    <section className='Projects'>
      <h1>Projects</h1>
    </section>
    </div>
  );
}

export default App;
