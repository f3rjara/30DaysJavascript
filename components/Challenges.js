import { listChallenges } from '../utils/listChallenges.js';

export const Challenges = () => {
  const view = `
    <section class="challenges">
      <article class="challenges__article">
        ${listChallenges.map((challenge) => `
          <div class="card card--challenge">
            <h2 class="card__title card__title--chagellenge">
            ${challenge.title}</h2>
            <span class="card__subtitle">${challenge.subtitle}</span>
            <ul class="card__featured">
              ${challenge.featured.map((feature) => `
                <li class="card__item">${feature}</li>
              `).join('')}
            </ul>
            <a href="/${challenge.link}" class="btn btn__goto" rel="noopener noreferrer">View Challenge</a>
          </div>
        `).join('')}
      </article>
    </section>
  `;
  return view;
};
