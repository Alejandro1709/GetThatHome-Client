export const fonts = {
  primary: `'Montserrat', sans-serif`,
  secondary: `'Inter', sans-serif`,
};

export const typography = {
  headline: {
    1: `
      font-size: 6rem;
      line-height: 8rem;
      `,
    2: `
      font-size: 4rem;
      line-height: 5.5rem;
      `,
    3: `
      font-size: 3rem;
      line-height: 4rem;
      `,
    4: `
      font-size: 2.25rem;
      line-height: 3rem;
      `,
    5: `
      font-size: 1.5rem;
      line-height: 2rem;
      `,
    6: `
      font-size: 1.25rem;
      line-height: 1.75rem;
      `,
  },
  subtitle: {
    1: `
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
      `,
    2: `
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      `,
  },
  body: {
    1: `
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0.15px;
      font-weight: 400;
      `,
    2: `
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 400;
      `,
  },
  button: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    font-weight: 500;
  `,
  caption: `
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
  `,
  overline: `
    font-size: 0.625rem;
    line-height: 1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 400;
  `,
};

for (const size in typography.headline) {
  typography.headline[size] += `
    font-family: ${fonts.primary};
  `;
  if (size === 2) {
    typography.headline[size] += `
      font-weight: 300;
      `;
  } else if (size === 6) {
    typography.headline[size] += `
    font-weight: 500;
    `;
  } else {
    typography.headline[size] += `
      font-weight: 400;
      `;
  }
}
