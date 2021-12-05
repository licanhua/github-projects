module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Canhua's GitHub Projects",
        description: "List open source github projects developed by canhua",
        siteUrl: "https://licanhua.github.io/github-projects",
        navItems: [
          { title: 'Blogs', url: 'https://licanhua.github.io/' },
          { title: 'GitHub-Projects', url: '/docs/' },
          { title: 'Profile', url: 'https://licanhua.github.io/profile' },
          { title: 'Linkedin', url: 'https://www.linkedin.com/in/licanhua/' }
        ],
        sections: ['Projects']
      },
    },
  ],
};
