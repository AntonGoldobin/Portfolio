const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/AntonGoldobin/portfolio.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)