const a = 1;

const b = 2;

const c = a + b;

console.log(c);

// this is a comment

export const getStaticProps = async () => {
  return {
    props: {
      data: 'data',
    },
  };
};