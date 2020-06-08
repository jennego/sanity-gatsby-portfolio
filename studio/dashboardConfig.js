export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eddee204265ff691f4f0d10',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-23rpzz3f',
                  apiId: '91fa00d1-8507-4296-b9e0-c3b11d09081b'
                },
                {
                  buildHookId: '5eddee202908fe535d99cc39',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vive8m9z',
                  apiId: '1b4cbf21-f538-47a6-ba90-963d8d39b5b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennego/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vive8m9z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
