export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e799be9867ac29982a2714c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p68h8ktq',
                  apiId: '0163cf12-870f-48f0-b89a-c81afc84d449'
                },
                {
                  buildHookId: '5e799be9867ac29982a2714b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kxbucwcs',
                  apiId: 'b9fc1d28-9162-4ef9-b0b6-cfc013d4b1de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/philgetz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kxbucwcs.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
