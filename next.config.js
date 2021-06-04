const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'kEc1014',
        mongodb_password: 'MHTOL7xOLnOgBqcY',
        mongodb_clustername: 'kec-portfolio',
        mongodb_database: 'portfolio-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'kEc1014',
      mongodb_password: 'MHTOL7xOLnOgBqcY',
      mongodb_clustername: 'kec-portfolio',
      mongodb_database: 'portfolio',
    },
  };
};
