export const AboutUs = () => {
  return (
    `<section class="about">
    <article class="about__article">
      <div class="about__card card">
        <h2 class="card__title">
          <span class="card__data">30</span> 
          Day Vanilla JS Coding Challenge
        </h2>
        <p>
          Build <span class="card__data">30</span> things in
          <span class="card__data">30</span> days with
          <span class="card__data">30</span> tutorials
        </p>
        <p>
          No Frameworks <span class="separator"><svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg></span> No Compilers
          <span class="separator"><svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg></span> No Libraries
          <span class="separator"><svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg></span> No Boilerplate
        </p>
        <p>
          This is a repository based on Wes Bos's 30 Javascript project challenge <span class="js30">JAVASCRIPT30</span>. Take a look at their website.
        </p>
        <p>
          <a href="https://javascript30.com/" target="_blank" class="btn btn__goto" rel="noopener noreferrer">Visit JAVASCRIPT 30</a>
        </p>
      </div>
      <a href="https://javascript30.com/" target="_blank">
        <img
          src="img/reto.png"
          width="280"
          height="150"
          alt="JavaScript 30 Days"
          class="about__image"
        />
      </a>
    </article>
    </section>`  
  );
};
